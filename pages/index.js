// pages/index.js
import { useState } from 'react'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import ItemList from '../components/ItemList'
import ItemCard from '../components/ItemCard'
import { useProducts } from '../context/ProductContext'

export default function Home() {
  const { products } = useProducts()
  const [query, setQuery] = useState('')
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Layout>
      <h1 style={{ textAlign:'center', margin:'1rem 0' }}>
        Campus Connect Marketplace
      </h1>
      <SearchBar query={query} setQuery={setQuery} />
      <ItemList
        items={filtered}
        renderItem={item => (
          <ItemCard key={item.id} item={item} clickable />
        )}
      />
    </Layout>
  )
}
