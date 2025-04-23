// components/ItemList.js
export default function ItemList({ items, renderItem }) {
    return <div className="grid">{items.map(renderItem)}</div>
  }
  