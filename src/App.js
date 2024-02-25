import { func } from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinsPrice, setCoinsPrice] = useState("");
  const [myMoney, setMyMoney] = useState("");
  const [result, setResult] = useState("");

  function onChange1(event) {
    setCoinsPrice(parseInt(event.target.value));
    console.log(event.target.value);
  }

  function onChange2(event) {
    setMyMoney(event.target.value);
    console.log(event.target.value);
  }

  function calculate(event) {
    event.preventDefault();
    setResult(Math.floor(myMoney / coinsPrice));
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>
        The Coins! {loading ? <strong>Loading</strong> : `(${coins.length})`}
      </h1>
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <select onChange={onChange1}>
          <option>select Coin!</option>
          {coins.map((item, index) => (
            <option value={item.quotes.USD.price} key={index}>
              {item.name} ({item.symbol}): ${item.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <form onSubmit={calculate}>
        <input
          type="number"
          placeholder="소지금"
          value={myMoney}
          onChange={onChange2}
        />
        <button>Submit</button>
      </form>

      <strong>구메가능 개수: {result === "" ? 0 : result} 개</strong>
    </div>
  );
}

export default App;
