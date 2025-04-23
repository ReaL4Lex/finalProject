// components/ItemCard.js
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/ItemCard.module.css'

export default function ItemCard({ item, clickable = false }) {
  const classes = [styles.card]
  if (item.rating > 4.5) classes.push(styles.highlight)

  const content = (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={200}
          height={120}
          unoptimized={item.thumbnail.startsWith('data:')}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3>{item.title}</h3>
      <p className={styles.price}>${item.price}</p>
    </>
  )

  return clickable ? (
    <Link href={`/product/${item.id}`} className={classes.join(' ')}>
      {content}
    </Link>
  ) : (
    <div className={classes.join(' ')}>
      {content}
    </div>
  )
}
