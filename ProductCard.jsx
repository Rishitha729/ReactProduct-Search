// Emoji per category
const categoryEmoji = {
  Electronics: "💻",
  Clothing: "👗",
  Home: "☕",
};

function ProductCard({ name, category, price }) {
  return (
    <div className="card">

      {/* Emoji Icon */}
      <div className="card-emoji">
        {categoryEmoji[category] || "📦"}
      </div>

      {/* Name + Category */}
      <div className="card-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
      </div>

      {/* Price Badge */}
      <div className="price-badge">₹{price.toLocaleString()}</div>

    </div>
  );
}

export default ProductCard;