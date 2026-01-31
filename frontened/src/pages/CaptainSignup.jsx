import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        const newCaptainData = {
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
            }
        setCaptainData(newCaptainData);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
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

                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>
                    Login here
                </button>
            </form>
            <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        <p className='text-[10px] leading-tight text-gray-500'>This site is protected by reCAPTCHA and the <span className='underline text-purple-500'>Google Privacy Policy</span> and <span className='underline text-purple-500'>Terms of Service apply</span>.</p>
    </div>
  )
}

export default CaptainSignup
