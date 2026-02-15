import { ListGroup, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { productCategories } from "../data/productData";

export function CategoriesSidebar() {
    const navigate = useNavigate();
    const categories = Object.values(productCategories);

    const handleCategoryClick = (category) => {
        navigate(`/category/${category.toLowerCase()}`);
    };

    return (
        <Card 
            className="sticky-top"
            style={{ 
                top: "100px", 
                backgroundColor: "var(--background-elevated)",
                borderColor: "var(--border-color)"
            }}
        >
            <Card.Body>
                <h5 
                    className="mb-3 d-flex align-items-center gap-2"
                    style={{ color: "var(--text-primary)" }}
                >
                    <FaList /> Categories
                </h5>
                <ListGroup variant="flush">
                    {categories.map((category) => (
                        <ListGroup.Item
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            style={{
                                backgroundColor: "transparent",
                                borderColor: "var(--border-color)",
                                cursor: "pointer",
                                color: "var(--text-secondary)",
                                transition: "all 0.3s ease",
                                padding: "0.75rem 0.5rem"
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "var(--primary)";
                                e.target.style.paddingLeft = "1rem";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "var(--text-secondary)";
                                e.target.style.paddingLeft = "0.5rem";
                            }}
                        >
                            {category}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}
