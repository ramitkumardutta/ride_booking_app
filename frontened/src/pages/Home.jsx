import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'

const Home = () => {

  const [pickUp, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelopen] = useState(false);
  const panelRef = useRef(null);
  const panelCloserRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState("");
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
      }) 
      gsap.to(panelCloserRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
      }) 
      gsap.to(panelCloserRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function() {
    if(confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(100%)'
      }, [confirmRidePanel])
    }
  }, [vehiclePanel])


  useGSAP(function() {
    if(vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [vehiclePanel])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
      <div className='h-screen w-screen'>
        {/* image for temporary use  */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Uber Map" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 
            ref={panelCloserRef}
            onClick={()=> {
              setPanelopen(false)
            }}
           className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-400 rounded-full"></div>
            <input 
              onClick={() => {
                setPanelopen(true);
              }}
              value={pickUp}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
              type="text" 
              placeholder='Add a pick-up location'/>
            <input 
              onClick={() => {
                setPanelopen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
              type="text" 
              placeholder='Enter Your destination'/>
          </form>
        </div>
        <div ref={panelRef} className=' bg-white p-1 h-0'>
              <LocationSearchPanel setPanelopen={setPanelopen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-12">
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-12">
        <ConfirmRide />
      </div>
    </div>
  )
}

export default Home
 