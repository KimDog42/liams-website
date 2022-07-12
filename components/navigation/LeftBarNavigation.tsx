import { ChatIcon, ChevronDoubleLeftIcon, HomeIcon, IdentificationIcon, SearchCircleIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/outline'
import React from 'react'

function LeftBarNavigation() {
  return (
    <div>
      <aside className="w-64 h-screen" aria-label="Sidebar">
   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen">
      <ul className="space-y-2">
         
         <li>
            <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <HomeIcon className='h-10'/>
               <span className="ml-3">Home</span>
            </a>
         </li>
         
         <li>
            <a href="/Error/Error404" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <SearchCircleIcon className='h-10'/>
               <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
               <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">New</span>
            </a>
         </li>

         <li>
            <a href="/Error/Error404" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <ChatIcon className="h-10"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
               <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </a>
         </li>

         <li>
            <a href="/Profile/KimDog" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <UserCircleIcon className='h-10'/>
               <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
         </li>

         <li>
            <a href="/Error/Error404" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <ShoppingCartIcon className='h-10'/>
               <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
         </li>

         <li>
            <a href="/Error/Error404" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <IdentificationIcon className='h-10'/>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>

      </ul>
   </div>
</aside>
    </div>
  )
}

export default LeftBarNavigation