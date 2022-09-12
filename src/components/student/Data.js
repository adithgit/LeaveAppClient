import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Api from '../../api/Api';



function Data(props) {
    return (
        <>

    <div className='add' >
            <Button onClick={props.cancelHandle}>back</Button>
            <Table striped="columns" >
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Subject</td>
                        <td>from</td>
                        <td>to</td>
                        <td>Hod</td>
                        <td>Parent</td>
                        <td>Final Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((value) => {
                            return (
                                <tr>
                                    <td>#</td>
                                    <td>{value.subject}</td>
                                    <td>{value.from}</td>
                                    <td>{value.to}</td>
                                    <td>{value.hodstatus}</td>
                                    <td>{value.parentstatus}</td>
                                    <td>{value.finalstatus}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            </div>
        </>
    )
}

export default Data