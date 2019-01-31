import React from "react";
const Form = props => (
  <form onSubmit={props.handlerOnSubmit}>
    <p>{props.name}</p>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Name of character"
      onChange={props.handlerOnChange}
      value={props.name}
    />
    <br />
    Male:
    <input
      type="radio"
      name="gender"
      id="gender-male"
      checked={props.gender === "male"}
      onChange={props.handlerOnChange}
      value={"male"}
    />
    Female:
    <input
      type="radio"
      name="gender"
      id="gender-female"
      checked={props.gender === "female"}
      onChange={props.handlerOnChange}
      value={"female"}
    />
    <br />
    <button>Add</button>
  </form>
);

export default Form;
