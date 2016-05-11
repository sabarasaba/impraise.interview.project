import React, { PropTypes, Component } from 'react';

import UrlTableListItem from './UrlTableListItem';

class UrlTableList extends Component {

  render () {
    return (
      <div className="module">
        <div className="module__header">
          <h2 className="title">Previously shortened by you</h2>
          <button className="btn">Clear history</button>
        </div>

        <div className="module__content">
          <table className="links-table">
            <thead className="links-table__head">
              <tr className="row">
                <th className="link">Link</th>
                <th className="visits">Visits</th>
                <th className="timestamp">Last Visited</th>
              </tr>
            </thead>

            <tbody className="links-table__body">
              {this.props.urls.map((item, key) => {
                return <UrlTableListItem key={key} schema={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

UrlTableList.propTypes = {
  urls: PropTypes.array.isRequired,
};

export default UrlTableList;
