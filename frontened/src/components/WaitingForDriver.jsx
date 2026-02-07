import React from 'react'

const WaitingForLocation = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
          props.setWaitForDriver(false);
          }}><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
        </h5>
        
        <div className='flex items-center justify-between'>
            <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="Car" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Rajib</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>AB01 HG 7890</h4>
                <p className='text-sm text-gray-600'>Volkswagen Taigun Plus 1.0 TSI MT</p>
            </div>
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
          </div>
    </div>
  )
}

export default WaitingForLocation
