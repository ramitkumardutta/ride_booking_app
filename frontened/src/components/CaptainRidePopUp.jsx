import React from 'react'

const CaptainRidePopUp = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
          props.setRidePopupPanel(false)
          }}><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl flex justify-center font-semibold mb-5'>New Ride Available!</h3>
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
    <div className="flex flex-col w-full mt-5 gap-3 items-center">
        <button onClick={() => {
            props.setConfirmRidePopupPanel(true)
        }}
        className='w-full bg-green-600 text-white font-semibold p-3 py-3 px-10 rounded-lg'>Accept</button>
        <button onClick={() => {
            props.setRidePopupPanel(false)
        }}
        className='w-full bg-gray-300 text-black font-semibold p-3 py-3 px-10 rounded-lg'>Ignore</button>
    </div>
    </div>
    </div>
  )
}

export default CaptainRidePopUp
