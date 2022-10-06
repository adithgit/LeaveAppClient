import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './common.css'

function Navbar() {
  // if not logged in redirect to login page.
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(!JSON.parse(localStorage.getItem('userdata'))){
  //     navigate('/user/login');
  //   }
  // }, []);

  return (
    <div className='navbar'>
    <h1>MinimaLeave</h1>
    </div>
  )
}

export default Navbar