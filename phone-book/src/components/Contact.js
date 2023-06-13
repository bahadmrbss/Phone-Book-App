import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class Contact extends Component {
  state = {
    contacts: [
      { name: "Carla", phone: "+905435110610" },
      { name: "Jackob", phone: "+905435110611" },
      { name: "Caroline", phone: "+905435110612" },
      { name: "Andrew", phone: "+905435110613" },
      { name: "Bob", phone: "+905435110614" },
    ],
    age: 12,
    surname: "Tommy",
    order: "98",
    id: 1,
  };
  render() {
    const addContact = (data) => {
      console.log("Form onSubmit:FUNC-PARENT Param:", data);
      const { contacts } = this.state;
      contacts.push(data);
      this.setState({ contacts: contacts });
    };
    console.log("Contact.JS STATE:::", this.state);
    const chgnState = () => {
      this.setState({ age: 21 });
    };
    return (
      <div>
        <h1>Contact</h1>
        <List contacts={this.state.contacts} />
        <Form addContact={addContact} />
        <button onClick={chgnState}>Change Contact.js State</button>
      </div>
    );
  }
}

export default Contact;
