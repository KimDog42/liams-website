import React from 'react';
import { Input  } from '@nextui-org/react';

function EditProfile() {
  return (
    <div>
        <div className="text-white font-bold text-2xl flex justify-center pt-40">
            <img 
            className="h-40 rounded-full"
            src="https://cdn.discordapp.com/attachments/881019698874032220/996202430532436038/avatars-000396781371-h4mpjo-t500x500.jpg"/>
        </div>
        
        <div>
            <h2 className="flex justify-center text-3xl font-bold pt-5">Hello, Guest</h2>
        </div>

        <h2 className="flex justify-center text-2xl font-bold pt-10">Edit Your User Name Here</h2>
        <div className="flex justify-center pt-5">
        <Input 
            type="text"
            placeholder="Guest" 
            initialValue='Guest' 
            clearable={true} 
            underlined={true}
            color="primary"
            helperColor='primary'
            status='primary'
            />
        </div>

        <h2 className="flex justify-center text-2xl font-bold pt-10">Edit Your User Password Here</h2>
        <div className="flex justify-center pt-5">
        <Input 
            type="password"
            placeholder="Guest" 
            initialValue='^@evf$a$q8V@8BiQAR5vxMM' 
            clearable={true} 
            underlined={true}
            color="primary"
            helperColor='primary'
            status='primary'
            />
        </div>

        <h2 className="flex justify-center text-2xl font-bold pt-10">Edit Your Date Of Birth Here</h2>
        <div className="flex justify-center pt-5">
        <Input 
           width="186px" 
           label="Date" 
           type="date" 
            />
        </div>
        
    </div>
  )
}

export default EditProfile