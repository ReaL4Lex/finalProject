// context/ProductContext.js
import { createContext, useState, useEffect, useContext } from 'react'
import { getProducts } from '../utils/api'

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [userItems, setUserItems] = useState([])

  useEffect(() => {
    getProducts(100).then(apiItems => {
      const saved = JSON.parse(localStorage.getItem('cc_userItems') || '[]')
      setUserItems(saved)
      setProducts([...apiItems, ...saved])
    })
  }, [])

  const persistUserItems = items => {
    localStorage.setItem('cc_userItems', JSON.stringify(items))
    setUserItems(items)
    // re-merge API + user items
    getProducts(100).then(apiItems => {
      setProducts([...apiItems, ...items])
    })
  }

  const addProduct = product => {
    const updated = [...userItems, product]
    persistUserItems(updated)
  }

  const updateItem = (id, updatedData) => {
    const updated = userItems.map(item =>
      item.id === id ? { ...item, ...updatedData } : item
    )
    persistUserItems(updated)
  }

  const deleteItem = id => {
    const updated = userItems.filter(item => item.id !== id)
    persistUserItems(updated)
  }

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateItem,
      deleteItem
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
