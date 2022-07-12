import React from 'react';
import Profile from "../Profile"
import {
    HomeIcon,
    SearchIcon,
    InformationCircleIcon,
} from "@heroicons/react/outline";

function TopBarNavigation() {
  return (
    <div>

        <div className='justify-end flex'>
        </div>

<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" className="flex items-center">
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-green-600">The Yeet Website!</span>
  </a>
  <div className="flex md:order-2 justify-end">
      <Profile/>
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      
        <li>
        <a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white hover:text-green-600" aria-current="page">Home</a>
        </li>

        <li>
        <a href="/Error/Error404" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white hover:text-green-600" aria-current="page">Search</a>
        </li>

        <li>
        <a href="/AboutUs" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white hover:text-green-600" aria-current="page">About Us</a>
        </li>

        <li>
        <a href="/MarketPlace" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white hover:text-green-600" aria-current="page">MarketPlace</a>
        </li>

    </ul>
  </div>
  </div>
</nav>
    </div>
  )
}

export default TopBarNavigation