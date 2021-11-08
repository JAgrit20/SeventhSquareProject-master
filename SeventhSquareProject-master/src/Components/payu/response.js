import React, { useEffect,useState } from "react";
import {Container, Row ,Form , Col , Formlabel,FormControl , Button } from 'react-bootstrap'
import axios from "axios";
import {FaCheck} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";

function Response() {
    const [txnid,settxnid]=useState('txt',Math.round(Math.random(1000,5000)*10000));
    const [amount, setAmount]=useState('');
    const [status,setStatus]=useState('')

    useEffect(()=>{
       axios.get('http://localhost:3000/getResponse').then(res=>{
           settxnid(res.data.txnid)
           setAmount(res.data.amount)
           setStatus(res.data.status)

       })
   
      },[txnid,status,amount])
   

    return (
        status==='true'?
        <Container>
            <FaCheck/>
            <h1>Your Order has been Placed</h1>
            <Row>
                <Col>Txtind</Col>
                <Col>{txnid}</Col>
            </Row>
            <Row>
                <Col>Amount</Col>
                <Col>{amount}</Col>
            </Row>
            <Row>
                <Col>Status</Col>
                <Col>{status}</Col>
            </Row>
        </Container>:
        <Container>
            <FaTimes/>
            <h1>Your Order Was not placed</h1>
        <Row>
            <Col>Txtind</Col>
            <Col>{txnid}</Col>
        </Row>
        <Row>
            <Col>Amount</Col>
            <Col>{amount}</Col>
        </Row>
        <Row>
            <Col>Status</Col>
            <Col>{status}</Col>
        </Row>
    </Container>

    )
}

export default Response
