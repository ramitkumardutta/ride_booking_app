import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
          props.setvehicleFound(false);
          }}><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
        <h3 className='mt-2 text-2xl font-semibold mb-5'>Looking For Driver</h3>

          <div className="flex gap-2 justify-between flex-col items-center">
            <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="Uber Car" />
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
          </div>
    </div>
  )
}

export default LookingForDriver
