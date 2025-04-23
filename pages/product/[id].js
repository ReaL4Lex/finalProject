// pages/product/[id].js
import { useRouter }     from 'next/router'
import Layout             from '../../components/Layout'
import Image              from 'next/image'
import { useProducts }    from '../../context/ProductContext'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const { products } = useProducts()

  // While the page is hydrating, or if there’s no id yet:
  if (router.isFallback || !id) {
    return <Layout><p>Loading…</p></Layout>
  }

  // Find the product in your context (API-fetched or user-added)
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <Layout><p>Product not found.</p></Layout>
  }

  return (
    <Layout>
      <div style={{ maxWidth: 600, margin: '1rem auto', textAlign: 'center' }}>
        <h1>{product.title}</h1>
        <Image
          src={product.thumbnail || '/images/placeholder.png'}
          alt={product.title}
          width={600}
          height={400}
          style={{ borderRadius: 8 }}
        />
        <p style={{ margin: '1rem 0' }}>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <button
          onClick={() => router.push(`/checkout?id=${product.id}`)}
          style={{ padding: '.5rem 1rem', marginTop: '1rem', cursor: 'pointer' }}
        >
          Proceed to Checkout
        </button>
      </div>
    </Layout>
  )
}
