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

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          EasyRent - Platform to manage your Real Estates without hassle
        </title>
        <meta
          name="description"
          content="EasyRent A platform to manage your Real Estates without hassle"
        />
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
