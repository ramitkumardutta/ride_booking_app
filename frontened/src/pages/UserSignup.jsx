import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const { user, setUser } = React.useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUserData = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUserData);

        if(response.status === 201) {
            const data = response.data

            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home')
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
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
                    Create account
                </button>
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </div>
        <p className='text-[10px] leading-tight text-gray-500'>This site is protected by reCAPTCHA and the <span className='underline text-purple-500'>Google Privacy Policy</span> and <span className='underline text-purple-500'>Terms of Service apply</span>.</p>
    </div>
  )
//   By proceeding, you consent to get calls, Whatsapp or SMS messages,including by automated mean, from Uber and its affiliates to the number provided.
}

export default UserSignup
