import React from 'react'
import logo from '../images/ride-booking-logo.png'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url("https://plus.unsplash.com/premium_vector-1721833865067-e6346760ba31?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen pt-8 flex justify-between flex-col w-full bg-gray-400'>
        <img className='w-14 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Ride Booking Logo" />
        <div className='bg-white pb-7 py-5 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-between w-full bg-black text-white py-3 rounded mt-5'><span className='pl-8 text-xl'>Continue</span><span className='pr-8 font-extrabold justify-center'>&gt;</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Start
