import { Container, Row, Col, Button, Table, Card, Alert } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useShoppingItems } from "../context/ShoppingItemsContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus, FaShoppingBag, FaArrowLeft } from "react-icons/fa";

export default function CartPage() {
    const { cartItems, removeFromCart, increaseCartQuantity, decreaseCartQuantity, getItem, clearCart } = useShoppingCart();
    const { products } = useShoppingItems();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const navigate = useNavigate();

    const total = cartItems.reduce((total, cartItem) => {
        const product = products.find(p => p.id === cartItem.id);
        return total + (product?.price || 0) * cartItem.quantity;
    }, 0);

    const cartItemsWithDetails = cartItems.map(item => {
        const product = products.find(p => p.id === item.id);
        return {
            ...item,
            name: product?.name || "",
            price: product?.price || 0,
            imgUrl: product?.imgUrl || ""
        };
    });

    const handleCheckout = () => {
        try {
            setIsCheckingOut(true);
            navigate("/checkout", { 
                state: { 
                    items: cartItemsWithDetails,
                    total: total 
                }
            });
        } catch (error) {
            toast.error("Checkout failed. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark"
            });
        } finally {
            setIsCheckingOut(false);
        }
    };

    const handleContinueShopping = () => {
        navigate("/");
    };

    if (cartItems.length === 0) {
        return (
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <div style={{ marginTop: "4rem" }}>
                            <FaShoppingBag style={{ fontSize: "5rem", color: "var(--text-muted)", marginBottom: "1rem" }} />
                            <h2 className="text-muted mb-3">Your cart is empty</h2>
                            <p className="text-secondary mb-4">Looks like you haven't added any products to your cart yet.</p>
                            <Button 
                                variant="primary" 
                                size="lg"
                                onClick={handleContinueShopping}
                                className="d-flex align-items-center justify-content-center gap-2 mx-auto"
                                style={{ background: "var(--primary)", border: "none", padding: "0.75rem 2rem" }}
                            >
                                <FaArrowLeft /> Continue Shopping
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-4">
            <h1 className="mb-4 d-flex align-items-center gap-2">
                <FaShoppingBag /> Shopping Cart ({cartItems.length} items)
            </h1>

            <Row>
                <Col lg={8}>
                    <Card className="border" style={{ backgroundColor: "var(--background-elevated)", borderColor: "var(--border-color)" }}>
                        <Card.Body className="p-0">
                            <Table striped hover responsive className="mb-0" style={{ backgroundColor: "var(--background-elevated)" }}>
                                <thead style={{ backgroundColor: "var(--background-secondary)" }}>
                                    <tr>
                                        <th style={{ color: "var(--text-primary)" }}>Product</th>
                                        <th style={{ color: "var(--text-primary)" }} className="text-center">Price</th>
                                        <th style={{ color: "var(--text-primary)" }} className="text-center">Quantity</th>
                                        <th style={{ color: "var(--text-primary)" }} className="text-center">Total</th>
                                        <th style={{ color: "var(--text-primary)" }} className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItemsWithDetails.map(item => (
                                        <tr key={item.id} style={{ borderColor: "var(--border-color)" }}>
                                            <td style={{ color: "var(--text-primary)" }}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <img 
                                                        src={item.imgUrl} 
                                                        alt={item.name}
                                                        style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "0.5rem" }}
                                                    />
                                                    <div>
                                                        <div className="fw-medium">{item.name}</div>
                                                        <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>ID: {item.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ color: "var(--text-primary)" }} className="text-center">
                                                {formatCurrency(item.price)}
                                            </td>
                                            <td className="text-center">
                                                <div className="d-flex align-items-center justify-content-center gap-2">
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => decreaseCartQuantity(item.id)}
                                                        className="p-0"
                                                        style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}
                                                    >
                                                        <FaMinus size={12} />
                                                    </Button>
                                                    <span style={{ minWidth: "2rem", textAlign: "center", color: "var(--text-primary)", fontWeight: "500" }}>
                                                        {item.quantity}
                                                    </span>
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => increaseCartQuantity(item.id)}
                                                        className="p-0"
                                                        style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}
                                                    >
                                                        <FaPlus size={12} />
                                                    </Button>
                                                </div>
                                            </td>
                                            <td style={{ color: "var(--text-primary)", fontWeight: "600" }} className="text-center">
                                                {formatCurrency(item.price * item.quantity)}
                                            </td>
                                            <td className="text-center">
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => {
                                                        removeFromCart(item.id);
                                                        toast.success(`${item.name} removed from cart`, {
                                                            position: "top-right",
                                                            autoClose: 2000,
                                                            theme: "dark"
                                                        });
                                                    }}
                                                    className="p-0"
                                                    style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}
                                                >
                                                    <FaTrash size={12} />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>

                    <div className="mt-3 d-flex justify-content-between">
                        <Button 
                            variant="outline-primary"
                            onClick={handleContinueShopping}
                            className="d-flex align-items-center gap-2"
                        >
                            <FaArrowLeft /> Continue Shopping
                        </Button>
                        <Button 
                            variant="outline-danger"
                            onClick={() => {
                                clearCart();
                                toast.info("Cart cleared!", {
                                    position: "top-right",
                                    autoClose: 2000,
                                    theme: "dark"
                                });
                            }}
                        >
                            Clear Cart
                        </Button>
                    </div>
                </Col>

                <Col lg={4}>
                    <Card className="sticky-top" style={{ top: "100px", backgroundColor: "var(--background-elevated)", borderColor: "var(--border-color)" }}>
                        <Card.Body>
                            <h5 className="mb-4" style={{ color: "var(--text-primary)" }}>Order Summary</h5>
                            
                            <div className="mb-3">
                                <div className="d-flex justify-content-between mb-2" style={{ color: "var(--text-secondary)" }}>
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span>{formatCurrency(total)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2" style={{ color: "var(--text-secondary)" }}>
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3" style={{ color: "var(--text-secondary)" }}>
                                    <span>Tax</span>
                                    <span>Calculated at checkout</span>
                                </div>
                            </div>

                            <hr style={{ borderColor: "var(--border-color)" }} />

                            <div className="d-flex justify-content-between mb-4" style={{ color: "var(--text-primary)" }}>
                                <strong>Total Amount</strong>
                                <strong style={{ fontSize: "1.25rem" }}>{formatCurrency(total)}</strong>
                            </div>

                            <Button 
                                variant="primary"
                                className="w-100 py-2 mb-2"
                                onClick={handleCheckout}
                                disabled={isCheckingOut}
                                style={{
                                    background: "var(--primary)",
                                    borderColor: "var(--primary)",
                                    fontWeight: "600"
                                }}
                            >
                                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
                            </Button>

                            <Alert variant="info" className="mb-0 small" style={{ backgroundColor: "var(--background-secondary)", borderColor: "var(--border-color)", color: "var(--text-secondary)" }}>
                                <strong>Note:</strong> Shipping charges and taxes will be calculated at checkout based on your location.
                            </Alert>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
