import React, { useState } from 'react';
import ItemList from '../components/itemList';
import { useAuth } from '../utils/auth';
import SearchBar from '../components/searchBar.js';

export default function HomePage() {
  const { items = [] } = useAuth();
  const [query, setQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Welcome to Campus MarketPlace</h1>
      <SearchBar query={query} onChange={setQuery} />
      <ItemList items={filteredItems} />
    </div>
  );
}
