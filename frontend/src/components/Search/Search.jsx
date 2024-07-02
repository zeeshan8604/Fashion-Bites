import React, { useState } from "react";
import "./Search.css";

const SearchProducts = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:4000/searchproducts?query=${query}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError("No products found");
          setProducts([]);
        } else {
          setError("Server error");
        }
        return;
      }

      const data = await response.json();
      setProducts(data.products);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          required
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      <div>
        {products.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
