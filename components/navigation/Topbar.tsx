import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    InformationCircleIcon,
} from "@heroicons/react/outline";
import Profile from '../Profile';
import NewBadge from '../Badeges/New';
import TopBarNavigation from './TopBarNavigation';


function TopBar() {
  return (
    <div className="w-full h-full sticky top-0 z-50">
      
      <TopBarNavigation/>
    </div>
  )
}

export default TopBar