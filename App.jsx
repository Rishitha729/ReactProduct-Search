import { useState } from "react";
import products from "./Products";
import ProductCard from "./ProductCard";
import "./App.css";

const categoryEmoji = {
  All: "🛍️",
  Electronics: "⚡",
  Clothing: "👗",
  Home: "🏠",
};

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Clothing", "Home"];

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === "All") return true;
      return product.category === selectedCategory;
    })
    .filter((product) => {
      return product.name.toLowerCase().includes(searchText.toLowerCase());
    });

  const getCount = (cat) => {
    if (cat === "All") return products.length;
    return products.filter((p) => p.category === cat).length;
  };

  return (
    <div className="container">


      <div className="header">
        <h1 className="heading">🛒 Product Search</h1>
        <p className="subheading">Find what you're looking for</p>
      </div>


      <div className="glass-panel">


        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products by name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
        </div>



        <div className="button-row">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "button active" : "button"}
            >
              {categoryEmoji[cat]} {cat}
              <span className="count-badge">{getCount(cat)}</span>
            </button>
          ))}
        </div>

      </div>



      <p className="results-label">{filteredProducts.length} results found</p>

      
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <div className="no-result">
            <div className="no-result-icon">😕</div>
            <p>No products found</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))
        )}
      </div>

    </div>
  );
}

export default App;
