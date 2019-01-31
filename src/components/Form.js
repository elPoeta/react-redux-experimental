import React from "react";
import { connect } from "react-redux";
import { addCharacter } from "../reducers/actions/Actions";
import uuidv4 from "uuid";
class Form extends React.Component {
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
      <form onSubmit={this.handlerOnSubmit}>
        <p>{this.state.name}</p>
        <input
          type="text"
          placeholder="Name of character"
          onChange={this.handlerOnChange}
          value={this.state.name}
        />
        <button>Add</button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  addCharacter
};
export default connect(
  null,
  mapDispatchToProps
)(Form);
