import React from "react";
import { connect } from "react-redux";
import { addCharacter } from "../reducers/actions/Actions";
import uuidv4 from "uuid";
import Form from "./Form";

class FormConatiner extends React.Component {
  state = {
    name: ""
  };

  handlerOnChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handlerOnSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const id = uuidv4();
    this.props.addCharacter({ name, id });
    this.setState({ name: "" });
  };
  render() {
    return (
      <Form
        name={this.state.name}
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
