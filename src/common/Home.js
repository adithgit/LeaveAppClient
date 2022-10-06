import React, { useEffect } from 'react'
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
import Children from '../components/parent/Children';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Home() {

  const [form, setForm] = useState(null);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    
    if(!JSON.parse(localStorage.getItem('userdata'))){
      navigate('/');
    }

    setUser(JSON.parse(localStorage.getItem('userdata')));
  }, []);


  const logOut = ()=>{
    var userdata =localStorage.getItem('userdata'); 
    localStorage.removeItem('userdata');
    userdata = JSON.parse(userdata);
    if(userdata.type != 'admin') return navigate('/');
    navigate('/admin/login');
  }
  
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
    Api.get('/student/history').then((response)=>{
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
    Api.get('/parent/children').then((response)=>{
      const data = response.data.data;
      console.log(response);
      setForm( <Children cancelHandle={cancelHandle} pending data={data} />);
  }).catch((err)=>{
  })
  }

  const parentStudents = () => {
    Api.get('/parent/children').then((response)=>{
      const data = response.data.data;
      console.log(response);
      setForm( <Children cancelHandle={cancelHandle} data={data} />);
  }).catch((err)=>{
  })
  }

  const addChild = () => {
    setForm(<AddChild cancelHandle={cancelHandle}  />)
  }

  return (
    <div className='home'>

<div className="sidebar-container">
        <div className="title">
          <h2>Personal Details</h2>
        </div>
        <div className="sidebar">
          <div className="data">
            <h4 className='object'>Name</h4>
            :
            <h4 className='object'>{user.name}</h4>
          </div>
          <div className="data">
            <h4 className='object'>Username</h4>
            :
            <h4 className='object'>{user.username}</h4>
          </div>
        </div>
      </div>
      
    {form || <>
    {
      user.type === 'parent' ? <ParentFunc getStudents={parentStudents} getPending={parentPending} addChild={addChild} cancelHandle={cancelHandle}  />
      :
      user.type === 'hod' ? <HodFunc getStudents={getStudents} getPending={getPending} cancelHandle={cancelHandle}  />
      :
      user.type === 'student' ? <StudFunc getHistory={getHistory} applyLeave={applyLeave}  cancelHandle={cancelHandle}  />
      :
      <AdminFunc handleRemove={handleRemove} handleAdd={handleAdd} /> 
    }    
    </>}

    <Button className='log-out' onClick={logOut}>Log out</Button>

    </div>
  )
}

export default Home