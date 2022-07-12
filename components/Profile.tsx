import React from 'react'

function Profile() {
  return (
    <div>
        <div className="flex space-x-4 items-center">
    <img className="h-10 rounded-full" src="https://cdn.discordapp.com/attachments/881019698874032220/996202430532436038/avatars-000396781371-h4mpjo-t500x500.jpg" alt=""/>
    <div className="space-y-1 font-medium dark:text-white">
        <div>Guest</div>
        <div className="text-sm text-gray-300 dark:text-gray-300">Joined in July 2022!</div>
    </div>
</div>
    </div>
  )
}

export default Profile