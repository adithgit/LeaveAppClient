import React from 'react'
import Add from '../components/admin/Add'
import './common.css';
import { useState } from 'react'; 
import Remove from '../components/admin/Remove';
;

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
  const handleHistory = (e) => {

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
        <div className="feature-box" id='parent' onClick={handleRemove} >
          Remove Parent
        </div>
        <div className="feature-box" id='hod' onClick={handleRemove} >
          Remove Hod
        </div>
        <div className="feature-box" id='student' onClick={handleRemove} >
          Remove Student
        </div>
        <div className="feature-box" id='history' onClick={handleHistory}>
          History
        </div>
        <div className="feature-box" >
          History
        </div>
      </div>

    </>}

    </div>
  )
}

export default Home