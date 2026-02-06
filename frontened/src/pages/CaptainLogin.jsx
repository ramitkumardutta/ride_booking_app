import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const CaptainLogin = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [captainData, setCaptainData] = useState({});

      const {captain, setCaptain} = useContext(CaptainDataContext);
      const navigate = useNavigate();
  
      const submitHandler = async (e) => {
        e.preventDefault();
        const newCaptianData = {
            email: email,
            password: password
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, newCaptianData);

            if(response.status === 200) {
                const data = response.data
                setCaptainData(newCaptianData);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
        }

        setEmail('');
        setPassword('');
      }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-20 mb-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <h3 className='text-lg font-medium mb-2'> What's your email</h3>

                <input 
                required 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type='email' 
                placeholder='email@example.com' 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                />

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                <input 
                required 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                type="password" 
                placeholder='password' 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                />

                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>
                    Login
                </button>
            </form>
            <p className='text-center'>Join a new? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </div>
        <div>
            <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin
