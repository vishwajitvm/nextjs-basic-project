import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts" , { next: { revalidate: 10 } }) ; //revalidate or fetch data in evety 10 sec

  if(!res.ok) {
    throw new Error("Failed to fetch data") ;
  }
  return res.json() ;
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      { data.map(item => (

      <Link href={`/blog/${item.id}`} className={styles.container} key={item.id} >
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg" alt='' width={400} height={250} className={styles.image} />
        </div>

        <div className={styles.content} >
        <h1 className={styles.title}> { item.title } </h1>
        <h1 className={styles.desc}> { item.body } </h1>
        </div>
      </Link>
            )) }

    </div>
  )
}

export default Blog
