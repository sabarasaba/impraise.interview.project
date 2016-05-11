export const ADD_URL = 'ADD_URL';

export function addUrl(url) {
  return {
    type: ADD_URL,
    url
  };
};
