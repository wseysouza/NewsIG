import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import style from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

// Client-side
// Server-Side
// Static Site Generation

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.News</title>
      </Head>

      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> word.</h1>
          <p>
            Get acess to all the publications<br />
            <span>{`for ${product.amount} month`}</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src='/images/avatar.svg' alt='Girl Coding' width='500' height='500' />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KnNW8D1gPJPM4kgb3Jk2HMJ')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}