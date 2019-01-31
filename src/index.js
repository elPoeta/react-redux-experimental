import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import Characters from "./components/Characters";
import FormContainer from "./components/FormContainer";
const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start with my react redux example</h2>
      <FormContainer />
      <Characters />
    </div>
  );
};

const rootElement = document.querySelector("#root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
