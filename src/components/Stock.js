import React from "react";

function Stock({stock,handleStockClick}) {
  function onStockClick(){
    handleStockClick(stock)
  }
  return (
    <div>
      <div className="card" onClick={onStockClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.ticker}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
