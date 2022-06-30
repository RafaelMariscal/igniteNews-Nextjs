import Head from "next/head";
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Home | Ignite News</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus expedita aut quidem unde ipsum voluptates pariatur dolorum qui aliquid.</p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus expedita aut quidem unde ipsum voluptates pariatur dolorum qui aliquid.</p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus expedita aut quidem unde ipsum voluptates pariatur dolorum qui aliquid.</p>
          </a>
        </div>
      </main>
    </>
  )
}