// pages/sell.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../utils/auth'
import Layout from '../components/Layout'
import SellForm from '../components/SellForm'

export default function Sell() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push('/login')
  }, [user])

  if (!user) return null  // or a spinner

  return (
    <Layout>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>List an Item</h1>
      <SellForm />
    </Layout>
  )
}
