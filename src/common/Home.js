import React from 'react'
import Add from '../components/admin/Add'
import './common.css';
import { useState } from 'react'; import { Button } from 'react-bootstrap';
;

function Home() {
  const [form, setForm] = useState(null);
  const handleAdd = (e) => {
    setForm(<Add type={e.target.id} cancelHandle={cancelHandle} />)
  }
  const cancelHandle = () => {
    setForm(null)
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

      <div className="functions">
        <div className="title">
          <h2>Admin Functions</h2>
        </div>
        <div className="feature-box" id='hod' onClick={handleAdd} >
          Add Hod
        </div>
        <div className="feature-box" id='student' onClick={handleAdd}>
          Add Student
        </div>
        <div className="feature-box" id='parent' onClick={handleAdd}>
          Add Parent
        </div>
        <div className="feature-box">
          Remove Parent
        </div>
        <div className="feature-box">
          Remove hod
        </div>
        <div className="feature-box">
          Add Parent
        </div>
        <div className="feature-box">
          History
        </div>
        <div className="feature-box">
          History
        </div>
      </div>

    </>}

    </div>
  )
}

export default Home