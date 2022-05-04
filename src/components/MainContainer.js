import React,{useState,useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks,setStocks]=useState([]);
  const [portolfioStocks,setPortfolioStock]=useState([])
  const [category,setCategory]=useState(null)
  const [sort,setSort]=useState(null)

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(r=>r.json())
    .then(stocks=>setStocks(stocks))
  },[]);
  
  function handleAddPortfolio(addedStock){
    setPortfolioStock([...portolfioStocks,addedStock])
  }
  function handleDeletePortfolio(deletedStock){
    const updatedPortfolio=portolfioStocks.filter(stock=>stock.id!==deletedStock.id)
    setPortfolioStock(updatedPortfolio)
  }
  function handleCategoryChange(e){
    setCategory(e.target.value)
  }
  const stocksFiltered=stocks
    .filter(stock=>{
      if (category===null) return true;
      return stock.type===category
    })
    .sort((a,b)=>{
      if (sort==='Alphabetically') {
        let na=a.name.toLowerCase(),
            nb=b.name.toLowerCase();
        if(na<nb) return -1;
        if(na>nb) return 1;
        return 0;
      } else if (sort==='Price') return a.price-b.price;
      return 0;
    })

    function handleSort(sort){
      setSort(sort)
    }
  return (
    <div>
      <SearchBar onCategoryChange={handleCategoryChange} sort={sort} onSort={handleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksFiltered} onAddPortfolio={handleAddPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portolfioStocks} onDeletePortfolio={handleDeletePortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
