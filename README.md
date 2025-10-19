# 🛍️ FakeStore — Next.js E-Commerce Demo

A modern e-commerce demo built with **Next.js 14**, **Redux Toolkit**, and **FakeStoreAPI**.  
Includes **Login**, **Cart**, **Profile**, and **Dark/Light Theme** features.

🔗 **Live Demo:** [[vercel-link-here](https://vercel.com/takos-projects-7f7ff30c/fakestore-next)]  
💻 **Repository:** [[github-link-here](https://github.com/TakoSalakaia/fakestore-next/)]

---

## 🧩 Features
- 🛒 Browse products from [FakeStoreAPI](https://fakestoreapi.com)
- 🔍 View detailed product pages
- ➕ Add, remove, and update items in cart (Redux)
- 👤 Login with validation (**React Hook Form + Yup**)
- 💾 “Remember me” saves token in **localStorage**
- 🌙 Dark / Light theme toggle
- 🧠 Profile page with server-side fetching

---

## ⚙️ Tech Stack
- **Next.js 14 (App Router)**
- **React / Redux Toolkit**
- **React Hook Form + Yup**
- **FakeStoreAPI**
- **CSS Modules / Custom Design**
- **Vercel Deployment**

---

## 🚀 Run Locally

git clone <repo-url>
cd fakestore
npm install
npm run dev

---

**📁 Project Structure**
src/
 ├─ app/
 │   ├─ products/     → product list & detail pages
 │   ├─ login/        → login page with validation
 │   ├─ profile/      → user profile (SSR)
 │   └─ cart/         → cart management
 │
 ├─ components/       → reusable UI elements (NavBar, Footer, etc.)
 ├─ store/            → Redux slices (authSlice, cartSlice)
 └─ lib/              → API & auth helpers
---
🧠 Highlights

🎨 Clean, responsive, modern UI

🔐 Persistent login using stored token

🛒 Redux global state for cart & auth

⚙️ Server-side fetching for profile

🌙 Dark/Light theme toggle

💾 Remember me saves token in localStorage

🧩 Reusable, modular components
