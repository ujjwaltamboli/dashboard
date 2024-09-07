import React from 'react'
import { takedata } from '@/ser/useractions'
const Dashboard = () => {
    return (
        <div className="flex flex-col items-center absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <h2 className="text-2xl font-bold text-center  mt-3">Welcome to Dashboard</h2>
    <form className="w-[35%] " action={takedata}>
      
      
        <label for="name" className="block ">Name</label>
        <input type="text" id="name" name="name" className="w-full  bg-gray-700 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" pla required/>
      

      
        <label for="email" className="block ">Email</label>
        <input type="text" id="email" name="email" className="w-full bg-gray-700 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"  required/>
      

      
        <label for="username" className="block ">Username</label>
        <input type="text" id="username" name="username" className="w-full bg-gray-700 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
      

      
        <label for="razorpayid" className="block ">Razorpay ID</label>
        <input type="text" id="razorpayid" name="razorpayid" className="w-full bg-gray-700 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
      

      
        <label for="razorpaysecret" className="block ">Razorpay Secret</label>
        <input type="text" id="razorpaysecret" name="razorpaysecret" className="w-full bg-gray-700 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"  required/>
      

      
        <label for="profilepic" className="block ">Profile Pic</label>
        <input type="text" id="profilepic" name="profilepic" className="w-full bg-gray-700 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
      

      
        <label for="coverpic" className="block ">Cover Pic</label>
        <input type="text" id="coverpic" name="coverpic" className="w-full bg-gray-700 p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
      

      
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 w-full rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
      
    </form>
        </div>
    )
}

                                    export default Dashboard
