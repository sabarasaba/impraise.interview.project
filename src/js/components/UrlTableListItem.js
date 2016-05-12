import React, { PropTypes, Component } from 'react';

import ClipboardButton from 'react-clipboard.js';
import moment from 'moment';

class UrlTableListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showNotification: false
    };
  }

  onLinkClick(e) {
    e.preventDefault();
  }

  render () {
    const shortUrl = `http://gymia-shorty.herokuapp.com/${this.props.schema.shortcode}`;
    const timeFromNow = moment(this.props.schema.timestamp).fromNow();

    return (
      <tr className="row">
        <td className="link">
          <a href={shortUrl} onClick={this.onLinkClick.bind(this)} className="click-out">
            <ClipboardButton type={'div'} className="hover-content" component="div" data-clipboard-text={shortUrl}>
              Click to copy this link
            </ClipboardButton>
            <span className="shortened">
              https://shooooort.com/<strong>{this.props.schema.shortcode}</strong>
            </span>
            <span className="original">{this.props.schema.originalUrl}</span>
          </a>
        </td>
        <td className="visits">{this.props.schema.visits}</td>
        <td className="timestamp">{timeFromNow}</td>
      </tr>
    );
  }
};

UrlTableListItem.propTypes = {
  schema: PropTypes.object.isRequired
};

export default UrlTableListItem;
