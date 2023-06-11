import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg" alt='' width={400} height={250} className={styles.image} />
        </div>

        <div className={styles.content} >
        <h1 className={styles.title}> Test </h1>
        <h1 className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam fugiat numquam laborum animi. Recusandae officiis corporis atque ipsa quos? </h1>
        </div>
      </Link>

      
      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg" alt='' width={400} height={250} className={styles.image} />
        </div>

        <div className={styles.content} >
        <h1 className={styles.title}> Test </h1>
        <h1 className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam fugiat numquam laborum animi. Recusandae officiis corporis atque ipsa quos? </h1>
        </div>
      </Link>


      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg" alt='' width={400} height={250} className={styles.image} />
        </div>

        <div className={styles.content} >
        <h1 className={styles.title}> Test </h1>
        <h1 className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam fugiat numquam laborum animi. Recusandae officiis corporis atque ipsa quos? </h1>
        </div>
      </Link>
    </div>
  )
}

export default Blog
