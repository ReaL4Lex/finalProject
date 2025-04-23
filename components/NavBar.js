// components/NavBar.js
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../utils/auth'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>Campus Connect</Link>
      <button className={styles.hamburger} onClick={() => setOpen(o => !o)}>
        ☰
      </button>
      <nav className={`${styles.nav} ${open ? styles.show : ''}`}>
        <Link href="/">Home</Link>
        {user && <Link href="/profile">Profile</Link>}
        {user && <Link href="/sell">Sell</Link>}
        <Link href="/about">About</Link>
        {!user && <Link href="/login">Login</Link>}
        {!user && <Link href="/signup">Sign Up</Link>}
        {user && (
          <button onClick={logout} style={{background:'none',border:'none',color:'white',cursor:'pointer',marginLeft:'1rem'}}>
            Logout
          </button>
        )}
      </nav>
    </header>
  )
}
