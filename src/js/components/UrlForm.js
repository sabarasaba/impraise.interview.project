import React, { Component } from 'react';

class UrlForm extends Component {

  render () {
    return (
      <div className="form form--inline">
        <input className="form__input" type="text" placeholder="Paste the link you want to shorten here"/>
        <button className="form__button spaced" disabled>Shorten this link</button>
      </div>
    );
  }
};

UrlForm.propTypes = {
};

export default UrlForm;
