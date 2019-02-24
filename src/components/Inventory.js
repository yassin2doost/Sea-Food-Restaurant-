import React, { Component } from "react";
import AddFishForm from "../components/AddFishForm";
class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        انبار
        <AddFishForm addfish={this.props.addfish} />
      </div>
    );
  }
}

export default Inventory;
