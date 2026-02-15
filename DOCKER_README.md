# Z Shop - Docker Setup Guide

## Overview
This project includes Docker configuration for easy deployment and development.

## Prerequisites
- Docker (v20.10+)
- Docker Compose (v2.0+)

## Building and Running

### Using Docker Compose (Recommended)
```bash
# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Using Docker directly

#### Build the image
```bash
docker build -t zshop:latest .
```

#### Run the container
```bash
docker run -p 3000:3000 --name zshop zshop:latest
```

#### Access the application
Open your browser and navigate to: `http://localhost:3000`

## Development

### Build image for development
```bash
docker build -t zshop:dev .
```

### Run with interactive mode
```bash
docker run -it -p 3000:3000 --name zshop-dev zshop:dev
```

## Docker Images

### Production Image
- **Base**: `node:18-alpine`
- **Size**: ~150MB (optimized)
- **Optimization**: Multi-stage build to reduce final image size
- **Server**: Node serve package for production serving

### Build Process
1. Stage 1 (Builder): Installs dependencies and builds the application
2. Stage 2 (Production): Uses only the built dist folder

## Environment Variables
```bash
NODE_ENV=production  # Default environment
```

## Health Check
The container includes a health check that verifies the application is running:
- Interval: 30 seconds
- Timeout: 10 seconds
- Retries: 3
- Start period: 5 seconds

## Port Configuration
- **Default Port**: 3000
- To change: Modify port mapping in `docker-compose.yml` or use `-p` flag

## File Structure
```
.
├── Dockerfile           # Production Dockerfile
├── .dockerignore        # Files to exclude from Docker build
├── docker-compose.yml   # Docker Compose configuration
└── DOCKER_README.md     # This file
```

## Useful Commands

### View running containers
```bash
docker ps
```

### View container logs
```bash
docker logs zshop
```

### Execute command in container
```bash
docker exec -it zshop sh
```

### Remove container
```bash
docker rm zshop
```

### Remove image
```bash
docker rmi zshop:latest
```

## Production Deployment

### AWS ECS
1. Push image to Amazon ECR
2. Create ECS task definition
3. Deploy using ECS service

### Docker Hub
```bash
docker tag zshop:latest yourname/zshop:latest
docker push yourname/zshop:latest
```

### Self-hosted
```bash
docker-compose up -d
```

## Troubleshooting

### Port already in use
```bash
# Change port in docker-compose.yml or use different port
docker run -p 3001:3000 zshop:latest
```

### Container exits immediately
```bash
# Check logs
docker logs zshop

# Run in interactive mode
docker run -it zshop:latest
```

### Build fails
```bash
# Build with no cache
docker build --no-cache -t zshop:latest .
```

## Performance Tips

1. Use `.dockerignore` to exclude unnecessary files
2. Multi-stage build reduces final image size
3. Alpine base image (~5MB) keeps image small
4. Node 18 LTS is stable and well-supported

## Security Considerations

1. Run as non-root user (inherited from node:18-alpine)
2. Read-only root filesystem (can be added if needed)
3. Health checks monitor container status
4. Latest Alpine LTS for security patches

## Support & Documentation

- [Node Docker Official Image](https://hub.docker.com/_/node)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)
