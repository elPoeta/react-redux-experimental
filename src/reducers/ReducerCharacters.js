const initialState = {
  characters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return state;
    case "ADD_CHARACTER":
      return { ...state, characters: [...state.characters, action.payload] };
    case "DEL_CHARACTER":
      return {
        ...state,
        characters: [...state.characters.filter(c => c.id !== action.payload)]
      };
    default:
      return state;
  }
};

export default reducer;
