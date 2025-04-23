import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useAuth } from '../utils/auth'
import styles from '../styles/AuthForm.module.css'

export default function Login() {
  const router = useRouter()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter email and password')
      return
    }
    const result = login(email, password)
    if (!result.success) {
      setError(result.message)
      return
    }
    router.push('/')
  }

  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <Link href="/signup" className={styles.link}>
          Don’t have an account? Sign Up
        </Link>
      </div>
    </Layout>
  )
}
