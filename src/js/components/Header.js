import React, { Component } from 'react';

class Header extends Component {

  render () {
    return (
      <header className="header">
        <div className="header__section">
          <h1 className="header__section__title">Shooooort</h1>
        </div>
        <div className="header__section header__section--baseline">
          <h3 className="header__section__subtitle">The link shortener with a long name</h3>
        </div>
      </header>
    );
  }
};

Header.propTypes = {
};

export default Header;
