import React, { Component } from 'react';

import { isUrl } from '../helpers/utils';

class UrlForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isButtonEnabled: false
    };
  }

  onInputChange(e) {
    // this.setState({
    //   isButtonEnabled: isUrl(e.target.value)
    // });

    this.setState({
      isButtonEnabled: e.target.value.length > 0
    });
  }

  render () {
    return (
      <div className="form form--inline">
        <input className="form__input" type="text" onChange={this.onInputChange.bind(this)} placeholder="Paste the link you want to shorten here"/>
        <button className="form__button spaced" disabled={!this.state.isButtonEnabled}>Shorten this link</button>
      </div>
    );
  }
};

UrlForm.propTypes = {
};

export default UrlForm;
