import { SearchAction, SearchState, SearchType } from "../../types/search";

const initialState: SearchState = {
  text: ''
};

export const searchReducer = (state = initialState, action: SearchAction) : SearchState => {
  switch (action.type) {
    case SearchType.SET_SEARCH_TEXT:
      return {...state, text: action.payload}
    default:
      return state;
  }
};