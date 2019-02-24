import React, { Component } from "react";
import AddFishForm from "../components/AddFishForm";
class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        انبار
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSample}> ساخت  خودکار لیست </button>
      </div>
    );
  }
}

export default Inventory;
