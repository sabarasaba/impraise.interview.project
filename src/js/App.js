import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="header">
          <div className="header__section">
            <h1 className="header__section__title">Shooooort</h1>
          </div>
          <div className="header__section header__section--baseline">
            <h3 className="header__section__subtitle">The link shortener with a long name</h3>
          </div>
        </header>

        <div className="form form--inline">
          <input className="form__input" type="text" placeholder="Paste the link you want to shorten here"/>
          <button className="form__button spaced" disabled>Shorten this link</button>
        </div>

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
                <tr className="row">
                  <td className="link">
                    <a href="#" className="click-out">
                      <span className="hover-content">Click to copy this link</span>
                      <span className="shortened">
                        https://shooooort.com/<strong>aSDJnpAn73</strong>
                      </span>
                      <span className="original">http://localhost:3000/</span>
                    </a>
                  </td>
                  <td className="visits">0</td>
                  <td className="timestamp">2 Hours ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}
