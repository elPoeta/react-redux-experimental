import React from "react";
import { connect } from "react-redux";
import { addCharacter } from "../reducers/actions/Actions";
import uuidv4 from "uuid";
import Form from "./Form";

class FormConatiner extends React.Component {
  state = {
    name: "",
    gender: "",
    appearsOn: {
      isOnMovies: false,
      isOnBooks: false,
      isOnTheater: false
    }
  };

  handlerOnChange = e => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState(prevState => {
          return {
            appearsOn: {
              ...prevState.appearsOn,
              [name]: checked
            }
          };
        })
      : this.setState({
          [name]: value
        });
  };

  handlerOnSubmit = e => {
    e.preventDefault();
    const { name, gender, appearsOn } = this.state;
    const id = uuidv4();
    this.props.addCharacter({ name, gender, appearsOn, id });
    this.setState({
      name: "",
      gender: "",
      appearsOn: {
        isOnMovies: false,
        isOnBooks: false,
        isOnTheater: false
      }
    });
  };
  render() {
    return (
      <Form
        name={this.state.name}
        gender={this.state.gender}
        appearsOn={this.state.appearsOn}
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
