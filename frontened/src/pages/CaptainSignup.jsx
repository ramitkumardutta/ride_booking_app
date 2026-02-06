import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');


    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const plateRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;

    const submitHandler = async (e) => {
        e.preventDefault();

        const newCaptainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                capacity: Number(vehicleCapacity),
                color: vehicleColor,
                plate: vehiclePlate,
                vehicleType
            }
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptainData);
            if(response.status === 201) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
        } catch(error) {
            console.error("Signup error:", error.response?.data || error.message);
        }


        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleCapacity('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleType('');

        console.log(newCaptainData);
    }
  return (
    <div className='px-7 py-5 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <h3 className='text-base font-medium mb-2'> What's your Name</h3>

                <div className='flex gap-4 mb-5'>
                    <input 
                        required 
                        type='text' 
                        placeholder='First Name' 
                        className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-medium'

                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                    />

                    <input 
                        required 
                        type='text' 
                        placeholder='Last Name' 
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-medium'

                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                    />
                </div>

                <h3 className='text-base font-medium mb-2'> What's your Email</h3>

                <input 
                    required 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    type='email' 
                    placeholder='email@example.com' 
                    className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                />

                <h3 className='text-base font-medium mb-2'>Enter Password</h3>

                <input 
                    required 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    type="password" 
                    placeholder='password' 
                    className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                />

                <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                <div className='grid grid-cols-2 gap-4 mb-7'>
                    <input 
                        required
                        type="text" 
                        placeholder='Vehicle Color'
                        value={vehicleColor}
                        onChange={(e) => {
                            setVehicleColor(e.target.value)
                        }}
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-medium'
                    />

                    <input 
                        required
                        type="text" 
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-medium'
                        placeholder='Vehicle Plate'
                        value={vehiclePlate}
                        onChange={(e) => {
                            setVehiclePlate(e.target.value);
                        }}
                        maxLength={10}
                    />

                    <input 
                        required
                        type="text" 
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-medium'
                        placeholder='Vehicle Capacity'
                        value={vehicleCapacity}
                        onChange={(e) => {
                            setVehicleCapacity(e.target.value);
                        }}
                    />

                    <select 
                        required
                        type="text" 
                        className='bg-[#eeeeee] rounded px-1 py-2 border w-full text-base placeholder:text-sm'
                        placeholder='Vehicle Type'
                        value={vehicleType}
                        onChange={(e) => {
                            setVehicleType(e.target.value);
                        }}
                    >
                        <option value="" disabled hidden>Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="motorcycle">Moto</option>

                    </select>
                </div>

                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>
                    Create account
                </button>
            </form>
            <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        <p className='text-[10px] leading-tight text-gray-500'>This site is protected by reCAPTCHA and the <span className='underline text-purple-500'>Google Privacy Policy</span> and <span className='underline text-purple-500'>Terms of Service apply</span>.</p>
    </div>
  )
}

export default CaptainSignup
