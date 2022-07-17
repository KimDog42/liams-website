import React from 'react'
import Topbar from '../../components/Navigation/Topbar'
import Profile from '../../components/Profile'
import SettingsContent from '../../components/Settings/SettingsContent'

function Settings() {
  return (
    <div className="bg-black h-screen">
        <Topbar/>
        <SettingsContent/>
    </div>
  )
}

export default Settings