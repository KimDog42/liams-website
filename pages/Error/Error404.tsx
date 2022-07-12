import React from 'react';
import Head from 'next/head'

function Error404() {
  return (
    <div>
      <Head>
        <title>Error404</title>
        <link rel="icon" href="" />
      </Head>

      <div>
      </div>
<main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
          <div className="pt-3 flex items-center">
            <a href="/" className="flex items-center p-1 text-base font-normal bg-[#FF6A3D] text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Go Home</span>
            </a>
            </div>

</main>
    </div>
  )
}

export default Error404