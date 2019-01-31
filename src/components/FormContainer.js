import React from "react";
import { connect } from "react-redux";
import { addCharacter } from "../reducers/actions/Actions";
import uuidv4 from "uuid";
import Form from "./Form";

class FormConatiner extends React.Component {
  state = {
    name: "",
    gender: ""
  };

  handlerOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handlerOnSubmit = e => {
    e.preventDefault();
    const { name, gender } = this.state;
    const id = uuidv4();
    this.props.addCharacter({ name, gender, id });
    this.setState({ name: "", gender: "" });
  };
  render() {
    return (
      <Form
        name={this.state.name}
        gender={this.state.gender}
        handlerOnChange={this.handlerOnChange}
        handlerOnSubmit={this.handlerOnSubmit}
      />
    );
  }
}
const mapDispatchToProps = {
  addCharacter
};
export default connect(
  null,
  mapDispatchToProps
)(FormConatiner);
