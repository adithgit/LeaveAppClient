import React, {useState} from 'react'
import { Button, Table } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Api from '../../api/Api';

function Data(props) {
    const [modal, setModal] = useState({
        show:false,
        data: []
    }); 
    const handleModal = (e) => {
        const studentId = e.target.value;
        console.log(studentId);
        Api.get(`/hod/history/${studentId}`).then((response)=>{
           response = response.data;
             setModal({
                show:true,
                data:response.data
            })
        }).catch((err=>{
            setModal({
                show:true,
                data:'Empty'
            })
        }))

    }
    return (
        <>
        <Modal
        show={modal.show}
        onHide={() => setModal({
        show:false,
        data: []
    })}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Leave Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            modal.data.length != 0 ? "" : "No Leaves"
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
                                    <td><Button value={value._id} style={{width:'100%'}} onClick={handleModal}>Show Leaves</Button></td>
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