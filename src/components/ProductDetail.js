
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="my-4">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-detail-image"
          />
        </Col>
        <Col md={6}>
          <h4>{product.title}</h4>
          <p >{product.description}</p>
          <h4 className='fs-5'>${product.price}</h4>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
