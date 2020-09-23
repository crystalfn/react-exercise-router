import React, { Component } from "react";
import data from "../../../../exercise-2/mockups/data.json";
import './product.css';

class Prosuct extends Component {
  state = {
    details: {},
  };

  componentDidMount() {
    const index = parseInt(this.props.match.url.split("/")[2]);
    for (const key in data) {
      if (data[key].id === index) {
        this.setState({
          details: data[key],
        });
      }
    }
  }

  render() {
    return (
      <section className="product">
        <h3>Product Details:</h3>
        <ul>
          <li>Name: {this.state.details.name}</li>
          <li>Id: {this.state.details.id}</li>
          <li>Price: {this.state.details.price}</li>
          <li>Quantity: {this.state.details.quantity}</li>
          <li>Desc: {this.state.details.desc}</li>
          <li>URL: {this.props.match.url}</li>
        </ul>
      </section>
    );
  }
}

export default Prosuct;
