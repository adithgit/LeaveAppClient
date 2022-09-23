import React from 'react'

function ParentFunc(props) {
  return (
    <div className="functions">
        <div className="title">
          <h2>Admin Functions</h2>
        </div>
        <div className="feature-box" id='get-students' onClick={props.addChild}   >
          Add child
        </div>
        <div className="feature-box" id='get-students' onClick={props.getStudents}   >
          View Children
        </div>
        <div className="feature-box" id='student' onClick={props.getPending}>
          Show pending
        </div>
      </div>
  )
}

export default ParentFunc