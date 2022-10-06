import React, { useEffect, useState } from 'react'
import './admin.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Api from '../../api/Api';
import qs from 'qs';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [adminForm, setadminForm] = useState(null);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('userdata'))) {
            navigate('/home')
        }
    })

    let toggleState = (e) => {
        if (e.target.value === 'signIn') {
            setadminForm(null);
        } else {
            setadminForm(signUp);
        }
    }

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    let handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setFormData(formData => { return { ...formData, [key]: value } });
        console.log(formData);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        e.target.lastChild.innerText = "Please Wait.."
        const action = adminForm == null ? "login" : "register";

        Api.post(`/admin/${action}`, qs.stringify(formData))
            .then(function (response) {
                localStorage.setItem('userdata', JSON.stringify(response.data.data));
                navigate('/home');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const signUp =
        <>
            <Form.Group className="mb-3" controlId="name" >
                <Form.Label>Enter name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ADMIN_KEY"  >
                <Form.Label>Admin key</Form.Label>
                <Form.Control required type="password" placeholder="Key" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image"  >
                <Form.Label>Image URL</Form.Label>
                <Form.Control required type="text" placeholder="Key" />
            </Form.Group>
        </>

    return (
        <div className='admin-login'>
            <div className='logo-container'>
                <img src="/adminlogin.png" alt="" />
            </div>
            <div className='admin-container'>
                <div className="admin-wrap">
                    <ToggleButtonGroup type="radio" name="options" style={{ width: '100%', marginBottom: '1vh' }} defaultValue={'signIn'}>
                        <ToggleButton id="tbg-radio-1" value={'signIn'} onChange={toggleState}>
                            Sign-in
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" value={'signUp'} onChange={toggleState}>
                            Sign-up
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <br />
                    {/* handleChange declared here -> to prevent unexpected behaviour as part of 'Form' is stored in a state. */}
                    <Form onSubmit={handleSubmit} onChange={handleChange}>
                        <Form.Group className="mb-3" controlId="username"  >
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                We'll never share your data with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password"  >
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                        </Form.Group>
                        {adminForm}
                        <Button variant="primary" style={{ width: '100%' }} type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login