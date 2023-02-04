import React from 'react';
import './Ui.css';

function Ui() {
  return (
    <div className="container">
      <div className="header">
        <h1>Currency Exchange</h1>
      </div>
      <div className="date">2023-02-14</div>
      <ul className="currencies">
        <li className="Currency" id="USD">
          <img
            src="https://img.geonames.org/flags/x/us.gif"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">&#36;</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> USD -US DOLLAR </p>
            <p className="base-currency-rate"> 1 USD = 1 USD</p>
          </div>
          <span className="close">&times;</span>
        </li>

        <li className="Currency base-currency" id="XAF">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.D_X5m-oRPprzi-2SscTE0wHaFu%26pid%3DApi&f=1&ipt=16ef59d3a571927bf6a41a5f4647ed62092081a3a4d264fee2b9c382c5df5f71&ipo=images"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">XAF</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> XAF - XAF </p>
            <p className="base-currency-rate"> 1 XAF = 1 XAF</p>
          </div>
          <span className="close">&times;</span>
        </li>

        <li className="Currency" id="XAF">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dI5oUriBY-3NYbcaKy_3TwHaE7%26pid%3DApi&f=1&ipt=9c0dfe646543815a87defdc674e3dfda5c7564de8cb94ebee6072b5cb8287c2c&ipo=images"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">EUR</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> EUR - EUR </p>
            <p className="base-currency-rate"> 1 EUR = 1 EUR</p>
          </div>
          <span className="close">&times;</span>
        </li>
      </ul>
      <ul className="add-currency-list" />
      <button type="button" className="add-currency-btn">
        Add Currency
      </button>
    </div>
  );
}

export default Ui;
