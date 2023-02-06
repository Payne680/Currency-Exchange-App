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

        <li className="Currency" id="€">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dI5oUriBY-3NYbcaKy_3TwHaE7%26pid%3DApi&f=1&ipt=9c0dfe646543815a87defdc674e3dfda5c7564de8cb94ebee6072b5cb8287c2c&ipo=images"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">€</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> EUR - EUR </p>
            <p className="base-currency-rate"> 1 EUR = 1 EUR</p>
          </div>
          <span className="close">&times;</span>
        </li>
        <li className="Currency" id="R">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HkmQAHg-itt6zJURqnhfmwHaEK%26pid%3DApi&f=1&ipt=8152079642720daf2eedff9b3b76e9232fc409d592a47d3e905bfd54122621a2&ipo=images"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">R</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> ZAR - ZAR </p>
            <p className="base-currency-rate"> 1 ZAR = 1 ZAR</p>
          </div>
          <span className="close">&times;</span>
        </li>
        <li className="Currency" id="₦">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SBtPTDlV3q42tLFnhfcNpwHaDt%26pid%3DApi&f=1&ipt=995ec5f4e2c6ca3fcd5c45d81072f019b0a087db8594e03ee9700ab859030009&ipo=images"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">₦</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> NGN - NGN </p>
            <p className="base-currency-rate"> 1 NGN = 1 NGN</p>
          </div>
          <span className="close">&times;</span>
        </li>
        <li className="Currency" id="₽">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dp8q7sH4-6Om5mVYe-Q0yQHaE8%26pid%3DApi&f=1&ipt=89567c8aaf72b437e64e232770e9a453a7ae19e1e02ef806466f065f879a24cc&ipo=images"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">₽</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> RUB - RUB </p>
            <p className="base-currency-rate"> 1 RUB = 1 RUB</p>
          </div>
          <span className="close">&times;</span>
        </li>
        <li className="Currency" id="¥">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IP-yJsTjrowRd-iM-H6i7QHaE7%26pid%3DApi&f=1&ipt=f1761c6ccb3b81b2fd493b65782172901c03823dd6bf7ba99465b8c6e3700b55&ipo=images"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">¥</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> CNY - CNY </p>
            <p className="base-currency-rate"> 1 CNY = 1 CNY</p>
          </div>
          <span className="close">&times;</span>
        </li>
        <li className="Currency" id="£">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GpGa6EUGrLiS2mWA9yi5VwHaEK%26pid%3DApi&f=1&ipt=b4d5321fcfda577ded716b840b47e055092654826eaf6fce6c264a4d8f25cd3f&ipo=images"
            alt=""
            className="flag"
          />
          <div className="info">
            <p className="input">
              <span className="currrency-symbol">£</span>
              <input placeholder="0.00000" />
            </p>
            <p className="currency-name"> GBP - GBP </p>
            <p className="base-currency-rate"> 1 GBP = 1 GBP</p>
          </div>
          <span className="close">&times;</span>
        </li>
      </ul>
      <button type="button" className="add-currency-btn open">
        <i className="fas fa-long-arrow-alt-left" />
        Add Currency
      </button>
      <ul className="add-currency-list">
        <li data-currency="USD" className="disable">
          <img
            src="https://img.geonames.org/flags/x/us.gif"
            alt=""
            className="flag"
          />
          <span>USD - US DOLLAR</span>
        </li>
        <li data-currency="NZD">
          <img
            src="https://duckduckgo.com/i/2523dee7.png"
            alt=""
            className="flag"
          />
          <span>NZD - New Zeeland Dollar</span>
        </li>
        <li data-currency="CAD">
          <img
            src="https://duckduckgo.com/i/42d29b63.png"
            alt=""
            className="flag"
          />
          <span>CAD - Canadian Dolllar</span>
        </li>
        <li data-currency="MXN">
          <img
            src="https://duckduckgo.com/i/5d875af6.png"
            alt=""
            className="flag"
          />
          <span>MXN - Mexican Peso</span>
        </li>
        <li data-currency="AUD">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.es6fxUyT2lrn6Von-_dzAgHaE8%26pid%3DApi&f=1&ipt=5471547fbdd01a98b8b36be6a1dbe20053cfa5ba5cd350b58e1b6163453a2735&ipo=images"
            alt=""
            className="flag"
          />
          <span>AUD - Australian Dollar</span>
        </li>
        <li data-currency="AED">
          <img
            src="https://duckduckgo.com/i/19cbdc32.png"
            alt=""
            className="flag"
          />
          <span>AED - United Arab Emirates dirham</span>
        </li>
      </ul>
    </div>
  );
}

export default Ui;
