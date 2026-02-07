import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div className='p-2'>
        <h5 onClick={() => {
            props.setfinishRidePanel(false)
        }}
        className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl flex justify-center font-semibold mb-5'>Complete This Ride</h3>
        <div className='flex items-center justify-between mt-4 p-3 border-2 border-orange-300 bg-amber-50 rounded-lg'>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBjSBXF-U9VViz9C-SmuF-QMwqYkWYC6c9A&s" alt="User Pic" />
                <h2 className='text-lg font-medium'>Ayushi Shaw</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
            <div className='flex items-center gap-5 p-2 border-b-2'>
                <i className='text-lg ri-map-pin-user-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>9A, Time Square, Near Green Park, Frunklin</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-2 border-b-2'>
                <i className='text-lg ri-map-pin-2-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>24D, Royal Park Avenue , Near Royal Ship bar, Frunklin</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-2'>
                <i className='text-lg ri-currency-line'></i>
                <div>
                    <h3 className='text-lg font-medium'>₹193.20</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                </div>
            </div>
        </div>
        <div className='mt-6 w-full'>
            <Link to='/captain-home' 
            className='w-full mt-5 flex justify-center bg-green-800 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>

            <p className='mt-10 text-xs'>Click on Finish Ride button if you have completed the payment</p>
        </div>
        </div>
    </div>
  )
}

export default FinishRide
