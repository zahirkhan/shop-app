import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaCopyright,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane
} from "react-icons/fa";
import { useEffect, useState } from "react";

export function Footer() {
  const [categories, setCategories] = useState([]);

  // 🔹 Simulated API call (replace with real backend)
  useEffect(() => {
    const fetchCategories = async () => {
      const data = [
        "Smartphones",
        "Laptops",
        "Gaming",
        "Accessories",
        "Wearables"
      ];
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <footer className="premium-footer pt-5">
      <Container>

        <Row className="gy-4 glass-container p-4 rounded-4">

          {/* Brand Section */}
          <Col lg={3} md={6}>
            <h4 className="fw-bold mb-3">
              Z <span className="text-primary">Shop</span>
            </h4>

            <div className="mb-2 small">
              <FaMapMarkerAlt className="me-2 text-primary" />
              Delhi, India
            </div>
            <div className="small">
              <FaPhone className="me-2 text-primary" />
              +91 9874547410
            </div>
          </Col>

          {/* Dynamic Categories */}
          <Col lg={3} md={6}>
            <h5 className="mb-3">Categories</h5>
            <ul className="list-unstyled small">
              {categories.map((cat, index) => (
                <li key={index} className="mb-2">
                  <Link 
                    to={`/category/${cat.toLowerCase()}`} 
                    className="footer-link"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Navigation */}
          <Col lg={3} md={6}>
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/about" className="footer-link">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li className="mb-2"><Link to="/policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={6}>
            <h5 className="mb-3">Newsletter</h5>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="me-2 newsletter-input"
              />
              <Button variant="primary">
                <FaPaperPlane />
              </Button>
            </Form>

            <div className="social-links mt-4 d-flex gap-3 fs-5">
              <a href="#" className="social-icon"><FaGithub /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
            </div>
          </Col>

        </Row>

        <hr className="border-secondary my-4" />

        <div className="text-center small pb-3">
          Made with <FaHeart className="text-danger heartbeat" /> © {new Date().getFullYear()} ZShop
        </div>

      </Container>
    </footer>
  );
}