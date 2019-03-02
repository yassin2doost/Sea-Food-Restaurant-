import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  // constructor(props) {
  //     super(props);
  //    this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  // Declare as property or Function
  goToStore = event => {
    //  1. Stop form from submiting...
    event.preventDefault();
    // 2. Get the text from input
    const storeName = this.myInput.current.value;
    console.log(this.myInput.current.value);
    // 3. Change  the current page ...
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2> لطفا نام فروشگاه خود را وارد کنید </h2>
        <input
          type="text"
          ref={this.myInput}
          placeholder="نام فروشگاه"
          defaultValue={getFunName()}
          required
        />
        <button type="submit">
          {" "}
          <span role="img" aria-label="Smile">
            {" "}
            🤩
          </span>{" "}
          بازدید از فروشگاه
        </button>
      </form>
    );
  }
}

export default StorePicker;
