export interface SearchState {
  text: string;
}

export enum SearchType {SET_SEARCH_TEXT = "SET_SEARCH_TEXT"};


export interface SearchAction {
  type: SearchType.SET_SEARCH_TEXT,
  payload: string;
}
