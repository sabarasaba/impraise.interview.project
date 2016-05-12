import {
  ADD_URL,
  ADD_URL_FAILED,
  CLEAR_ALL_URLS,
  ADD_DETAILS
} from '../actions';

export function UrlShortener(state = [], action) {
  switch (action.type) {
    case ADD_URL:
      return [
        ...state,
        action.schema
      ];
    break;

    case ADD_DETAILS:
      debugger;
    break;

    case CLEAR_ALL_URLS:
      return [];
    break;

    case ADD_URL_FAILED:
      console.log(action.err);

      return state;
    break;

    default:
      return state;
    break;
  }
};
