import { Box, Heading, Text } from "@chakra-ui/react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} className="coin-image" alt="cryptox" />
          <p>{name}</p>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">₹{price}</p>
          <p className="coin-volume">₹{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <Text className="coin-percent red">{priceChange.toFixed(2)}%</Text>
          ) : (
            <p className="coin-percent green">
              {priceChange.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap">
            Mkt Cap:<br/> ₹{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
