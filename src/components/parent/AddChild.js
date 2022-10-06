import React, { Children, useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../admin/admin.css';
import { Toast } from 'react-bootstrap';
import Api from '../../api/Api';
import qs from 'qs';

function AddChild(props) {
    const [data, setData] = useState(null);
    const [show, setShow] = useState({ show: false });

    const toggleToast = () => {
        setShow(prev => { return { show: !prev.show } });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const parentDetails = JSON.parse(localStorage.getItem('userdata'));
        const payload = data;
        console.log(parentDetails._id);
        payload.parent = parentDetails._id;
        Api.post('/parent/add', 
        qs.stringify(payload)).then((response)=>{
            console.log(response);
            setShow({
                data:'added Child',
                show:true,
                bg:'success'
            })
        }).catch((err)=>{
            console.log(err);
            setShow({
                data:err.toString(),
                show:true,
                bg:'danger'
            })
        })
    }
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setData({ ...data, [key]: value });
        console.log(data);
    }

    return (
        <div className='add' >
            <div className="form-container">
                <Toast bg={show.bg} style={{ position: 'absolute' }} show={show.show} syle={{ color: 'black' }} onClose={toggleToast}>
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
                    <h3 style={{ textAlign: 'center' }}>Enter Student Data</h3>

                    <Form.Group className="mb-3" onChange={handleChange} controlId="username">
                        <Form.Label>Student Username </Form.Label>
                        <Form.Control type="string" placeholder="Enter username" />
                    </Form.Group>

                    <Button variant="success" type="submit" >
                        Add
                    </Button>
                    <Button variant="primary" style={{ marginLeft: '1vh' }} onClick={props.cancelHandle}>
                        Cancel
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddChild