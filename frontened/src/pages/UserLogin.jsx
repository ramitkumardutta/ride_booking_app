import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        const newUserData = {
            email: email,
            password: password
        }
        setUserData(newUserData);
        setEmail('');
        setPassword('');
        console.log(newUserData);
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
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
                className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
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

                <button className='bg-[#111] text-white font-semibold mt-2 mb-3 rounded px-4 py-2 w-full text-lg'>
                    Login
                </button>
            </form>
            <p className='text-center'>New here? <Link to='/Signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        <div>
            <Link to='/Captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin
