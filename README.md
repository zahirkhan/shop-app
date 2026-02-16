# 🚀 ZShop CI/CD with Jenkins + Docker + kind + Kubernetes

This project demonstrates a complete local CI/CD pipeline using:

- Jenkins for automation
- Docker for containerization
- Local Docker Registry for image storage
- kind (Kubernetes in Docker) for local Kubernetes cluster
- Kubernetes for deployment

Everything runs locally and works fully offline after setup.

---

#  Prerequisites

Before setting up the pipeline, make sure you have:

- **Operating System:** Ubuntu/Debian (tested on 20.04+)  
- **Docker:** Installed and running  
- **kubectl:** Installed for Kubernetes management  
- **kind:** Installed for local Kubernetes clusters  
- **Jenkins:** Will be installed as part of setup  
- **Git:** Installed to clone repositories  
- **Internet connection:** For initial package downloads and cloning repos  

Check versions:

```bash
docker --version
kubectl version --client
kind --version
git --version
```

#  Install Jenkins (Ubuntu/Debian)

## Add Jenkins Repository & Install

```bash
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key

echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt update
sudo apt install jenkins
```

## Start Jenkins
### Enable Jenkins at boot:
```bash
sudo systemctl enable jenkins
```
### Start and Check Status Jenkins:
```bash
sudo systemctl start jenkins
sudo systemctl status jenkins
```
## Get Initial Admin Password
```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

```
## Open in browser:
http://localhost:8080

# Setup Local Docker Registry
```bash
docker run -d \
  -p 5000:5000 \
  --restart=always \
  --name local-registry \
  registry:2

```
## Registry will be available at: 
```bash 
localhost:5000
```

# Create kind Cluster
```bash 
kind create cluster --name zshop-cluster --config kind-config.yaml
```
## Connect registry to kind network:
```bash
docker network connect kind local-registry
```

# Jenkins Pipeline (Full CI/CD Flow)
## Create a Jenkinsfile in your project:
```groovy

pipeline {
    agent any

    environment {
       REGISTRY = "localhost:5000"
       BUILD_TAG = "${BUILD_NUMBER}"
       FRONTEND_IMAGE = "${REGISTRY}/zshop/frontend:${BUILD_TAG}"
       CLUSTER_NAME = "zshop-cluster"
       NAMESPACE = "zshop"
    }

    stages {

        stage('Checkout K8s Manifests') {
            steps {
                dir('./') {
                    git branch: 'k8s-simple', url: 'https://github.com/zahirkhan/shop-app.git'
                }
            }
        }

        stage('Ensure Registry Running') {
            steps {
                script {
                    sh """
                    docker inspect local-registry >/dev/null 2>&1 || \
                    docker run -d -p 5000:5000 --restart=always --name local-registry registry:2
                    """
                }
            }
        }

        stage('Create kind Cluster If Not Exists') {
            steps {
                script {
                    sh """
                    kind get clusters | grep ${CLUSTER_NAME} || \
                    kind create cluster --name ${CLUSTER_NAME} --config kind-config.yaml
                    """

                    sh """
                    docker network inspect kind | grep local-registry || \
                    docker network connect kind local-registry
                    """
                }
            }
        }

        stage('Create Namespace If Not Exists') {
            steps {
                script {
                    sh """
                    kubectl get namespace ${NAMESPACE} >/dev/null 2>&1 || \
                    kubectl create namespace ${NAMESPACE}
                    """
                }
            }
        }

        stage('Checkout App Code') {
            steps {
                git branch: 'ingress-implement', url: 'https://github.com/zahirkhan/shop-app.git'
            }
        }

        // Build and push image local registry
        stage('Build Docker Image') {
    steps {
        sh "docker build -t $FRONTEND_IMAGE -f Dockerfile ."
    }
}

stage('Push Docker Image') {
    steps {
        sh "docker push $FRONTEND_IMAGE"
    }
}

stage('Deploy to Kubernetes') {
    steps {
        sh "kubectl apply -f k8s/frontend-service.yaml -n ${NAMESPACE}"
        sh "kubectl apply -f k8s/frontend-deployment.yaml -n ${NAMESPACE}"
        sh "kubectl set image deployment/frontend frontend=${FRONTEND_IMAGE} -n ${NAMESPACE}"
        sh "kubectl rollout status deployment/frontend -n ${NAMESPACE}"
    }
}

        stage('Deploy Ingress') {
            steps {
                sh "kubectl apply -f k8s/frontend-ingress.yaml -n ${NAMESPACE}"
            }
        }

        stage('Verify Deployment') {
            steps {
                sh "kubectl get all -n ${NAMESPACE}"
                sh "kubectl get ingress -n ${NAMESPACE}"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}



```

# How the Full Flow Works 
 - Jenkins builds Docker image
 - Image is pushed to localhost:5000
 - kind pulls image from local-registry:5000 internally
 - Kubernetes deploys the application
 - Pods start successfully

# Access the Application
## Get NodePort
```bash
kubectl get svc frontend-service

```

### Port explanation:
    - containerPort: 3000 → inside Pod only
    - service port: 80 → inside cluster
    - nodePort: 31xxx → exposed outside cluster


## Alternative: Port Forwarding (Recommended for Local)
 ``` bash 
 kubectl port-forward service/frontend-service 3000:80
  ```
## Access at:
- http://localhost:3000

# Final Result
## You now have:
 - Private local Docker registry
 - Automatic kind cluster creation
 - Auto registry connection
 - Real push/pull image workflow
 - Full CI/CD pipeline
 - Production-like architecture
 - Fully offline capability

# Architecture Overview
- Jenkins → Docker Build → Local Registry → kind → Kubernetes → Running Pods


# Install NGINX Ingress Controller
```bash 
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

## Wait until ready:
```bash 
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

Verify: kubectl get pods -n ingress-nginx
```

# Update Frontend Service
## Change service type to ClusterIP (NOT NodePort).
### k8s/frontend-deployment.yaml (Service part)
```yaml 
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  type: ClusterIP
  selector:
    app: frontend
  ports:
    - port: 80
      targetPort: 3000
```
```bash
kubectl apply -f k8s/frontend-deployment.yaml
```

# Create Ingress Resource
## k8s/frontend-ingress.yaml
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: frontend-ingress
spec:
  ingressClassName: nginx
  rules:
  - host: zshop.local
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80
```
```bash
kubectl apply -f k8s/frontend-ingress.yaml
```

## Add Host Entry
	- 127.0.0.1 zshop.local


### Test It
- Open browser:
 - http://zshop.local

# If It Doesn’t Work
## Run:
```bash 
kubectl get pods
kubectl get svc
kubectl get ingress
kubectl get pods -n ingress-nginx
```
# Common issues:
### Problem	Fix
- 404 error	Ingress not linked to correct service
- Connection refused	Cluster created without port mapping
- No response	ingress controller not ready

## You now have:
- Real Ingress
- Clean URLs
- Production-like architecture
- Works with local registry
- No NodePort needed