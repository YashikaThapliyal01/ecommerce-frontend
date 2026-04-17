function ProductCard({ product, addToCart, addToWishlist, buyNow }) {
  return (
    <div className="card product-card shadow-sm h-100">
      <img src={product.image} className="card-img-top product-image" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="product-category mb-2">{product.category}</p>
        <h5 className="text-success mb-3">Rs.{product.price.toLocaleString("en-IN")}</h5>
        <div className="mt-auto d-flex flex-column gap-2">
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="btn btn-outline-secondary" onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </button>
          <button className="btn btn-success" onClick={() => buyNow(product)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;