// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

const NavbarComponent = () => {
  const { cart } = useCart();  // Accessing the cart state from context

  // Calculate the total number of items in the cart (including quantity of each item)
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart ({cartItemCount})
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;