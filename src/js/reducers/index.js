import {
  ADD_URL
} from '../actions';

export function UrlShortener(state = [], action) {
  switch (action.type) {
    case ADD_URL:
      return [
        ...state,
        action.schema
      ];
    break;

    default:
      return state;
    break;
  }
};
