import Head from 'next/head'
import Image from 'next/image'

import style from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.News</title>
      </Head>

      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span>word.</h1>
          <p>
            Get acess to all the publications<br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <Image src='/images/avatar.svg' alt='Girl Coding' width='500' height='500' />
      </main>
    </>
  )
}
