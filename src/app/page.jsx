import Image from 'next/image'
import home from '@/../public/hero.png'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export const metadata = {
  title: "VM - Home",
  description: "This is the Home page description",
};


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}> Better design for your digital products. </h1>
        <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, harum! Odio iusto culpa dolor dolore corrupti reiciendis enim quidem quas. </p>
        <Button url="/portfolio" text="See Our Works"  />
      </div>
      
      {/* Images */}
      <div className={styles.item}>
      <Image src={home} alt='Hero image not found' className={styles.img} />
      </div>

    </div>
  )
}
