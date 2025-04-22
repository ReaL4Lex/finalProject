This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Campus Connect - Marketplace

A student-to-student marketplace built with **Next.js** where users can buy and sell items within the campus community.

---

## 🚀 Project Overview
- **Purpose**: Facilitate on-campus buying and selling.
- **Built With**: React, Next.js, Context API
- **State Management**: `useContext` (custom `useAuth` hook)
- **Routing**: Dynamic routing with Next.js
- **Styling**: Global CSS + responsive media queries

---

## 🧱 Project Structure

```
├── assets/              # Global CSS and images
│   └── styles/globals.css
├── components/          # Reusable UI components
│   ├── footer.js
│   ├── itemCard.js
│   ├── itemList.js
│   ├── navBar.js
│   ├── searchBar.js
│   └── sellForm.js
├── pages/               # Route-based pages
│   ├── index.js         # Home
│   ├── about.js
│   ├── profile.js
│   ├── sell.js
│   ├── login.js
│   ├── signup.js
│   └── item/[id].js     # Dynamic route
├── utils/               # Custom logic
│   ├── auth.js          # Auth Context & hooks
│   ├── api.js           # Placeholder API
│   └── ProtectedRoute.js
└── README.md
```

---

## 🧩 Components

### `NavBar`
- Handles navigation and conditional login/logout.

### `Footer`
- Fixed bottom footer for branding.

### `ItemCard`
- Displays individual item listings with messaging feature.

### `ItemList`
- Renders all items as a grid of cards.

### `SellForm`
- Allows users to post new items for sale.

### `SearchBar`
- Input component for filtering items (can be extended).

---

## 🧠 State Management
- `AuthProvider` shares state (`user`, `items`, auth functions).
- State passed via props where applicable (e.g., `ItemCard`).

---

## ✅ Features Completed
- Item posting, profile editing, messaging seller
- Authentication (mocked via localStorage)
- Dynamic routing (item details)
- Component reuse + clean separation
- Fully responsive layout

---

## 📌 To Do
- API integration
- User avatars / images
- Better search/sort

---


