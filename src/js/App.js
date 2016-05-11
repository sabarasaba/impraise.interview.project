import React, { Component } from 'react';

import Header from './components/Header';
import UrlForm from './components/UrlForm';
import UrlTableList from './components/UrlTableList';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header/>
        <UrlForm/>
        <UrlTableList/>
      </div>
    );
  }
}
