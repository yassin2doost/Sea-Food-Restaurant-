import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import loadSample from "../sample-fishes";
import Fish from "./Fish";
// import Alaki from "./Alaki";

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };

    fishes[`fish${Date.now()}`] = fish;

    this.setState({
      fishes
    });
  };

  addToOrder = key => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;
    this.setState({
      order
    });
  };

  loadSample = () => {
    this.setState({
      fishes: loadSample
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="هر روز تازه تر از دیروز" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                details={this.state.fishes[key]}
                index={key}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Inventory addFish={this.addFish} loadSample={this.loadSample} />
        <Order fishes={this.state.fishes} order={this.state.order}/>
      </div>
    );
  }
}

export default App;
