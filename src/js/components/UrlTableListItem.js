import React, { PropTypes, Component } from 'react';

class UrlTableListItem extends Component {

  render () {
    const url = `http://gymia-shorty.herokuapp.com/${this.props.schema.shortcode}`;

    return (
      <tr className="row">
        <td className="link">
          <a href={url} className="click-out">
            <span className="hover-content">Click to copy this link</span>
            <span className="shortened">
              https://shooooort.com/<strong>{this.props.schema.shortcode}</strong>
            </span>
            <span className="original">{this.props.schema.originalUrl}</span>
          </a>
        </td>
        <td className="visits">0</td>
        <td className="timestamp">2 Hours ago</td>
      </tr>
    );
  }
};

UrlTableListItem.propTypes = {
  schema: PropTypes.object.isRequired
};

export default UrlTableListItem;
