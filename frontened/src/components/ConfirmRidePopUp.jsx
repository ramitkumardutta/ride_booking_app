import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className='p-2'>
        <h5 onClick={() => {
            props.setConfirmRidePopupPanel(false)
        }}
        className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl flex justify-center font-semibold mb-5'>Confirm to Start</h3>
        <div className='flex items-center justify-between mt-4 p-3 bg-yellow-300 rounded-lg'>
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
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <input 
                value={otp}
                type="text" 
                placeholder='Enter OTP here'
                onChange={() => {
                    setOtp(e.value.target);
                }}
                className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5'
                />
                <Link to='/captain-riding' 
                className='w-full mt-5 flex justify-center text-lg bg-green-800 text-white font-semibold p-3 rounded-lg'>Confirm</Link>
                <button onClick={() => {
                    props.setConfirmRidePopupPanel(false)
                    props.setRidePopupPanel(false)
                }}
                className='w-full mt-2 text-lg bg-red-600 text-white font-semibold p-3 rounded-lg'>Cancel</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp
