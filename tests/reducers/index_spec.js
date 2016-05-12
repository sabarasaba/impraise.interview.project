import { expect } from 'chai';
import { UrlShortener as reducer } from '../../src/js/reducers';
import { ADD_URL, ADD_DETAILS, CLEAR_ALL_URLS } from '../../src/js/actions';

describe('UrlShortener Reducer', () => {

  it('Should return same state if no action was passed', () => {
    const initialState = [{
      shortcode: 'b603',
      originalUrl: 'https://www.google.com/',
      timestamp: '2016-05-12T11:23:06.592Z',
      visits: 1
    }];

    const newState = reducer(initialState);

    expect(newState).to.eql(initialState);
  });

  it('Should correctly add details for the matching shortcode', () => {
    const initialState = [{
      shortcode: 'b603',
      originalUrl: 'https://www.google.com/',
      timestamp: '2016-05-12T10:23:06.592Z',
      visits: 0
    }];

    const newState = reducer(initialState, {
      type: ADD_DETAILS,
      forShortcode: 'b603',
      timestamp: '2016-05-12T12:23:06.592Z',
      visits: 5
    });


    expect(newState[0].visits).to.eql(5);
    expect(newState[0].timestamp).to.eql('2016-05-12T12:23:06.592Z');
  });

  it('Should know how to clear up all urls', () => {
    const initialState = [{
      shortcode: 'b603',
      originalUrl: 'https://www.google.com/',
      timestamp: '2016-05-12T10:23:06.592Z',
      visits: 0
    }];

    const newState = reducer(initialState, {type: CLEAR_ALL_URLS});

    expect(newState.length).to.eql(0);
  });

});
