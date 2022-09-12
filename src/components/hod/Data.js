import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Api from '../../api/Api';

function Data(props) {
    const [modal, setModal] = useState({
        show: false,
        data: []
    });
    const handleModal = (e) => {
        const studentId = e.target.value;
        console.log(studentId);
        Api.get(`/hod/history/${studentId}`).then((response) => {
            response = response.data;
            console.log(response);
            if (response.data.length != 0) {
                setModal({
                    show: true,
                    data: response.data
                });
            } else {
                setModal({
                    show: true,
                    data: []
                })
            }
        }).catch((err => {
            setModal({
                show: true,
                data: []
            })
        }))
    }
    const grantLeave = (e) => {
        const leaveId = e.target.value;
        Api.get(`/hod/approve/${leaveId}`).then((response) => {
            response = response.data;
            const updateData = modal.data.filter((leave) => {
                return (leave._id != leaveId && leave.hodstatus === 'pending');
            })
            setModal({
                show: true,
                data: updateData
            })
            console.log(updateData);
        }).catch((err => {

        }))
    }

    const rejectLeave = (e) => {
        const leaveId = e.target.value;
        Api.get(`/hod/reject/${leaveId}`).then((response) => {
            response = response.data;
            const updateData = modal.data.filter((leave) => {
                return (leave._id != leaveId && leave.hodstatus === 'pending');
            })
            setModal({
                show: true,
                data: updateData
            })
            console.log(updateData);
        }).catch((err => {

        }))
    }
    return (
        <>
            <Modal
                show={modal.show}
                onHide={() => setModal({
                    show: false,
                    data: []
                })}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Leave Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        modal.data.length != 0 ?
                            <>
                                <Table striped="columns">
                                    <thead>
                                        <tr>
                                            <td>#</td>
                                            <td>From</td>
                                            <td>To</td>
                                            <td>Parent</td>
                                            <td>Hod</td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.pending ? modal.data.map((value) => {
                                                return (
                                                    <>
                                                        {value.hodstatus === 'pending' && value.finalstatus === 'pending' &&
                                                            <tr style={{ marginBotton: '1vh' }}>
                                                                <td>#</td>
                                                                <td>{value.from.slice(0, 10)}</td>
                                                                <td>{value.to.slice(0, 10)}</td>
                                                                <td>{value.parentstatus}</td>
                                                                <td>{value.hodstatus}</td>
                                                                <td>{value.finalstatus}</td>

                                                                <Button value={value._id} onClick={grantLeave} variant='success' style={{ color: 'black', marginInline: '1vh', marginBottom: '1vh' }}>Accept</Button>
                                                                <Button variant='danger' onClick={rejectLeave} style={{ marginInline: '1vh', marginBottom: '1vh' }}>Reject</Button>

                                                            </tr>
                                                        }
                                                    </>
                                                )
                                            }) 
                                            :

                                            modal.data.map((value) => {
                                                return (
                                                    <tr style={{marginBotton:'1vh'}}>
                                                        <td>#</td>
                                                        <td>{value.from.slice(0, 10)}</td>
                                                        <td>{value.to.slice(0, 10)}</td>
                                                        <td>{value.parentstatus}</td>
                                                        <td>{value.hodstatus}</td>
                                                        <td>{value.finalstatus}</td>
                                                    </tr>
                                                )
                                            })

                                        }
                                        
                                    </tbody>
                                </Table>
                            </>
                            : "No Leaves"
                    }
                </Modal.Body>
            </Modal>
            <Button onClick={props.backHandler}>back</Button>
            <Table striped="columns">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Username</td>
                        <td>leaves</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((value) => {
                            return (
                                <tr>
                                    <td>#</td>
                                    <td>{value.name}</td>
                                    <td>{value.username}</td>
                                    <td><Button value={value._id} style={{ width: '100%' }} onClick={handleModal}>{props.pending ? 'Show requests' : 'Show Leaves'}</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>

    )
}

export default Data