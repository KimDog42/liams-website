import React from 'react';
import { Loading, Grid } from "@nextui-org/react";

function Providers() {
  return (
    <div className="bg-black h-screen">

        <div className="flex justify-center pt-96">
        <Loading textColor="primary" size="lg">Waiting for user to select a provider to Continue with the Login process</Loading>
        </div>

        <div className="flex items-center space-x-5 justify-center pt-10">
            <a href="/Profile/Login/Success">
            <img 
          className="h-10 w-10 cursor-pointer"
          src="https://cdn.discordapp.com/attachments/881019698874032220/996475652050014208/5847f9cbcef1014c0b5e48c8.png"/>
          </a>

          <a href="/Profile/Login/Success">
            <img 
          className="h-10 w-10 cursor-pointer"
          src="https://cdn.discordapp.com/attachments/881019698874032220/996525387620294736/GitHub-Mark-Light-64px.png"/>
          </a>

          <a href="/Profile/Login/Success">
            <img 
          className="h-10 w-10 cursor-pointer"
          src="https://cdn.discordapp.com/attachments/881019698874032220/996526535001522308/image-microsoft-logo--5.png"/>
          </a>

          <a href="/Profile/Login/Success">
            <img 
          className="h-10 w-10 cursor-pointer"
          src="https://cdn.discordapp.com/attachments/881019698874032220/998333670169510019/reddit-logo.png"/>
          </a>

          </div>

    </div>
  )
}

export default Providers