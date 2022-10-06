import React from 'react'

function AdminFunc(props) {
  return (
    <div className="functions">
        <div className="title">
          <h2>Admin Functions</h2>
        </div>
        <div className="feature-box" id='hod' onClick={props.handleAdd} >
          Add Hod
        </div>
        <div className="feature-box" id='student' onClick={props.handleAdd}>
          Add Student
        </div>
        <div className="feature-box" id='parent' onClick={props.handleAdd}>
          Add Parent
        </div> 
        <div className="feature-box" id='parent' onClick={props.handleRemove} >
          Remove Parent
        </div>
        <div className="feature-box" id='hod' onClick={props.handleRemove} >
          Remove Hod
        </div>
        <div className="feature-box" id='student' onClick={props.handleRemove} >
          Remove Student
        </div>
      </div>
  )
}

export default AdminFunc