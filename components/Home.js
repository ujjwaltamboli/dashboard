import React from 'react'
import { takedata } from '@/ser/serveractions'

const Home = () => {
  return (
    <div class="absolute flex flex-col items-center top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <h1 className='text-2xl mt-4 font-bold'>Welcome to dashboard</h1>
        <form className="flex flex-col  w-[35%] " action={takedata}>
          
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className='bg-gray-700 rounded-md h-8'
            required
          />
        

        
          <label>Email:</label>
          <input
            type="text"
            name="email"
            className='bg-gray-700 rounded-md h-8'
            required
          />
      

        
          <label>Username:</label>
          <input
            type="text"
            name="username"
            className='bg-gray-700 rounded-md h-8'
            required
          />
        

      
          <label>Profile Picture:</label>
          <input
            type="text"
            name="profilePic"
            className='bg-gray-700 rounded-md h-8'
            required
          />
       

     
          <label>Cover Picture:</label>
          <input
            type="text"
            name="coverPic"
            className='bg-gray-700 rounded-md h-8'
            required
          />
        

        
          <label>Razorpay ID:</label>
          <input
            type="text"
            name="razorpayId"
            className='bg-gray-700 rounded-md h-8'
            required
          />
        

        
          <label>Razorpay Secret:</label>
          <input
            type="text"
            name="razorpaySecret"
            className='bg-gray-700 rounded-md h-8'
            required
          />
        

        <button type="submit" className="bg-blue-800 mt-2">Submit</button>
      </form>
    </div>
  )
}

export default Home
