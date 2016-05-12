import React, { PropTypes, Component } from 'react';
import moment from 'moment';

class UrlTableListItem extends Component {

  render () {
    const shortUrl = `http://gymia-shorty.herokuapp.com/${this.props.schema.shortcode}`;
    const timeFromNow = moment(this.props.schema.timestamp).fromNow();

    return (
      <tr className="row">
        <td className="link">
          <a href={shortUrl} className="click-out">
            <span className="hover-content">Click to copy this link</span>
            <span className="shortened">
              https://shooooort.com/<strong>{this.props.schema.shortcode}</strong>
            </span>
            <span className="original">{this.props.schema.originalUrl}</span>
          </a>
        </td>
        <td className="visits">0</td>
        <td className="timestamp">{timeFromNow}</td>
      </tr>
    );
  }
};

UrlTableListItem.propTypes = {
  schema: PropTypes.object.isRequired
};

export default UrlTableListItem;
