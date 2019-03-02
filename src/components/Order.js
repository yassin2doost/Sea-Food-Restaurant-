import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
class Order extends Component {
  renderOrder = (key, index) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "موجود";
    if (!fish) return null;

    if (!isAvailable) {
      return <li>متاسفانه {fish ? fish.name : "ماهی"} موجود نیست</li>;
    }
    return (
      <CSSTransition
        classNames="order"
        key={index}
        timeout={{ enter: 500, exit: 500 }}
      >
        <li key={index}>
          <span>
            {" "}
            {count} کیلوگرم {fish.name}
          </span>
          <span>
            <img className="order-image" src={fish.image} alt={fish.name} />
          </span>
          <br />
          <button
            onClick={() => this.props.deleteOrder(key)}
            className="deleteOrderButtom"
          >
            &times; حذف
          </button>
          به مبلغ : {count * fish.price} ریال
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "موجود";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wap">
        <h2> سفارشات</h2>
        <TransitionGroup className="order" component="ul">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>

        <div className="total">
          جمع کل :<strong>{total} ریال </strong>
        </div>
      </div>
    );
  }
}

export default Order;
