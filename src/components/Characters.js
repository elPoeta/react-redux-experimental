import React from "react";
import { connect } from "react-redux";
import { delCharacter } from "../reducers/actions/Actions";
class Character extends React.Component {
  handlerOnClick = id => {
    this.props.delCharacter(id);
  };
  render() {
    const { viewCharacters } = this.props;
    const v = viewCharacters.characters.map(c => (
      <li key={c.id}>
        Name: {c.name}
        &ensp; Gender: {c.gender}
        &ensp; Appearson:&ensp;
        {c.appearsOn.isOnMovies ? "Movies " : null}
        {c.appearsOn.isOnBooks ? "Books " : null}
        {c.appearsOn.isOnTheater ? "Theater " : null}
        <button
          onClick={() => {
            this.handlerOnClick(c.id);
          }}
        >
          Delete
        </button>
      </li>
    ));
    return (
      <div>
        <ul>{v}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    viewCharacters: state.viewCharacters
  };
};
const mapDispatchToProps = {
  delCharacter
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);
