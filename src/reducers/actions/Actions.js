import * as type from "../../constants/ActionsTypes";

export const getCharacters = () => ({
  type: type.GET_CHARACTERS
});

export const addCharacter = character => ({
  type: type.ADD_CHARACTER,
  payload: character
});

export const delCharacter = id => ({
  type: type.DEL_CHARACTER,
  payload: id
});
