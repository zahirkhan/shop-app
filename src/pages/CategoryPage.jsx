import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useShoppingItems } from "../context/ShoppingItemsContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { StoreItem } from "../components/StoreItem";

import { formatCurrency } from "../utilities/formatCurrency";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useMemo } from "react";

export default function CategoryPage() {
    const { category } = useParams();
    const navigate = useNavigate();
    const { products } = useShoppingItems();
    const { increaseCartQuantity } = useShoppingCart();
    const [sortBy, setSortBy] = useState("popularity");

    // Filter products by category
    const categoryProducts = useMemo(() => {
        return products.filter(p => p.category.toLowerCase() === category?.toLowerCase());
    }, [products, category]);

    // Sort products
    const sortedProducts = useMemo(() => {
        const sorted = [...categoryProducts];
        switch (sortBy) {
            case "price-low":
                return sorted.sort((a, b) => a.price - b.price);
            case "price-high":
                return sorted.sort((a, b) => b.price - a.price);
            case "rating":
                return sorted.sort((a, b) => b.rating - a.rating);
            case "newest":
                return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            default:
                return sorted;
        }
    }, [categoryProducts, sortBy]);

    // Get category stats
    const categoryStats = useMemo(() => {
        if (sortedProducts.length === 0) return null;
        const prices = sortedProducts.map(p => p.price);
        const avgRating = (sortedProducts.reduce((sum, p) => sum + p.rating, 0) / sortedProducts.length).toFixed(1);
        return {
            minPrice: Math.min(...prices),
            maxPrice: Math.max(...prices),
            avgRating
        };
    }, [sortedProducts]);

    if (!category) {
        return (
            <Container className="py-5 text-center">
                <h2 style={{ color: "var(--text-primary)" }}>Category not found</h2>
            </Container>
        );
    }

    return (
        <Container className="py-4">
            {/* Breadcrumb and Header */}
            <div className="mb-4">
                <button 
                    onClick={() => navigate("/")}
                    className="btn btn-outline-secondary mb-3 d-flex align-items-center gap-2"
                    style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}
                >
                    <FaArrowLeft /> Back to Store
                </button>

                <div className="mb-4">
                    <h1 style={{ color: "var(--text-primary)" }} className="mb-2">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h1>
                    <p style={{ color: "var(--text-secondary)" }} className="mb-3">
                        Showing {sortedProducts.length} products
                    </p>

                    {categoryStats && (
                        <div className="d-flex gap-3 flex-wrap">
                            <Badge bg="primary" style={{ backgroundColor: "var(--primary)" }}>
                                Min Price: {formatCurrency(categoryStats.minPrice)}
                            </Badge>
                            <Badge bg="primary" style={{ backgroundColor: "var(--primary)" }}>
                                Max Price: {formatCurrency(categoryStats.maxPrice)}
                            </Badge>
                            <Badge bg="success">
                                Avg Rating: {categoryStats.avgRating}★
                            </Badge>
                        </div>
                    )}
                </div>

                {/* Sort Options */}
                <div className="mb-4">
                    <label style={{ color: "var(--text-primary)" }} className="me-3 fw-medium">
                        Sort by:
                    </label>
                    <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="form-select d-inline-block"
                        style={{ 
                            width: "auto",
                            backgroundColor: "var(--background-secondary)",
                            color: "var(--text-primary)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <option value="popularity">Popularity</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length === 0 ? (
                <div className="text-center py-5">
                    <h3 style={{ color: "var(--text-muted)" }}>No products found in this category</h3>
                    <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                        Try browsing other categories
                    </p>
                    <button 
                        onClick={() => navigate("/")}
                        className="btn btn-primary"
                        style={{ backgroundColor: "var(--primary)", border: "none" }}
                    >
                        Back to Store
                    </button>
                </div>
            ) : (
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {sortedProducts.map(item => (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    ))}
                </Row>
            )}

            {/* Footer Info */}
            {sortedProducts.length > 0 && (
                <div className="mt-5 pt-4 border-top" style={{ borderColor: "var(--border-color)" }}>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }} className="text-center mb-0">
                        Showing {sortedProducts.length} products in {category}. 
                        All prices are subject to change.
                    </p>
                </div>
            )}
        </Container>
    );
}
