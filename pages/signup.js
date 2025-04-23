import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useAuth } from '../utils/auth'
import styles from '../styles/AuthForm.module.css'

export default function Signup() {
  const router = useRouter()
  const { addUser, login } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (!name || !email || !department || !password) {
      setError('Please fill in all fields')
      return
    }
    const newUser = { name, email, department, password }
    const result = addUser(newUser)
    if (!result.success) {
      setError(result.message)
      return
    }
    login(email, password)
    router.push('/')
  }

  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
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
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              required
              value={department}
              onChange={e => setDepartment(e.target.value)}
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
            Sign Up
          </button>
        </form>
        <Link href="/login" className={styles.link}>
          Already have an account? Login
        </Link>
      </div>
    </Layout>
  )
}
