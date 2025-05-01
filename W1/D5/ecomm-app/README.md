# 🛍️ My EcomShop

A modern, responsive e-commerce website built with **React + Vite**, styled using **Tailwind CSS**, and demonstrating key React concepts:
- 🧪 Prop Drilling (Wishlist)
- 🌗 Context API (Dark Mode)
- 🛒 Redux Toolkit (Cart Management)

---

## 🚀 Features

- 🔍 Fetch products from [Fake Store API](https://fakestoreapi.com/)
- 🛒 Add to Cart with quantity management (using Redux)
- ❤️ Wishlist toggle (via Prop Drilling)
- 🌙 Dark/Light theme switcher (using Context API)
- 🔄 Routing for Home, Cart, and Wishlist pages

---

## 📦 Tech Stack

| Tool          | Usage                           |
|---------------|----------------------------------|
| React + Vite  | Fast frontend setup              |
| Tailwind CSS  | Utility-first CSS styling        |
| Redux Toolkit | Global cart state management     |
| Context API   | Global theme management          |
| Prop Drilling | Local wishlist state handling    |
| React Router  | Page navigation                  |

---


## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/ShivSPGupta/QuadB_Tech.git
cd W1/D5/ecomm-app

# 2. Install dependencies
npm install

# 3. Start the app
npm run dev

```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
