import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Heading, Flex } from "@chakra-ui/react";
import logo from "./logo.png";
import { FormControl, Spacer, Input, Box } from "@chakra-ui/react";
import Coin from "./Coin";

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Box>
        <Heading
          m={7}
          size="3xl"
          style={{
            color: "#3ec7bf",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Poppins',sans-serif"
          }}
        >
          <img
            src={logo}
            width="100px"
            height="100px"
            alt="logo"
            style={{
              position: "relative",
              top: "2px",
              filter: "grayscale(100%)",
            }}
          />
          cryptox
        </Heading>
        <FormControl className="coin-search" style={{display:"flex", justifyContent:"center", }}>
          <Input
            w="50%"
            type="text"
            variant="filled"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
            style={{
              marginBottom:"30px"
            }}
          />
        </FormControl>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange = {coin.price_change_percentage_24h}
              marketcap= {coin.market_cap}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default App;
