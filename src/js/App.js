import React, { Component } from 'react';
import { connect } from 'react-redux';

import { convertUrl, clearAllUrls } from './actions';
import { deleteLocalstorageKey } from './helpers/utils';

import Header from './components/Header';
import UrlForm from './components/UrlForm';
import UrlTableList from './components/UrlTableList';

export default class App extends Component {

  onAddUrl(url) {
    this.props.dispatch(convertUrl(url));
  }

  onClearAll() {
    deleteLocalstorageKey();
    this.props.dispatch(clearAllUrls());
  }

  render() {
    return (
      <div className="app-container">
        <Header/>

        <UrlForm
          onAddUrl={this.onAddUrl.bind(this)}
        />

        <UrlTableList
          urls={this.props.urls}
          onClearAll={this.onClearAll.bind(this)}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    urls: state
  }
};

export default connect(mapStateToProps)(App);
