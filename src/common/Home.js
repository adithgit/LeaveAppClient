import React from 'react'
import Add from '../components/admin/Add'
import './common.css';
import { useState } from 'react'; 
import Remove from '../components/admin/Remove';
import AdminFunc from '../components/admin/AdminFunc';
import HodFunc from '../components/hod/HodFunc';
import Api from '../api/Api';
import Student from '../components/hod/Student';

function Home() {
  const [form, setForm] = useState(null);
  const handleAdd = (e) => {
    setForm(<Add type={e.target.id} cancelHandle={cancelHandle} />)
  }
  const handleRemove = (e) => {
    setForm(<Remove type={e.target.id} cancelHandle={cancelHandle} />);
  }
  const cancelHandle = () => {
    setForm(null)
  }
  const getStudents = () => {
    setForm(<Student cancelHandle={cancelHandle}  />)
  }
  return (
    <div className='home'>

<div className="sidebar-container">
        <div className="title">
          <h2>Admin Details</h2>
        </div>
        <div className="sidebar">
          <div className="data">
            <h4>Username</h4>
            :
            <h4>Adithya</h4>
          </div>
          <div className="data">
            <h4>Username</h4>
            :
            <h4>Adithya</h4>
          </div>
          <div className="data">
            <h4>Username</h4>
            :
            <h4>Adithya</h4>
          </div>
          <div className="data">
            <h4>Username</h4>
            :
            <h4>Adithya</h4>
          </div>
        </div>
      </div>
      
    {form || <>
    <HodFunc getStudents={getStudents} cancelHandle={cancelHandle} />
    </>}

    </div>
  )
}

export default Home