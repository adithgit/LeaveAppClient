import React from 'react'

function HodFunc(props) {
  return (
    <div className="functions">
        <div className="title">
          <h2>Admin Functions</h2>
        </div>
        <div className="feature-box" id='get-students' onClick={props.getStudents}   >
          View Students
        </div>
        <div className="feature-box" id='student' onClick={props.getPending}>
          Student Requests
        </div>
      </div>
  )
}

export default HodFunc