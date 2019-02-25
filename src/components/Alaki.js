import React, { Component } from "react";

class Alaki extends Component {
  nameRef = React.createRef();

  submitToServer = event => {
    event.preventDefault();

    const alakiForm = {
      name: this.nameRef.current.value
    };
    console.log(alakiForm);
  };
  render() {
    return (
      <div>
        <h2>
          {this.props.polo}
          {this.props.name}
        </h2>
        <form className="form-group" onSubmit={this.submitToServer}>
          <input style={this.props.style}
            type="text"
            name="name"
            ref={this.nameRef}
            value={this.props.name}
            placeholder="نام "
            minLength="3"
            maxLength="5"
            readOnly
            required
          />
          <button type="submit"> ارسال</button>
        </form>
      </div>
    );
  }
}

const divStyle = {
    margin: '40px',
    color: 'blue',
    backgroundColor: 'gray',
    border: '5px solid pink'
  };

export default Alaki;
