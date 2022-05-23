import { SearchAction, SearchType } from './../../types/search';
import { Dispatch } from 'redux';


export const setText = (text: string) => {
  return (dispatch: Dispatch<SearchAction>) => {
      dispatch({type: SearchType.SET_SEARCH_TEXT, payload: text})
  }
}