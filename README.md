# ECommerce Store

A modern, responsive ecommerce web application built with **React**, **Vite**, and **Bootstrap**. This project demonstrates a functional product browsing and shopping experience with features like category filtering, cart management, wishlist functionality, and dark mode theme.

---

## 🎯 Features

- **Product Catalog**: Browse a collection of electronics products (laptops, mobiles, headphones, smartwatches, tablets)
- **Category Filtering**: Filter products by category (All, Laptops, Mobiles, Audio, Wearables, Tablets)
- **Shopping Cart**: Add/remove products from your shopping cart with item count display
- **Wishlist**: Save favorite products to your wishlist
- **Buy Now**: Quick purchase functionality
- **Dark Mode Toggle**: Switch between light and dark themes for comfortable viewing
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface powered by Bootstrap 5

---

## 📁 Project Structure

```
ecommerce/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with category filters and action buttons
│   │   ├── ProductCard.jsx      # Individual product card component
│   │   └── ProductList.jsx      # Grid layout for displaying multiple products
│   ├── App.jsx                  # Main application component with product catalog
│   ├── App.css                  # Application-specific styles
│   ├── index.css                # Global styles
│   ├── main.jsx                 # React entry point
│   └── assets/                  # Static assets (images, fonts, etc.)
├── public/                      # Static files served as-is
├── eslint.config.js             # ESLint configuration for code quality
├── vite.config.js               # Vite configuration
├── package.json                 # Project dependencies and scripts
├── index.html                   # HTML entry point
└── README.md                    # Project documentation
```

---

## 🔧 Technologies Used

### Core Framework

- **React** (v19.2.4): JavaScript library for building user interfaces
- **Vite** (v8.0.4): Fast frontend build tool and development server

### Routing & Navigation

- **React Router DOM** (v7.14.1): Client-side routing for multi-page navigation

### Styling

- **Bootstrap** (v5.3.8): Popular CSS framework for responsive design

### Development Tools

- **ESLint** (v9.39.4): Code quality and linting
- **@vitejs/plugin-react** (v6.0.1): React support for Vite

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone or navigate to the project directory**:

   ```bash
   cd ecommerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another available port shown in the terminal).

---

## 📦 Available Scripts

### `npm run dev`

Starts the Vite development server with hot reload capability.

### `npm run build`

Creates an optimized production build in the `dist/` directory.

### `npm run preview`

Previews the production build locally before deployment.

### `npm run lint`

Runs ESLint to check for code quality issues and style violations.

---

## 🧩 Component Breakdown

### **Navbar Component**

The navigation header with:

- Brand name button
- Category filter pills with active state styling
- Theme toggle (Light/Dark mode)
- Cart and Wishlist buttons with item counts
- Responsive design that adapts to screen size

**Props:**

- `appName`: Application name to display
- `cartCount`: Number of items in cart
- `wishlistCount`: Number of items in wishlist
- `categories`: Array of product categories
- `activeCategory`: Currently selected category
- `isDarkMode`: Current theme state
- `onCategoryChange`, `onThemeToggle`, `onToggleCart`, `onToggleWishlist`: Event handlers

### **ProductCard Component**

Individual product card displaying:

- Product image
- Product name and description
- Category badge
- Price in Indian Rupees (INR) format
- Action buttons: Add to Cart, Add to Wishlist, Buy Now

**Props:**

- `product`: Product object with id, name, description, price, category, image
- `addToCart`, `addToWishlist`, `buyNow`: Click handlers for actions

### **ProductList Component**

Grid layout container that:

- Renders multiple ProductCard components
- Uses Bootstrap's responsive grid system (4 columns on medium screens)
- Maintains consistent spacing between cards

**Props:**

- `products`: Array of product objects to display
- `addToCart`, `addToWishlist`, `buyNow`: Handlers passed to ProductCard

### **App Component**

Main application logic including:

- Product catalog with sample data (electronics)
- State management for cart, wishlist, category filtering, and theme
- Routing integration with React Router
- Conditional rendering based on user selections

---

## 📊 Product Catalog

The application includes sample products in the following categories:

- **Laptops**: UltraBook Pro 14
- **Mobiles**: PixelMax Phone
- **Audio**: NoiseX Headphones
- **Wearables**: FitPulse Smart Watch
- **Tablets**: TabView 11

Each product includes:

- Unique ID
- Name and description
- Category classification
- Price in INR
- High-quality image from Unsplash

---

## 🎨 Styling

The project uses:

- **Bootstrap 5**: For responsive grid, buttons, cards, and utility classes
- **Custom CSS**: Custom styles in `App.css` for navbar styling, theme switching, and product cards
- **Global Styles**: `index.css` for global resets and base styles

---

## 🌐 Responsive Design

The application is fully responsive with:

- Mobile-first approach
- Bootstrap's responsive grid system
- Flexible navigation that adapts to screen size
- Touch-friendly buttons and interactions

---

## 🔄 How to Use

1. **Browse Products**: View the full product catalog on the home page
2. **Filter by Category**: Click category pills in the navbar to filter products
3. **Add to Cart**: Click "Add to Cart" button on any product
4. **Add to Wishlist**: Click "Add to Wishlist" to save favorite items
5. **Buy Now**: Click "Buy Now" for direct purchase
6. **Toggle Theme**: Click "Light" or "Dark" button to switch themes
7. **View Cart/Wishlist**: Click the cart or wishlist buttons to see saved items

---

## 📝 Code Quality

The project includes ESLint configuration to maintain code quality:

```bash
npm run lint
```

---

## 🚀 Future Enhancements

Potential features to add:

- Shopping cart checkout and payment integration
- User authentication and accounts
- Product search functionality
- Product reviews and ratings
- Order history and tracking
- Favorites management persistence
- Backend API integration
- Product detail pages
- Quantity adjustment in cart

---

## 📄 License

This is a practice project for learning React and ecommerce development concepts.

---

## 👨‍💻 Author

Created as a practice project for learning React, Vite, and ecommerce development.

---

## 💡 Tips

- Use the development server with `npm run dev` for the best development experience
- Check the browser console for any errors or warnings
- Use React DevTools browser extension for debugging React components
- Follow the ESLint rules to maintain code consistency

---

**Enjoy building and learning! Happy coding! 🚀**
