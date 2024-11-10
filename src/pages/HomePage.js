// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container my-4">
      <h2>Products</h2>
      <Row>
        {products.map(product => (
          <div  className='col-md-4 col-sm-6 col-xs-12' key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
