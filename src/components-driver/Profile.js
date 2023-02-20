import { Divider } from 'antd'
import React from 'react'
import prifile from '../images/inspector.jpg'

const Profile = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className="">
        <img src={prifile} alt="" />
      </div>
      <div className="bg-blue-900 p-5">
        <div className="font-bold bg-yellow-200 p-7 pb-24">
            <h1 className='text-2xl'>Name: Oppong Coffie</h1>
        <h1 className='text-lg'>Age: 35</h1>
        <h1 className='text-lg'>Lincenced No: VRA4585555</h1>
        </div>

<Divider />

        <div className="font-bold bg-yellow-200 p-7 pb-2">
            <h1 className='text-2xl'>Bus Name: Oppong Coffie</h1>
        <h1 className='text-lg'>Number of Seats: 35</h1>
        <h1 className='text-lg'>Number Plate: VRA4585555</h1>
        <h1 className='text-lg'>Colour: Sea Blue</h1>
        </div>
        
      </div>
    </div>
  )
}

export default Profile
