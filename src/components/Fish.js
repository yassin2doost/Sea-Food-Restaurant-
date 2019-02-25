import React, { Component } from "react";

class Fish extends Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { name, image, desc, status, price } = this.props.details;
    const isAvailbale = status === "موجود";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name"> {name} </h3>
        <span className="price">
          <strong>{price} ریال</strong>{" "}
        </span>
        <p className="description">{desc}</p>
        <p className="text-success"> وضعیت: {status}</p>
        <button disabled={!isAvailbale} onClick={this.handleClick}>
          {" "}
          {isAvailbale ? "افزودن به سبد خرید" : "فروخته شد!"}{" "}
        </button>
      </li>
    );
  }
}

export default Fish;
