// pages/about.js
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>About Campus Connect</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
        Campus Connect is a student‑exclusive marketplace platform built with Next.js.
        Browse, search, and list campus essentials—textbooks, electronics, furniture, and more—
        all in one responsive, fast‑loading app.
      </p>
    </Layout>
  )
}
