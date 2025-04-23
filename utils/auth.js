// utils/auth.js
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('cc_user') || 'null')
    const usersList = JSON.parse(localStorage.getItem('cc_users') || '[]')
    if (!localStorage.getItem('cc_users')) {
      localStorage.setItem('cc_users', JSON.stringify([]))
    }
    if (storedUser) setUser(storedUser)
  }, [])

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('cc_users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)
    if (!found) return { success: false, message: 'Invalid credentials' }
    setUser(found)
    localStorage.setItem('cc_user', JSON.stringify(found))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('cc_user')
  }

  const addUser = newUser => {
    const users = JSON.parse(localStorage.getItem('cc_users') || '[]')
    if (users.some(u => u.email === newUser.email)) {
      return { success: false, message: 'User already exists' }
    }
    users.push(newUser)
    localStorage.setItem('cc_users', JSON.stringify(users))
    return { success: true }
  }

  const updateUser = updated => {
    const users = JSON.parse(localStorage.getItem('cc_users') || '[]')
    const idx = users.findIndex(u => u.email === user.email)
    if (idx === -1) return { success: false, message: 'User not found' }
    users[idx] = { ...users[idx], ...updated }
    localStorage.setItem('cc_users', JSON.stringify(users))
    localStorage.setItem('cc_user', JSON.stringify(users[idx]))
    setUser(users[idx])
    return { success: true }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, addUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
