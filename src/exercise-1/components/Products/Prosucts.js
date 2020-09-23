import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './products.css'

class Prosucts extends Component {
  render() {
    return (
      <section className="products">
        <h3>All Products:</h3>
        <ul>
          <li><Link className="link" to="product/1">Bicycle</Link></li>
          <li><Link className="link" to="product/2">TV</Link></li>
          <li><Link className="link" to="product/3">Pencil</Link></li>
        </ul>
      </section>
    );
  }
}

export default Prosucts;