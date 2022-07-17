import type { NextPage } from 'next'
import Head from 'next/head'
import LeftBar from '../components/navigation/LeftBarNavigation'
import RightBarNavigation from './../components/navigation/RightBarNavigation';

const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen'>
      <Head>
        <title>The Yeet Website!</title>
        <link rel="icon" href="" />
      </Head>

      <main>
        {/*Left Sidebar*/}
        <LeftBar/>

        {/*Right Sidebar*/}
        <RightBarNavigation/>
        </main>

    </div>
  )
}

export default Home
 