import { Container, Row, Col, Card } from "react-bootstrap";

export default function PolicyPage() {
    return (
        <Container className="py-5">
            <Row>
                <Col lg={10} className="mx-auto">
                    <h1 style={{ color: "var(--text-primary)" }} className="mb-4">Privacy Policy</h1>
                    
                    <Card 
                        style={{ 
                            backgroundColor: "var(--background-elevated)", 
                            borderColor: "var(--border-color)" 
                        }}
                    >
                        <Card.Body>
                            <div style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    1. Introduction
                                </h5>
                                <p>
                                    At Z Shop, we respect your privacy and are committed to protecting your personal data. 
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                                    when you visit our website.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    2. Information We Collect
                                </h5>
                                <p>
                                    We may collect information about you in a variety of ways. The information we may collect on 
                                    the Site includes:
                                </p>
                                <ul>
                                    <li><strong>Personal Data:</strong> Name, email address, phone number, shipping address</li>
                                    <li><strong>Payment Information:</strong> Credit card details (processed securely)</li>
                                    <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, search queries</li>
                                    <li><strong>Cookies:</strong> Small files stored on your device for website functionality</li>
                                </ul>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    3. Use of Your Information
                                </h5>
                                <p>
                                    Having accurate information about you permits us to provide you with a smooth, efficient, 
                                    and customized experience. Specifically, we may use information collected about you via the 
                                    Site to:
                                </p>
                                <ul>
                                    <li>Process your transactions and send related information</li>
                                    <li>Improve our website and services</li>
                                    <li>Send promotional communications (with your consent)</li>
                                    <li>Respond to your inquiries and customer support requests</li>
                                    <li>Detect and prevent fraud and other illegal activities</li>
                                    <li>Monitor and analyze usage and trends</li>
                                </ul>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    4. Disclosure of Your Information
                                </h5>
                                <p>
                                    We may share information we have collected about you in certain situations:
                                </p>
                                <ul>
                                    <li><strong>Service Providers:</strong> Vendors who assist us in operating our website</li>
                                    <li><strong>Business Partners:</strong> For joint marketing initiatives</li>
                                    <li><strong>Legal Requirements:</strong> When required by law or court order</li>
                                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
                                </ul>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    5. Security of Your Information
                                </h5>
                                <p>
                                    We use administrative, technical, and physical security measures to protect your personal 
                                    information. However, perfect security cannot be guaranteed. Please report any security 
                                    breaches to support@zshop.com immediately.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    6. Your Privacy Rights
                                </h5>
                                <p>
                                    Depending on your location, you may have the following rights:
                                </p>
                                <ul>
                                    <li>Right to access your personal data</li>
                                    <li>Right to correct or update your information</li>
                                    <li>Right to delete your personal data</li>
                                    <li>Right to opt-out of marketing communications</li>
                                    <li>Right to data portability</li>
                                </ul>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    7. Cookies and Tracking
                                </h5>
                                <p>
                                    Our website uses cookies to enhance your experience. You can control cookie settings through 
                                    your browser preferences. However, disabling cookies may affect website functionality.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    8. Contact Us
                                </h5>
                                <p>
                                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                                </p>
                                <p>
                                    <strong>Email:</strong> privacy@zshop.com<br />
                                    <strong>Phone:</strong> +91 9874547410<br />
                                    <strong>Address:</strong> Delhi, India
                                </p>

                                <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
                                    Last Updated: {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
