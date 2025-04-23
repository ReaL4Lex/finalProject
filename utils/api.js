// utils/api.js
export async function getProducts(limit = 100) {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`)
    const { products } = await res.json()
    return products
  }
  
  export async function getProductById(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    return res.json()
  }
  