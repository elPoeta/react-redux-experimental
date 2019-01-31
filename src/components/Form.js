import React from "react";
const Form = props => (
  <form onSubmit={props.handlerOnSubmit}>
    <p>{props.name}</p>
    <input
      type="text"
      placeholder="Name of character"
      onChange={props.handlerOnChange}
      value={props.name}
    />
    <button>Add</button>
  </form>
);

export default Form;
