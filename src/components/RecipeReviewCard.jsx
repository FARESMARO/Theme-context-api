import "../App.css";

export default function RecipeReviewCard({ product }) {
  function Add() {
    setFavourites([...favs, product]);
  }
  return (
    <div>
      <div className="ecommerce-card">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-button" onClick={Add}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
