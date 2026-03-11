import { useState } from "react";
import products from "./products";

//  ProductCard Component (uses Props)
function ProductCard({ name, category, price }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.productName}>{name}</h3>
      <p style={styles.productInfo}>Category : {category}</p>
      <p style={styles.productInfo}>Price    : ₹{price}</p>
    </div>
  );
}

// Main App Component 
function App() {

  // Step 3: useState for search and category
  const [searchText, setSearchText]           = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 4: Filter logic using array filter()
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === "All") return true;
      return product.category === selectedCategory;
    })
    .filter((product) => {
      return product.name.toLowerCase().includes(searchText.toLowerCase());
    });

  // Step 5: Category list for buttons
  const categories = ["All", "Electronics", "Clothing", "Home"];

  //Render
  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>🛒 Product Search App</h1>

      /* Search Box (Controlled Input)*/
      <input
        type="text"
        placeholder="Search products by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={styles.searchInput}
      />

      /* Filter Buttons*/
      <div style={styles.buttonRow}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={
              selectedCategory === cat
                ? styles.activeButton
                : styles.button
            }
          >
            {cat}
          </button>
        ))}
      </div>

      /* ── Product List  */
      <div style={styles.productList}>
        {filteredProducts.length === 0 ? (
          <p style={styles.noResult}>No products found</p>
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

// ── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
    padding: "0 20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "24px",
    color: "#222",
  },
  searchInput: {
    width: "100%",
    padding: "10px 14px",
    fontSize: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "16px",
    boxSizing: "border-box",
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  button: {
    padding: "8px 18px",
    fontSize: "14px",
    border: "1px solid #aaa",
    borderRadius: "20px",
    background: "#fff",
    cursor: "pointer",
  },
  activeButton: {
    padding: "8px 18px",
    fontSize: "14px",
    border: "1px solid #007bff",
    borderRadius: "20px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  productList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px 20px",
    background: "#f9f9f9",
  },
  productName: {
    margin: "0 0 8px 0",
    fontSize: "18px",
    color: "#333",
  },
  productInfo: {
    margin: "4px 0",
    fontSize: "14px",
    color: "#555",
  },
  noResult: {
    textAlign: "center",
    color: "#999",
    fontSize: "16px",
    marginTop: "30px",
  },
};

export default App;
