/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import './Ui.css';

function Ui() {
  const [initialState, setState] = useState({
    currencies: ['USD', 'XAF', 'EUR', 'AUD', 'GBP', 'CAD'],
    base: 'USD',
    convertTo: 'XAF',
    result: '',
    date: '',
  });

  const [api, setApi] = useState([]);
  const [amount, setAmount] = useState();
  const [apiDate, setApiDate] = useState();
  const [apiCurrency, setCurrency] = useState('XAF');
  const [apiCurrency2, setCurrency2] = useState('USD');

  let ans;

  const { currencies, base, convertTo, result, date } = initialState;
  const getCurrencyConvertor = async () => {
    const response = await fetch(
      `https://api.fastforex.io/fetch-all?api_key=c5e45c8952-cc98741f07-rptbde`
    );

    // console.log('response==>', response);
    const data = await response.json();
    return [setApi(data.results), setApiDate(data.updated)];

    // const result = (response.data.results[convertTo] * amount).toFixed(2);
  };
  useEffect(() => {
    getCurrencyConvertor();
  }, []);

  if (apiCurrency === 'XAF') {
    ans = (api.XAF * amount).toFixed(3);
  } else if (apiCurrency === 'USD') {
    ans = (api.USD * amount).toFixed(3);
  } else if (apiCurrency === 'EUR') {
    ans = (api.EUR * amount).toFixed(3);
  } else if (apiCurrency === 'AUD') {
    ans = (api.AUD * amount).toFixed(3);
  } else if (apiCurrency === 'GBP') {
    ans = (api.GBP * amount).toFixed(3);
  } else {
    ans = (api.CAD * amount).toFixed(3);
  }

  const onChangeInput = (e) => {
    setState({
      ...initialState,
      result: null,
      date: null,
    });
    setAmount(e.target.value);
  };
  const handleSelect = (e) => {
    setState({
      ...initialState,
      result: null,
    });
    setCurrency(e.target.value);
  };
  const handleSelect2 = (e) => {
    setState({
      ...initialState,
      result: null,
    });
    setCurrency2(e.target.value);
  };
  const handleSwap = (e) => {
    e.preventDefault(0);
    setState({
      ...initialState,
      convertTo: base,
      base: convertTo,
      result: null,
    });
  };
  return (
    <div className="container">
      <div className="deposit">
        <div className="wallet">
          <h3>
            Wallet:
            <input
              disabled
              className="depo"
              type="number"
              placeholder=" 0.000"
            />
          </h3>
        </div>
        <h3>
          Deposit:
          <input className="depo" type="number" placeholder="0.000" />
        </h3>
      </div>
      <div className="rowz">
        <div className="card">
          <h1>
            CURRENCY <i className="fa-sharp fa-solid fa-money-bill-transfer" />{' '}
            EXCHANGE
          </h1>
          <div className="details">
            <h5>
              {amount} {apiCurrency2} is equivelent to
            </h5>
            <h3>
              {amount === 0 ? '0' : result === null ? ans : result}
              {apiCurrency}
            </h3>
            <p>As of {amount === 0 ? '' : date === null ? apiDate : date}</p>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-4">
                <input
                  type="number"
                  onChange={onChangeInput}
                  className="form-control"
                />
                <select
                  name="base"
                  value={apiCurrency2}
                  onChange={handleSelect2}
                  className="form-controlz"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <div className="formz">
                <input
                  disabled
                  value={amount === 0 ? '0' : result === null ? ans : result}
                  className="form-controlb"
                />
                <select
                  name="convertTo"
                  value={apiCurrency}
                  onChange={handleSelect}
                  className="form-controlz"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="arrow">
              <button type="button" className="swap" onClick={handleSwap}>
                <i className="fa-solid fa-rotate" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div>
          <h3>
            USD/
            <i className="fa-solid fa-dollar-sign" />:
            <p>Current market value</p>
            <input
              disabled
              className="price"
              type="number"
              placeholder=" 0.000"
            />
          </h3>
        </div>
        <div>
          <h3>
            XAF: <p>Current market value</p>
            <input
              disabled
              className="price"
              type="number"
              placeholder=" 0.000"
            />
          </h3>
        </div>
        <h3>
          EUR/
          <i className="fa-solid fa-euro-sign" />: <p>Current market value</p>
          <input disabled className="price" type="number" placeholder="0.000" />
        </h3>
      </div>
    </div>
  );
}

export default Ui;
