import ProductCard from "./ProductCard";

function ProductList({ products, addToCart, addToWishlist, buyNow }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            buyNow={buyNow}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;