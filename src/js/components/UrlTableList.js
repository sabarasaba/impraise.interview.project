import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import UrlTableListItem from './UrlTableListItem';

class UrlTableList extends Component {

  onClearClick(e) {
    e.preventDefault();

    this.props.onClearAll();
  }

  render () {
    return (
      <div className="module">
        <div className="module__header">
          <h2 className="title">Previously shortened by you</h2>
          <button className="btn" onClick={this.onClearClick.bind(this)}>Clear history</button>
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

              <ReactCSSTransitionGroup component="tbody" transitionName="transitionIn" transitionEnterTimeout={0} transitionLeaveTimeout={1}>
                {this.props.urls.map((item, key) => {
                  return <UrlTableListItem key={key} schema={item} />;
                })}
              </ReactCSSTransitionGroup>
            </table>
          </div>

      </div>
    );
  }
};

UrlTableList.propTypes = {
  urls: PropTypes.array.isRequired,
  onClearAll: PropTypes.func.isRequired
};

export default UrlTableList;
