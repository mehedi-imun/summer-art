import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiOutlineQuestionCircle} from 'react-icons/ai';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Summer Art</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className=' mt-6 px-6'>
          <h1 className=' text-5xl font-bold'>Summer Art Camp! 5 days of artist and panting Monet, Van Gogh matisse, & more.</h1>
          <a className=' font-medium text-gray-400' href="#">Multi-Day-Course <AiOutlineQuestionCircle className=' inline'/> </a>
          <div>
            <div></div>
            <div></div>
          </div>

        </section>
      </main>

    </div>
  )
}
