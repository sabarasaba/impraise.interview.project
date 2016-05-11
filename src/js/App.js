import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="header">
          <div className="header__section">
            <h1 className="header__section__title">Shooooort</h1>
          </div>
          <div className="header__section header__section--baseline">
            <h3 className="header__section__subtitle">The link shortener with a long name</h3>
          </div>
        </header>

        <div className="form form--inline">
          <input className="form__input" type="text" placeholder="Paste the link you want to shorten here"/>
          <button className="form__button spaced" disabled>Shorten this link</button>
        </div>

        <div className="module">
          <div className="module__header">
            <h2 className="title">Previously shortened by you</h2>
            <button className="btn">Clear history</button>
          </div>

          <div className="module__content">

          </div>
        </div>

      </div>
    );
  }
}
