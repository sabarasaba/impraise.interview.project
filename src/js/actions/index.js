export const ADD_URL = 'ADD_URL';
export const ADD_URL_FAILED = 'ADD_URL_FAILED';
export const CLEAR_ALL_URLS = 'CLEAR_ALL_URLS';
export const ADD_DETAILS = 'ADD_DETAILS';

function addUrl(url) {
  return {
    type: ADD_URL,
    schema: Object.assign({}, url, {
      timestamp: null,
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

function addDetails(details) {
  return {
    type: ADD_DETAILS,
    forShortcode: details.shortcode,
    timestamp: details.lastSeenDate,
    visits: details.redirectCount
  }
}

export function clearAllUrls() {
  return {
    type: CLEAR_ALL_URLS
  }
}

export function convertUrl(url) {
  return (dispatch) => {
    fetch('/api/shorten', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
       url
      })
    })
    .then(response => response.json())
    .then(json => dispatch(addUrl(Object.assign({}, json, {originalUrl: url}))))
    .catch(err => dispatch(fetchFailed(err)))
  };
};

export function getUrlStats(shortcode) {
  return (dispatch) => {
    fetch(`/api/${shortcode}/stats`, {
      method: 'get',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(json => dispatch(addUrl(Object.assign({}, json, {shortcode}))))
    .catch(err => dispatch(fetchFailed(err)))
  };
};
