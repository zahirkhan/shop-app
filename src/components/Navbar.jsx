import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ThemeToggle } from "./ThemeToggle";
import { FaShoppingCart, FaGithub, FaUser } from "react-icons/fa";

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <nav className="navbar sticky-top">
            <Container className="d-flex justify-content-between align-items-center">
                <NavLink to="/" className="navbar-brand">
                    <img src="/zshop.png" alt="Zshop" width="30" height="30" />Z
                    <span className="text-primary text-color">Shop</span>
                </NavLink>

                <div className="d-flex align-items-center gap-3">
                    <Nav>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Store
                        </NavLink>
                        <NavLink to="/category/smartphones" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Categories
                        </NavLink>
                        <NavLink to="/admin" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            Admin
                        </NavLink>
                    </Nav>

                    <div className="d-flex align-items-center gap-2">
                        <a 
                            href="https://github.com/zahirkhan" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://zahirkhan.engineer" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-button"
                            aria-label="Portfolio"
                        >
                            <FaUser />
                        </a>
                        <ThemeToggle />
                        <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>

                        <button className="cart-button" onClick={openCart}>
                            <FaShoppingCart />
                            {cartQuantity > 0 && (
                                <span className="cart-count">{cartQuantity}</span>
                            )}
                        </button>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </nav>
    );
}