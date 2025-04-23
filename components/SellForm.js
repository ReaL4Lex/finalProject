// components/SellForm.js
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useProducts } from '../context/ProductContext'

export default function SellForm() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const { addProduct } = useProducts()
  const router = useRouter()

  // When user selects a file, read it as a data URL
  const handleFileChange = e => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => setImagePreview(ev.target.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newProduct = {
      id: Date.now(),
      title,
      price: Number(price),
      description,
      thumbnail: imagePreview || '/images/placeholder.png',
      rating: 0,
      category: 'user'
    }
    addProduct(newProduct)
    router.push('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column' }}
    >
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ padding: '.5rem', marginBottom: '.5rem' }}
      />

      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
        style={{ padding: '.5rem', marginBottom: '.5rem' }}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        rows={4}
        style={{ padding: '.5rem', marginBottom: '.5rem' }}
      />

      <label>Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: '.5rem' }}
      />

      {/* preview */}
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ width: '100%', marginBottom: '.5rem', borderRadius: 4 }}
        />
      )}

      <button
        type="submit"
        style={{ padding: '.5rem 1rem', cursor: 'pointer' }}
      >
        Add Item
      </button>
    </form>
  )
}
