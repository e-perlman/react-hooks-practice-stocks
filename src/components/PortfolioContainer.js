import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks,onDeletePortfolio}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map(stock=>(
        <Stock key={stock.id} stock={stock} handleStockClick={onDeletePortfolio}/>
      ))}
    </div>
  );
}

export default PortfolioContainer;
