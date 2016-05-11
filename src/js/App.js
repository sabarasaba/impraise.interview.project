import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUrl } from './actions';

import Header from './components/Header';
import UrlForm from './components/UrlForm';
import UrlTableList from './components/UrlTableList';

export default class App extends Component {

  onAddUrl(url) {
    this.props.dispatch(addUrl(url));
  }

  render() {
    console.log(this.props.urls);

    return (
      <div className="app-container">
        <Header/>

        <UrlForm
          onAddUrl={this.onAddUrl.bind(this)}
        />

        <UrlTableList
          urls={this.props.urls}
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
