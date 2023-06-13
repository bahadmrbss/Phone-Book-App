import React, { Component } from "react";

export default class Form extends Component {
  state = { name: "", phone: "" };
  render() {
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const formInputStyle = {
      marginTop: "10px",
      height: "30px",
      lineHeight: "25px",
      width: "400px",
      textIndent: "10px",
    };
    console.log(this.props);
    const onSubmitFunc = (event) => {
      event.preventDefault();
      if (this.state.name === "") {
        alert("Name not be blank!!!");
      } else {
        console.log("Form onSubmit:FUNC-CHILD");
        this.props.addContact({ ...this.state });
        this.setState({ name: "", phone: "" });
      }
    };
    return (
      <div>
        <form
          onSubmit={onSubmitFunc}
          style={{ width: "400px", margin: "0 auto", padding: "0" }}
        >
          <input
            style={formInputStyle}
            value={this.state.name}
            onChange={onChange}
            name="name"
            id="name"
            placeholder="Enter a name..."
          ></input>
          <br />
          <input
            style={formInputStyle}
            value={this.state.phone}
            onChange={onChange}
            name="phone"
            id="phone"
            placeholder="Enter a phone..."
          ></input>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
