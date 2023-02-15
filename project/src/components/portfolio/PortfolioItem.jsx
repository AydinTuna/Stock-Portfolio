import { ButtonDeleteCurrency } from "../button/ButtonDeleteCurrency";

export default function PortfolioItem() {
  return (
    <div className="portfolio-item-container">
      <div className="currency-info">
        <div className="currency-title"></div>
      </div>
      <ButtonDeleteCurrency className="delete-button"></ButtonDeleteCurrency>
    </div>
  );
}
