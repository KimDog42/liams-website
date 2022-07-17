import React from 'react'
import SettingsSidebar from './SettingsSidebar'

function SettingsContent() {
  return (
    <div>
        <div className='font-bold p-5 text-white flex flex-col'>
            <SettingsSidebar/>
        </div>
    </div>
  )
}

export default SettingsContent