import {
  ADD_URL,
  ADD_URL_FAILED,
  CLEAR_ALL_URLS,
  ADD_DETAILS
} from '../actions';

export function UrlShortener(state = [], action) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case ADD_URL:
      return [
        ...state,
        action.schema
      ];
    break;

    case ADD_DETAILS:
      return state.map(e => {
        if (e.shortcode === action.forShortcode) {
          e.timestamp = action.timestamp;
          e.visits = action.visits;
        }

        return e;
      });
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
