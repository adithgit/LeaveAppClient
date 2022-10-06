import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Api from '../../api/Api';
import qs from 'qs';
import '../admin/admin.css';
import Data from './Data';

function Student(props) {

  const [semester, setSemester] = useState(null);
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.get(`/hod/students/${semester}`)
      .then(function (response){
        if(response.status === 200){
          if(props.pending){
            
          }
          setResult(response.data.data);
        }
      })
      .catch(function (error) {
      });
  }
  const handleChange = (e) => {
    const semester = e.target.value;
    setSemester(semester);
  }

  const backHandler = (e) => {
    setResult(null)
  }
  return (
    <div className='add'>
    {
    result ? 
    <Data data={result} pending={props.pending} backHandler={backHandler} />
    :
    <div className="form-container">
    
    <Form onSubmit={handleSubmit}>
    <h3 style={{textAlign:'center'}}>Enter Semester</h3>
      <Form.Group className="mb-3" onChange={handleChange} controlId="semester">
        <Form.Label>Semester</Form.Label>
        <Form.Control type="text" placeholder="Enter semester" />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
      <Button variant="primary" style={{marginLeft:'1vh'}} onClick={props.cancelHandle}>
        Cancel
      </Button>
    </Form>
    </div>}
    </div>
  )
}

export default Student