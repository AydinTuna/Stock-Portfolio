import Portfolio from "./Portfolio";
import { ButtonAddCurrency } from "../button/ButtonAddCurrency";

export default function PortfolioContainer() {
  return (
    <div className="portfolio-wrapper">
      <ButtonAddCurrency></ButtonAddCurrency>
      <Portfolio></Portfolio>
    </div>
  );
}
