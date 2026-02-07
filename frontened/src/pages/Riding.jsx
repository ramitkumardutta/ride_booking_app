import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed top-2 right-2  h-10 w-10 m-1 bg-white flex items-center justify-center rounded-full'>
        <i className='text-lg font-bold ri-home-5-line'></i>
      </Link>
      <div className="h-1/2">
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Current Map" />
      </div>
      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
            <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="Car" />
            <div className='text-right mr-2'>
                <h2 className='text-lg font-medium'>Mr. Rajib</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>AB01 HG 7890</h4>
                <p className='text-sm text-gray-600'>Volkswagen Taigun Plus 1.0 TSI MT</p>
            </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
            <div className="w-full mt-5">
                <div className='flex items-center gap-5 p-2 border-b'>
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
        </div>
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'><h1>Make Payment</h1></button>
      </div>
    </div>
  )
}

export default Riding
