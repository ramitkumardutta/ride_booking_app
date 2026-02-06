import React from 'react'

const LocationSearchPanel = (props) => {

  console.log(props);

  const locations = [
    "24, Bake Lane, Near Bagan Field, MS Toy Shop, Frunklin",
    "20, Rook Lane, Near Spring Field, Tram Stamp, Frunklin",
    "9A, Time Square, Near Green Park, Frunklin",
    "18D, Tower Lane, Near TV Tower, Toyota Factory, Frunklin",
    "24D, Royal Park Avenue , Near Royal Ship bar, Frunklin",
    "2C,Cross over bridge, National Highway, White Lake, Sunset Zone, Frunklin"
  ]
  return (
    <div className='h-[60vh] overflow-y-auto px-2'>
      {/* this is just a sample data */}

      {
        locations.map(function(elem, idx) {
          return(
            <div 
            onClick={()=>{
              props.setVehiclePanel(true)
              props.setPanelopen(false)
            }}
            key={idx}
            className="flex items-center gap-4 p-3 border-2 border-gray-100 active:border-black justify-start my-2">
              <h2 className='bg-[#eee] h-7 w-12 flex items-center justify-center rounded-full'>
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4 className='font-medium'>{elem}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default LocationSearchPanel
