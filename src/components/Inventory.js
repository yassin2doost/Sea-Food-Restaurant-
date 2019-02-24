import React, { Component } from "react";
import AddFishForm from "../components/AddFishForm";
class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        انبار
        <AddFishForm />
      </div>
    );
  }
}

export default Inventory;
