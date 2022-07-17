import { UserIcon, DatabaseIcon } from '@heroicons/react/solid'
import React from 'react'

function SettingsSidebar() {
  return (
    <div className="absolute top-28 left-5">
        <div>
            <h2 className="text-2xl">General Settings</h2>
        </div>

        <div className="flex items-center pt-10 space-x-4rounded w-60">
            <a className="flex items-center space-x-4 rounded w-60 cursor-pointer hover:bg-indigo-500" href="/Profile/EditDetails">
                <UserIcon className="h-10"/>
            <h2 className="flex items-center">Edit Your Profile</h2>
            </a>
        </div>

        <div className="flex items-center pt-5 space-x-4 w-60">
            <a className="flex items-center space-x-4 h rounded w-60 cursor-pointer hover:bg-indigo-500" href="/Profile/EditDetails">
                <DatabaseIcon className="h-10"/>
            <h2 className="flex items-center">Edit Your Data And Privacy</h2>
            </a>
        </div>

    </div>
  )
}

export default SettingsSidebar