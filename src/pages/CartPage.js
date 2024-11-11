// components/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button, Table, Container, Card } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)} 
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Total Amount</Card.Title>
              <Card.Text>
                <strong>Total: ${totalAmount.toFixed(2)}</strong>
              </Card.Text>
              <Button variant="primary" onClick={() => alert('Proceed to Checkout')}>
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Cart;
