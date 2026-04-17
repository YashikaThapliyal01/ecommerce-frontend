import { NavLink } from "react-router-dom";

function Navbar({
  appName,
  cartCount,
  wishlistCount,
  categories,
  activeCategory,
  onCategoryChange,
  isDarkMode,
  onThemeToggle,
  onShowProducts,
  onToggleCart,
  onToggleWishlist,
}) {
  return (
    <header className="custom-navbar">
      <div className="left-zone">
        <button className="brand-button" onClick={onShowProducts}>
          {appName}
        </button>
        <div className="categories-wrap">
          {categories.map((category) => (
            <NavLink
              key={category}
              to={category === "All" ? "/" : `/category/${encodeURIComponent(category)}`}
              className={`category-pill ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="right-zone">
        <button className="nav-action-btn" onClick={onThemeToggle}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <button className="nav-action-btn" onClick={onToggleWishlist}>
          Wishlist ({wishlistCount})
        </button>
        <button className="nav-action-btn" onClick={onToggleCart}>
          Cart ({cartCount})
        </button>
      </div>
    </header>
  );
}

export default Navbar;