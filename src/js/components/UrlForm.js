import React, { PropTypes, Component } from 'react';

import { isUrl } from '../helpers/utils';

class UrlForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isButtonEnabled: false
    };
  }

  onInputChange(e) {
    this.setState({
      isButtonEnabled: isUrl(e.target.value)
    });
  }

  onButtonClick(e) {
    e.preventDefault();

    const input = this.refs.input;

    this.props.onAddUrl(input.value.trim());

    // Clean up the input
    input.value = '';
    this.setState({
      isButtonEnabled: false
    });
  }

  render () {
    return (
      <div className="form form--inline">
        <input className="form__input" ref="input" type="text" onChange={this.onInputChange.bind(this)} placeholder="Paste the link you want to shorten here"/>
        <button className="form__button spaced" onClick={this.onButtonClick.bind(this)} disabled={!this.state.isButtonEnabled}>Shorten this link</button>
      </div>
    );
  }
};

UrlForm.propTypes = {
  onAddUrl: PropTypes.func.isRequired
};

export default UrlForm;
