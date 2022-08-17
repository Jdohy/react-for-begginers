/*
import { useState, useEffect } from "react";
import Convert from "./Convert";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [invert, setInvert] = useState(false);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
  };

  const onSelect = (event) => {
    setSelect(event.target.value);
  };

  const onInvert = () => {
    setMoney(0);
    setInvert((current) => !current);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select value={select} onChange={onSelect}>
            {coins.map((coin, idx) => (
              <option value={idx} key={coin.id}>
                {coin.name} ({coin.symbol}): $ {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />
          <Convert
            label={"USD"}
            money={invert ? coins[select].quotes.USD.price * money : money}
            onChange={onChange}
            text={"USD"}
            invert={invert}
          />
          ➡
          <Convert
            label={coins[select].symbol}
            money={!invert ? money / coins[select].quotes.USD.price : money}
            onChange={onChange}
            text={coins[select].symbol}
            invert={!invert}
          />
          <br />
          <button onClick={onInvert} style={{ width: "200px" }}>
            Invert
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
*/
