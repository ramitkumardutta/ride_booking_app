import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import CaptainRidePopUp from '../components/CaptainRidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const ridePopUpRef = useRef(null);
  const ConfirmRidePopupPanelRef = useRef(null);

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);


  useGSAP(function() {
    if(ridePopupPanel) {
      gsap.to(ridePopUpRef.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  useGSAP(function() {
    if(ConfirmRidePopupPanel) {
      gsap.to(ConfirmRidePopupPanelRef.current, {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(ConfirmRidePopupPanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [ConfirmRidePopupPanel])

  return (
    <div className='h-screen'>
      <div className='fixed m-1 p-6 top-0 flex items-center justify-start w-full'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className='fixed top-2 right-2  h-10 w-10 m-1 bg-white flex items-center justify-center rounded-full'>
          <i className='text-lg font-bold ri-logout-box-line'></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Current Map" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopUpRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <CaptainRidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={ConfirmRidePopupPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome
