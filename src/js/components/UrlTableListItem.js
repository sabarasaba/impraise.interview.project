import React, { PropTypes, Component } from 'react';

class UrlTableListItem extends Component {

  render () {
    console.log(this.props);
    return (
      <tr className="row">
        <td className="link">
          <a href="#" className="click-out">
            <span className="hover-content">Click to copy this link</span>
            <span className="shortened">
              https://shooooort.com/<strong>aSDJnpAn73</strong>
            </span>
            <span className="original">{this.props.schema}</span>
          </a>
        </td>
        <td className="visits">0</td>
        <td className="timestamp">2 Hours ago</td>
      </tr>
    );
  }
};

UrlTableListItem.propTypes = {
  schema: PropTypes.string.isRequired
};

export default UrlTableListItem;
