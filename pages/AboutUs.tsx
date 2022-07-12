import React from 'react'
import Head from 'next/head'
import TopBar from '../components/navigation/Topbar'

function AboutUs() {
  return (
    <div>
      <Head>
        <title>AboutUs!</title>
        <link rel="icon" href="" />
      </Head>

      <div className='bg-black h-screen'>
      <TopBar/>
      </div>


    </div>
  )
}

export default AboutUs 