# E-Commerce Frontend

React-based frontend for Vibe Commerce shopping cart application with clean UI using plain CSS.

## 🚀 Setup & Installation

```bash
cd frontend
npm install
```

## 📦 Dependencies

- `react` - UI library
- `react-dom` - React DOM rendering
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite

## ▶️ Running the Application

### Development Mode
```bash
npm run dev
```

App runs on: **http://localhost:3000**

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ProductList.jsx       # Products grid display
│   ├── ProductList.css
│   ├── Cart.jsx              # Shopping cart sidebar
│   ├── Cart.css
│   ├── CheckoutForm.jsx      # Checkout modal
│   ├── CheckoutForm.css
│   ├── Receipt.jsx           # Order receipt modal
│   └── Receipt.css
├── App.jsx                   # Main application component
├── App.css                   # App-level styles
├── index.css                 # Global styles
└── main.jsx                  # React entry point
```

## ✨ Features

### Components

#### 1. ProductList
- Grid layout of products
- Product cards with images
- "Add to Cart" buttons
- Responsive grid system

#### 2. Cart
- Sticky sidebar (desktop)
- Cart items with images
- Quantity controls (+/-)
- Remove item buttons
- Real-time total calculation
- "Proceed to Checkout" button

#### 3. CheckoutForm
- Modal overlay
- Form validation
- Name and email inputs
- Submit to create order

#### 4. Receipt
- Animated success checkmark
- Order confirmation details
- Order ID and timestamp
- Customer information
- Itemized order summary
- Total amount display

## 🎨 Design Features

- ✅ Clean, modern UI
- ✅ Plain CSS (no frameworks)
- ✅ Fully responsive design
- ✅ Smooth animations
- ✅ Professional color scheme
- ✅ Intuitive user experience
- ✅ Modal-based checkout flow

## 🔌 API Integration

Frontend connects to backend at: `http://localhost:5000/api`

Endpoints used:
- `GET /api/products` - Fetch all products
- `GET /api/cart` - Fetch cart data
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:id` - Remove item
- `POST /api/checkout` - Complete purchase

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎯 Requirements Met

✅ React functional components  
✅ Product grid with "Add to Cart"  
✅ Cart with items/qty/total  
✅ Remove/update buttons  
✅ Checkout form (name/email)  
✅ Receipt modal on success  
✅ Responsive design  
✅ No hardcoded data (fetched from API)  
✅ Plain CSS only (no frameworks)

## 🔧 State Management

Uses React Hooks:
- `useState` - Component state
- `useEffect` - Side effects & API calls

## 📝 Notes

- All data fetched from backend API
- No local storage used
- Form validation included
- Error handling implemented
- Loading states for better UX