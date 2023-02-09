/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import './Ui.css';
import axios from 'axios';

function Ui() {
  const [initialState, setState] = useState({
    currencies: ['USD', 'XAF', 'EUR', 'AUD', 'GBP', 'CAD'],
    base: 'USD',
    amount: '',
    convertTo: 'XAF',
    result: '',
    date: '',
  });

  const { currencies, base, amount, convertTo, result, date } = initialState;
  useEffect(() => {
    if (amount === amount.isNaN) {
      return;
    }
    const getCurrencyConvertor = async () => {
      const response = await axios.get(
        `https://api.fastforex.io/fetch-all?api_key=c5e45c8952-cc98741f07-rptbde`
      );
      // console.log('response==>', response);
      const date = response.data.updated;
      const result = (response.data.results[convertTo] * amount).toFixed(2);
      setState({
        ...initialState,
        result,
        date,
      });
    };
    getCurrencyConvertor();
  }, [amount, base, convertTo]);

  const onChangeInput = (e) => {
    setState({
      ...initialState,
      amount: e.target.value,
      result: null,
      date: null,
    });
  };
  const handleSelect = (e) => {
    setState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null,
    });
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
      <div className="rowz">
        <div className="card">
          <h1>CURRENCY EXCHANGE</h1>
          <h5>
            {amount} {base} is equivelent to
          </h5>
          <h3>
            {amount === '' ? '0' : result === null ? 'Loading...' : result}
            {convertTo}
          </h3>
          <p>As of {amount === '' ? '' : date === null ? '' : date}</p>
          <div className="row">
            <div className="col">
              <form className="mb-4">
                <input
                  type="number"
                  value={amount}
                  onChange={onChangeInput}
                  className="form-control"
                />
                <select
                  name="base"
                  value={base}
                  onChange={handleSelect}
                  className="form-controlz"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </form>
              <form className="formz">
                <input
                  disabled
                  value={
                    amount === ''
                      ? '0'
                      : result === null
                      ? 'Loading....'
                      : result
                  }
                  className="form-controlz"
                />
                <select
                  name="convertTo"
                  value={convertTo}
                  onChange={handleSelect}
                  className="form-controlz"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div className="arrow">
              <button type="button" className="swap" onClick={handleSwap}>
                <i className="fa-solid fa-rotate" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui;
