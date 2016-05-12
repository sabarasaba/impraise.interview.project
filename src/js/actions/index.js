export const ADD_URL = 'ADD_URL';
export const ADD_URL_FAILED = 'ADD_URL_FAILED';

function addUrl(url) {
  return {
    type: ADD_URL,
    schema: Object.assign({}, url, {
      timestamp: new Date().getTime(),
      visits: 0
    })
  };
};

function fetchFailed(err) {
  return {
    type: ADD_URL_FAILED,
    err
  };
};

export function convertUrl(url) {
  return (dispatch) => {
    fetch('/api/shorten', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
         url: 'https://gist.github.com'
        })
      })
      .then(response => response.json())
      .then(json => dispatch(addUrl(json)))
      .catch(err => dispatch(fetchFailed(err)))
  };
};
