import { Container, Row, Col, Card } from "react-bootstrap";

export default function TermsPage() {
    return (
        <Container className="py-5">
            <Row>
                <Col lg={10} className="mx-auto">
                    <h1 style={{ color: "var(--text-primary)" }} className="mb-4">Terms & Conditions</h1>
                    
                    <Card 
                        style={{ 
                            backgroundColor: "var(--background-elevated)", 
                            borderColor: "var(--border-color)" 
                        }}
                    >
                        <Card.Body>
                            <div style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    1. Agreement to Terms
                                </h5>
                                <p>
                                    By accessing and using Z Shop, you accept and agree to be bound by the terms and 
                                    provision of this agreement. If you do not agree to abide by the above, 
                                    please do not use this service.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    2. Use License
                                </h5>
                                <p>
                                    Permission is granted to temporarily download one copy of the materials (information 
                                    or software) on Z Shop for personal, non-commercial transitory viewing only. 
                                    This is the grant of a license, not a transfer of title, and under this license you may not:
                                </p>
                                <ul>
                                    <li>Modify or copy the materials</li>
                                    <li>Use the materials for any commercial purpose or for any public display</li>
                                    <li>Attempt to decompile or reverse engineer any software</li>
                                    <li>Remove any copyright or other proprietary notations from the materials</li>
                                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                                </ul>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    3. Disclaimer
                                </h5>
                                <p>
                                    The materials on Z Shop are provided on an 'as is' basis. Z Shop makes no warranties, 
                                    expressed or implied, and hereby disclaims and negates all other warranties including, 
                                    without limitation, implied warranties or conditions of merchantability, fitness for a 
                                    particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    4. Limitations
                                </h5>
                                <p>
                                    In no event shall Z Shop or its suppliers be liable for any damages (including, without 
                                    limitation, damages for loss of data or profit, or due to business interruption) arising 
                                    out of the use or inability to use the materials on Z Shop.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    5. Accuracy of Materials
                                </h5>
                                <p>
                                    The materials appearing on Z Shop could include technical, typographical, or photographic 
                                    errors. Z Shop does not warrant that any of the materials on Z Shop are accurate, 
                                    complete, or current. Z Shop may make changes to the materials contained on Z Shop at 
                                    any time without notice.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    6. Links
                                </h5>
                                <p>
                                    Z Shop has not reviewed all of the sites linked to its website and is not responsible 
                                    for the contents of any such linked site. The inclusion of any link does not imply 
                                    endorsement by Z Shop of the site. Use of any such linked website is at the user's own risk.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    7. Modifications
                                </h5>
                                <p>
                                    Z Shop may revise these terms of service for Z Shop at any time without notice. 
                                    By using this website, you are agreeing to be bound by the then current version of these 
                                    terms of service.
                                </p>

                                <h5 style={{ color: "var(--text-primary)", marginTop: "1.5rem", marginBottom: "1rem" }}>
                                    8. Governing Law
                                </h5>
                                <p>
                                    These terms and conditions are governed by and construed in accordance with the laws of 
                                    India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
