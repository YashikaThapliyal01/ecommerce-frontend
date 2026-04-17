import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const productCatalog = [
  {
    id: 1,
    name: "UltraBook Pro 14",
    description: "Thin, fast, and perfect for work or study.",
    price: 74999,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "PixelMax Phone",
    description: "Stunning camera and all-day battery.",
    price: 32999,
    category: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "NoiseX Headphones",
    description: "Premium sound with active noise cancellation.",
    price: 6499,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "FitPulse Smart Watch",
    description: "Track fitness, calls, and notifications on the go.",
    price: 8999,
    category: "Wearables",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "TabView 11",
    description: "Portable entertainment and productivity powerhouse.",
    price: 24999,
    category: "Tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "ProShot Mirrorless Camera",
    description: "Capture professional-level photos and videos.",
    price: 51999,
    category: "Cameras",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "GameStorm Mechanical Keyboard",
    description: "Tactile keys with RGB for gaming and coding.",
    price: 4499,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "ErgoTech Wireless Mouse",
    description: "Comfortable ergonomic design with precise control.",
    price: 2299,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "4K Vision Smart TV",
    description: "Cinematic home experience with smart apps.",
    price: 42999,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    name: "HomePod Mini Speaker",
    description: "Compact smart speaker with rich room-filling audio.",
    price: 6999,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    name: "AirFlow Cooling Fan",
    description: "Energy-efficient tower fan with remote control.",
    price: 4999,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    name: "PeakSound Bluetooth Earbuds",
    description: "Crystal-clear calls with deep bass and low latency.",
    price: 3499,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1606741965509-4f88dbf2f299?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 13,
    name: "SwiftCharge Power Bank",
    description: "20000mAh fast charging for phones and tablets.",
    price: 2799,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 14,
    name: "EcoBrew Coffee Maker",
    description: "Brew cafe-style coffee at home in minutes.",
    price: 6499,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 15,
    name: "VisionPad Drawing Tablet",
    description: "Responsive digital drawing tablet for creators.",
    price: 10999,
    category: "Tablets",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 16,
    name: "StreetCam Action Camera",
    description: "4K waterproof action camera for travel adventures.",
    price: 12999,
    category: "Cameras",
    image:
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 17,
    name: "ComfyTouch Office Chair",
    description: "Ergonomic chair with lumbar support and headrest.",
    price: 14999,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 18,
    name: "FitBand Active",
    description: "Slim fitness tracker with heart-rate monitoring.",
    price: 3999,
    category: "Wearables",
    image:
      "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 19,
    name: "NeoPlay Gaming Console",
    description: "Next-gen console performance for immersive gameplay.",
    price: 44999,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 20,
    name: "DeskLite Smart Lamp",
    description: "Adjustable LED lamp with touch brightness controls.",
    price: 1999,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  const [products] = useState(productCatalog);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeView, setActiveView] = useState("products");
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const minPrice = 500;
  const maxLimitPrice = useMemo(
    () => Math.max(...products.map((product) => product.price)),
    [products]
  );
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxLimitPrice);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const buyNow = (product) => {
    alert(
      `Order placed for ${product.name} - Rs.${product.price.toLocaleString("en-IN")}`
    );
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index === -1) return;
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const categories = useMemo(
    () => ["All", ...new Set(products.map((product) => product.category))],
    [products]
  );

  const activeCategory = useMemo(() => {
    if (!categoryName) return "All";
    const decodedCategory = decodeURIComponent(categoryName);
    return categories.includes(decodedCategory) ? decodedCategory : "All";
  }, [categories, categoryName]);

  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
          activeCategory === "All" || product.category === activeCategory;
        const matchesPrice =
          product.price >= minPrice && product.price <= selectedMaxPrice;
        return matchesSearch && matchesCategory && matchesPrice;
      });
  }, [activeCategory, products, search, selectedMaxPrice]);

  const totalCartValue = cart.reduce((acc, item) => acc + item.price, 0);
  const selectedCategoryCount = filteredProducts.length;

  const placeCartOrder = () => {
    if (cart.length === 0) return;
    alert(`Order placed for ${cart.length} item(s)!`);
    setCart([]);
  };

  return (
    <div className={isDarkMode ? "app dark-mode" : "app light-mode"}>
      <Navbar
        appName="ShoppingWorld"
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={(category) => {
          setActiveView("products");
          navigate(category === "All" ? "/" : `/category/${encodeURIComponent(category)}`);
        }}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode((prev) => !prev)}
        onShowProducts={() => {
          setActiveView("products");
          navigate("/");
        }}
        onToggleCart={() =>
          setActiveView((prev) => (prev === "cart" ? "products" : "cart"))
        }
        onToggleWishlist={() =>
          setActiveView((prev) => (prev === "wishlist" ? "products" : "wishlist"))
        }
      />

      <div className="container py-4">
        <input
          type="text"
          className="form-control mb-3 search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="row g-2 mb-3">
          <div className="col-md-8 ms-auto">
            <div className="price-filter-box">
              <label htmlFor="price-range" className="m-0">
                Price Range: Rs.{minPrice.toLocaleString("en-IN")} - Rs.
                {selectedMaxPrice.toLocaleString("en-IN")}
              </label>
              <input
                id="price-range"
                type="range"
                className="form-range price-slider"
                min={minPrice}
                max={maxLimitPrice}
                step={500}
                value={selectedMaxPrice}
                onChange={(e) => setSelectedMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {activeView === "cart" && (
          <div className="panel-card p-3">
            <h4 className="mb-3">Cart Items</h4>
            {cart.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="list-row">
                    <span>
                      {item.name} ({item.category})
                    </span>
                    <div className="d-flex align-items-center gap-3">
                      <strong>Rs.{item.price.toLocaleString("en-IN")}</strong>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <h5 className="mt-3">
                  Total: Rs.{totalCartValue.toLocaleString("en-IN")}
                </h5>
                <button className="btn btn-success mt-2" onClick={placeCartOrder}>
                  Buy Cart Now
                </button>
              </>
            )}
          </div>
        )}

        {activeView === "wishlist" && (
          <div className="panel-card p-3">
            <h4 className="mb-3">Wishlist</h4>
            {wishlist.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              wishlist.map((item) => (
                <div key={item.id} className="list-row">
                  <span>{item.name}</span>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeView === "products" && (
          <>
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              buyNow={buyNow}
            />
            <div className="text-muted small mt-2">
              Showing {selectedCategoryCount} product(s)
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;