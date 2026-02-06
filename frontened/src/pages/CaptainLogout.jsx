import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {

    const token = localStorage.getItem('token');

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200) {
                localStorage.removeItem('token');
                navigate('/captain-login', { replace: true });
            } 
        }).catch(() => {
            localStorage.removeItem("token");
            navigate('/captain-login', { replace: true });
        })
    }, [navigate, token]);

  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout
