import { ButtonDeleteCurrency } from "../button/ButtonDeleteCurrency";
import { Progress } from "@chakra-ui/react";

export default function PortfolioItem() {
  return (
    <div className="portfolio-item-container">
      <div className="currency-info">
        <div className="currency-header">
          <img src="" alt="symbol" />
          <div className="currency-title">
            <p className="name">Bitcoin</p>
            <p className="symbol">BTC</p>
          </div>
        </div>
        <div className="currency-total">
          <p className="amount-currency">60,502.89</p>
          <p className="amount-usd">$602,912,517.84</p>
        </div>
        <div className="currency-price">
          <p>$9,965.02</p>
        </div>
        <div className="percentage">
          <Progress className="progress-bar" value={70} />
          <p className="progress-percentage">%46.6</p>
        </div>
      </div>
      <ButtonDeleteCurrency className="delete-button"></ButtonDeleteCurrency>
    </div>
  );
}
