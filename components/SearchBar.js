// components/SearchBar.js
export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search items..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      style={{
        padding: '0.5rem',
        width: '100%',
        maxWidth: '400px',
        margin: '1rem auto',
        display: 'block'
      }}
    />
  )
}
