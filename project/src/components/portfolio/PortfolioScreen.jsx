import PortfolioContainer from "./PortfolioContainer";
import PortfolioTotalAmount from "./PortfolioTotalAmount";

export default function PortfolioScreen() {
  return (
    <div className="portfolio-screen-container">
      <PortfolioTotalAmount></PortfolioTotalAmount>
      <PortfolioContainer></PortfolioContainer>
    </div>
  );
}
