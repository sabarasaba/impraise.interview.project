import {
  ADD_URL,
  CLEAR_ALL_URLS
} from '../actions';

export function UrlShortener(state = [], action) {
  switch (action.type) {
    case ADD_URL:
      return [
        ...state,
        action.schema
      ];
    break;

    case CLEAR_ALL_URLS:
      return [];
    break;

    default:
      return state;
    break;
  }
};
