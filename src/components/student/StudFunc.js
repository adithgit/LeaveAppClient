import React from 'react'

function StudFunc(props) {
    
  return (
    <div className="functions">
        <div className="title">
          <h2>Student Functions</h2>
        </div>
        <div className="feature-box" id='get-students' onClick={props.getHistory}   >
          Get History
        </div>
        <div className="feature-box" id='student' onClick={props.applyLeave}>
          Apply Leave
        </div>
      </div>
  )
}

export default StudFunc