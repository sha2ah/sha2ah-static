import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Footer, Banner } from '../components/layout/'
import {
  Hero,
  About,
  Services,
  Team,
  FAQ,
  Pricing,
  Contact,
} from '../components/home/'

import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t, lang } = useTranslation('home')

  return (
    <div
      dir={lang === 'en' ? 'ltr' : 'rtl'}
      className={lang === 'en' ? '' : 'text-right'}
    >
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/EASY RENT logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <main id="main">
        <About />
        <Services />
        <Banner />
        {/* <Team /> */}
        <FAQ />
        {/* <Pricing /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  console.log('(Re-)Generating...')

  return {
    revalidate: 600,
  }
}
