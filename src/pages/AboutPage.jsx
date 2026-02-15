import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutPage() {
    return (
        <Container className="py-5">
            <Row className="mb-5">
                <Col lg={8} className="mx-auto">
                    <h1 style={{ color: "var(--text-primary)" }} className="mb-4">About Z Shop</h1>
                    <Card 
                        style={{ 
                            backgroundColor: "var(--background-elevated)", 
                            borderColor: "var(--border-color)" 
                        }}
                    >
                        <Card.Body>
                            <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                                Z Shop is a leading e-commerce platform dedicated to providing customers with 
                                high-quality electronics and gadgets at competitive prices. Founded with a mission 
                                to revolutionize online shopping, we bring together the best brands and products from 
                                around the world to your doorstep.
                            </p>
                            <h5 style={{ color: "var(--text-primary)", marginTop: "2rem", marginBottom: "1rem" }}>
                                Our Mission
                            </h5>
                            <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                                To empower customers with access to premium technology products and exceptional 
                                service, making quality electronics affordable and accessible to everyone.
                            </p>
                            <h5 style={{ color: "var(--text-primary)", marginTop: "2rem", marginBottom: "1rem" }}>
                                Our Vision
                            </h5>
                            <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                                To become the most trusted and customer-centric e-commerce platform for electronics, 
                                known for our reliability, diversity, and exceptional customer experience.
                            </p>
                            <h5 style={{ color: "var(--text-primary)", marginTop: "2rem", marginBottom: "1rem" }}>
                                Why Choose Us?
                            </h5>
                            <ul style={{ color: "var(--text-secondary)" }}>
                                <li>Wide selection of authentic products</li>
                                <li>Competitive pricing and regular discounts</li>
                                <li>Secure and encrypted transactions</li>
                                <li>Fast and reliable shipping</li>
                                <li>Excellent customer support 24/7</li>
                                <li>Easy returns and exchanges</li>
                                <li>Original warranty on all products</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={8} className="mx-auto">
                    <h3 style={{ color: "var(--text-primary)", marginBottom: "2rem" }}>Get in Touch</h3>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Card 
                                style={{ 
                                    backgroundColor: "var(--background-elevated)", 
                                    borderColor: "var(--border-color)", 
                                    height: "100%" 
                                }}
                            >
                                <Card.Body>
                                    <div style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "1rem" }}>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h6 style={{ color: "var(--text-primary)" }}>Address</h6>
                                    <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                                        Delhi, India<br />
                                        Z Shop Head Office
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Card 
                                style={{ 
                                    backgroundColor: "var(--background-elevated)", 
                                    borderColor: "var(--border-color)", 
                                    height: "100%" 
                                }}
                            >
                                <Card.Body>
                                    <div style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "1rem" }}>
                                        <FaPhone />
                                    </div>
                                    <h6 style={{ color: "var(--text-primary)" }}>Phone</h6>
                                    <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                                        +91 9874547410<br />
                                        Available 24/7
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Card 
                                style={{ 
                                    backgroundColor: "var(--background-elevated)", 
                                    borderColor: "var(--border-color)", 
                                    height: "100%" 
                                }}
                            >
                                <Card.Body>
                                    <div style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "1rem" }}>
                                        <FaEnvelope />
                                    </div>
                                    <h6 style={{ color: "var(--text-primary)" }}>Email</h6>
                                    <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                                        support@zshop.com<br />
                                        info@zshop.com
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Card 
                                style={{ 
                                    backgroundColor: "var(--background-elevated)", 
                                    borderColor: "var(--border-color)", 
                                    height: "100%" 
                                }}
                            >
                                <Card.Body>
                                    <div style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "1rem" }}>
                                        <FaGithub />
                                    </div>
                                    <h6 style={{ color: "var(--text-primary)" }}>Follow Us</h6>
                                    <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                                        <a href="#" style={{ color: "var(--primary)", textDecoration: "none" }}>GitHub</a> • 
                                        <a href="#" style={{ color: "var(--primary)", textDecoration: "none", marginLeft: "0.5rem" }}>Twitter</a>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
