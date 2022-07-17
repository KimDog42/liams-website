import React from 'react'
import Profile from '../Profile'
import LeftBar from './LeftBarNavigation';

function RightBarNavigation() {
  return (
    <div className="flex justify-end bg-black">
        <Profile/>
        
    </div>
  )
}

export default RightBarNavigation