import type { NextPage } from 'next'
import Head from 'next/head'
import Topbar from '../components/Navigation/Topbar'


const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen'>
      <Head>
        <title>The Yeet Website!</title>
        <link rel="icon" href="" />
      </Head>

      <Topbar/>

    </div>
  )
}

export default Home