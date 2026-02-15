import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("Please fill out all fields", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark"
            });
            return;
        }

        try {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            toast.success("Message sent successfully! We'll get back to you soon.", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark"
            });
            
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            toast.error("Failed to send message. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container className="py-5">
            <h1 style={{ color: "var(--text-primary)" }} className="mb-5 text-center">Contact Us</h1>

            <Row className="mb-5">
                <Col md={6} className="mb-4">
                    <Card 
                        style={{ 
                            backgroundColor: "var(--background-elevated)", 
                            borderColor: "var(--border-color)",
                            height: "100%"
                        }}
                    >
                        <Card.Body>
                            <h5 style={{ color: "var(--text-primary)", marginBottom: "2rem" }}>Get in Touch</h5>
                            
                            <div className="mb-4">
                                <div style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <h6 style={{ color: "var(--text-primary)" }}>Address</h6>
                                <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                                    Z Shop Head Office<br />
                                    Delhi, India<br />
                                    ZIP Code: 123456
                                </p>
                            </div>

                            <div className="mb-4">
                                <div style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                                    <FaPhone />
                                </div>
                                <h6 style={{ color: "var(--text-primary)" }}>Phone</h6>
                                <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                                    +91 9874547410<br />
                                    +91 8888888888
                                </p>
                            </div>

                            <div className="mb-4">
                                <div style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                                    <FaEnvelope />
                                </div>
                                <h6 style={{ color: "var(--text-primary)" }}>Email</h6>
                                <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                                    support@zshop.com<br />
                                    info@zshop.com<br />
                                    sales@zshop.com
                                </p>
                            </div>

                            <div>
                                <div style={{ color: "var(--primary)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                                    <FaClock />
                                </div>
                                <h6 style={{ color: "var(--text-primary)" }}>Business Hours</h6>
                                <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 4:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card 
                        style={{ 
                            backgroundColor: "var(--background-elevated)", 
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <Card.Body>
                            <h5 style={{ color: "var(--text-primary)", marginBottom: "2rem" }}>Send us a Message</h5>
                            
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ color: "var(--text-primary)" }}>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        style={{
                                            backgroundColor: "var(--background-secondary)",
                                            borderColor: "var(--border-color)",
                                            color: "var(--text-primary)"
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label style={{ color: "var(--text-primary)" }}>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        style={{
                                            backgroundColor: "var(--background-secondary)",
                                            borderColor: "var(--border-color)",
                                            color: "var(--text-primary)"
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label style={{ color: "var(--text-primary)" }}>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What is this about?"
                                        style={{
                                            backgroundColor: "var(--background-secondary)",
                                            borderColor: "var(--border-color)",
                                            color: "var(--text-primary)"
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label style={{ color: "var(--text-primary)" }}>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        style={{
                                            backgroundColor: "var(--background-secondary)",
                                            borderColor: "var(--border-color)",
                                            color: "var(--text-primary)",
                                            resize: "vertical"
                                        }}
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-100"
                                    style={{
                                        backgroundColor: "var(--primary)",
                                        borderColor: "var(--primary)",
                                        padding: "0.75rem"
                                    }}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={10} className="mx-auto">
                    <Alert variant="info" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--primary)", color: "var(--text-secondary)" }}>
                        <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days. 
                        For urgent matters, please call us directly.
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
}
