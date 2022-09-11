import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Api from '../../api/Api';
import qs from 'qs';
import './admin.css';
import { Toast } from 'react-bootstrap';

function Remove(props) {

  const [data, setData] = useState(null);
  const [show, setShow]= useState({show:false});

  const toggleToast = () => {
    setShow(prev => { return {show:!prev.show}});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post(`/admin/remove/${props.type}`, qs.stringify(data))
      .then(function (response){
        if(response.status === 200){
          setShow({show:true, data:`${props.type} deleted`, bg:'success'});
        }
      })
      .catch(function (error) {
        setShow({show:true, data:`Cannot delete ${props.type}`, bg:'danger'})
      });
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setData({ username: value });
    console.log(data);
  }

  return (
    <div className='add'>
    <div className="form-container">
    <Toast bg={show.bg} style={{position:'absolute'}} show={show.show} syle={{color:'black'}} onClose={toggleToast}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Message</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body >{show.data}</Toast.Body>
        </Toast>
    <Form onSubmit={handleSubmit}>
    <h3 style={{textAlign:'center'}}>Enter Details to Remove</h3>
      <Form.Group className="mb-3" onChange={handleChange} controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
      <Button variant="primary" style={{marginLeft:'1vh'}} onClick={props.cancelHandle}>
        Cancel
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default Remove