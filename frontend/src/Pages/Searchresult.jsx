import React from "react";
import { useLocation } from "react-router-dom";
import Item from "../components/Item/Item";
import "./SearchResults.css";

const SearchResults = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };

  return (
    <div className="search-results-container">
      <div className="search-results-header">
        {products.length > 0 ? (
          <h4>
            Found {products.length} product{products.length > 1 ? "s" : ""} for
            your query
          </h4>
        ) : (
          <h4>No products found</h4>
        )}
      </div>
      <div className="search-results">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="search-results-item">
              <Item
                id={product.id}
                name={product.name}
                image1={product.image1}
                price={product.price}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
