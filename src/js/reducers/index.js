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

    // Bit of an anit
    case '@@redux/INIT':
      return Object.keys(state).map(function (key) {return state[key]});
    break;

    default:
      return state;
    break;
  }
};
