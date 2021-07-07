import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Music Events</title>
        <meta name='description' content='Latest music events in your town' />
      </Head>
      <h1>Home</h1>
    </Layout>
  )
}
