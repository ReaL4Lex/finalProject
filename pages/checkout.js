// pages/checkout.js
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useProducts } from '../context/ProductContext'

export default function Checkout() {
  const router = useRouter()
  const { id } = router.query
  const { products } = useProducts()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <Layout><p>Loading...</p></Layout>
  }

  const handlePurchase = () => {
    alert(`Purchased "${product.title}" for $${product.price}`)
    router.push('/')
  }

  return (
    <Layout>
      <div style={{ maxWidth:600, margin:'1rem auto', textAlign:'center' }}>
        <h1>Checkout</h1>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={600}
          height={400}
          style={{ borderRadius:8 }}
        />
        <p style={{ margin:'1rem 0' }}><strong>{product.title}</strong></p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button
          onClick={handlePurchase}
          style={{
            padding:'0.5rem 1rem',
            marginTop:'1rem',
            cursor:'pointer'
          }}
        >
          Confirm Purchase
        </button>
      </div>
    </Layout>
  )
}
