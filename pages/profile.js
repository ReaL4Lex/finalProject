// pages/profile.js
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import { useAuth } from '../utils/auth'
import { useProducts } from '../context/ProductContext'
import styles from '../styles/Profile.module.css'

const SellForm = dynamic(() => import('../components/SellForm'), { ssr: false })

export default function Profile() {
  const { user, updateUser } = useAuth()
  const { products, updateItem, deleteItem } = useProducts()

  const [editingUser, setEditingUser] = useState(false)
  const [userForm, setUserForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    department: user?.department || '',
    password: ''
  })
  const [editingId, setEditingId] = useState(null)

  if (!user) {
    return (
      <Layout>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          You must be logged in to view your profile.
        </p>
      </Layout>
    )
  }

  // Only your own listings (we tag user items with category='user')
  const userItems = products.filter(p => p.category === 'user')

  const handleUserChange = e => {
    const { name, value } = e.target
    setUserForm(prev => ({ ...prev, [name]: value }))
  }

  const saveUser = e => {
    e.preventDefault()
    const payload = {
      name: userForm.name,
      email: userForm.email,
      department: userForm.department
    }
    if (userForm.password) payload.password = userForm.password
    updateUser(payload)
    setEditingUser(false)
  }

  return (
    <Layout>
      <div className={styles.profileContainer}>
        <h2 className={styles.profileHeader}>Your Profile</h2>

        {/* User Info */}
        {!editingUser ? (
          <div className={styles.userInfo}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Department:</strong> {user.department}</p>
            <button onClick={() => setEditingUser(true)}>Edit Profile</button>
          </div>
        ) : (
          <form onSubmit={saveUser} className={styles.formContainer}>
            {['name','email','department','password'].map(field => (
              <div key={field} className={styles.formGroup}>
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === 'password' ? 'password' : 'text'}
                  required={field !== 'password'}
                  value={userForm[field]}
                  onChange={handleUserChange}
                />
              </div>
            ))}
            <button type="submit" className={`${styles.button} ${styles.buttonSave}`}>
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditingUser(false)}
              className={`${styles.button} ${styles.buttonCancel}`}
            >
              Cancel
            </button>
          </form>
        )}

        {/* User’s Listings */}
        <div>
          <h3>Your Listings</h3>
          {userItems.length === 0 && <p>You haven’t listed anything yet.</p>}
          {userItems.map(item =>
            editingId === item.id ? (
              <SellForm
                key={item.id}
                initialData={item}
                onSave={data => {
                  updateItem(item.id, data)
                  setEditingId(null)
                }}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div key={item.id} className={styles.itemCard}>
                <img
                  src={item.thumbnail || '/images/placeholder.png'}
                  alt={item.title}
                  style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <div className={styles.itemCardDetails}>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
                <div className={styles.itemCardActions}>
                  <button
                    className={styles.editBtn}
                    onClick={() => setEditingId(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  )
}
