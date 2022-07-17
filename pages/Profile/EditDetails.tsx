import React from 'react'
import Topbar from '../../components/Navigation/Topbar'
import EditProfile from '../../components/Settings/EditProfile'
import SettingsSidebar from '../../components/Settings/SettingsSidebar'

function EditDetails() {
  return (
    <div className="bg-black h-screen text-white">
        <Topbar/>
        <EditProfile/>
        <SettingsSidebar/>
    </div>
  )
}

export default EditDetails