import React, { Component } from "react";

class Order extends Component {
  renderOrder = (key, index) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'موجود';
    if (!isAvailable) {
     return <li>
        متاسفانه {fish ? fish.name : 'ماهی' }  موجود نیست 
      </li>
    }
    return <li key={index}> 
    {count} کیلوگرم {fish.name}
    <img className="order-image" src={fish.image} alt={fish.name} />
    <br/>
  به مبلغ :  {count * fish.price} ریال
     </li>;
     
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
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>

        <div className="total">
          جمع کل :
          <strong>{total} ریال </strong>
        </div>
      </div>
    );
  }
}

export default Order;
