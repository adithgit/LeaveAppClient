import React from 'react'
import Add from '../components/admin/Add'
import './common.css';
import { useState } from 'react'; 
import Remove from '../components/admin/Remove';
import AdminFunc from '../components/admin/AdminFunc';
import HodFunc from '../components/hod/HodFunc';
import Api from '../api/Api';
import Student from '../components/hod/Student';
import StudFunc from '../components/student/StudFunc';
import Data from '../components/student/Data';
import Apply from '../components/student/Apply';
import ParentFunc from '../components/parent/ParentFunc';
import AddChild from '../components/parent/AddChild';

function Home() {
  const [form, setForm] = useState(null);
  // Admin
  const handleAdd = (e) => {
    setForm(<Add type={e.target.id} cancelHandle={cancelHandle} />)
  }
  const handleRemove = (e) => {
    setForm(<Remove type={e.target.id} cancelHandle={cancelHandle} />);
  }
  const cancelHandle = () => {
    setForm(null)
  }
  // Hod
  const getStudents = () => {
    setForm(<Student cancelHandle={cancelHandle}  />)
  }

  const getPending = () =>{
    setForm(<Student pending cancelHandle={cancelHandle} />)
  }
// Student
  const getHistory = () => {
    Api.get('/student/history/631e2b4f2d808b336c61190a').then((response)=>{
      const data = response.data.data;
      console.log(response);
      setForm(<Data data={data} cancelHandle={cancelHandle} />)
  }).catch((err)=>{
  })
  }

  const applyLeave = () => {
    setForm(<Apply cancelHandle={cancelHandle} />)
  }
  // Parent
  
  const parentPending = () => {

  }

  const parentStudents = () => {
    
  }

  const addChild = () => {
    setForm(<AddChild cancelHandle={cancelHandle}  />)
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
    <ParentFunc getStudents={parentStudents} getPending={parentPending} addChild={addChild} cancelHandle={cancelHandle}  />
    </>}

    </div>
  )
}

export default Home