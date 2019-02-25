import React, { Component } from "react";

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value),
      statusRef: this.statusRef.current.value,
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value
    };
    this.props.addFish(fish);
    alert('Done!');
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="نام " />

        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="قیمت "
        />

        <select name="status" ref={this.statusRef}>
          <option value=" موجود"> موجود </option>
          <option value=" تمام شده"> تمام شده </option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="شرح " />

        <input
          type="text"
          name="image"
          ref={this.imageRef}
          placeholder="عکس "
        />

        <button type="submit">
          {" "}
          افزودن ماهی{" "}
          <span role="img" aria-label="FISH">
            {" "}
            🐟{" "}
          </span>
        </button>
      </form>
    );
  }
}

export default AddFishForm;
