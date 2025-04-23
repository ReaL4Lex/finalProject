// pages/_app.js
import '../styles/globals.css'
import { AuthProvider }   from '../utils/auth'
import { ProductProvider } from '../context/ProductContext'
import { CartProvider }    from '../context/CartContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  )
}
