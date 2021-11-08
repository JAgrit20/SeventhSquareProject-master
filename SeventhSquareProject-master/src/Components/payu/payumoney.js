import React, { useEffect,useState } from "react";
import {Container, Row ,Form , Col , Formlabel,FormControl , Button } from 'react-bootstrap'
import axios from "axios";

function Payumoney() {

    const [baseurl]=useState('https://secure.payu.in/_payment');
    const [title]=useState('Reactjs checkout')
    const [key,setKey]=useState('TiAdHQ')
    const [salt]=useState('fvCfBBGVX1oI8FRB7Bj06o1KjDMWF0ef')
    const [txnid,settxnid]=useState('');
    const [amount, setAmount]=useState('1')
    const [firstname,setfirstname]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [productinfo, setproductinfo]=useState('')
    const [surl]=useState('https://theseventhsquare.pythonanywhere.com/orders/payu_surl/')
    const [furl]=useState('https://theseventhsquare.pythonanywhere.com/orders/payu_surl/')
    const [serviceProvider]=useState('payu_paisa')
    const [hash,sethash]=useState('')

    const calHash=(e)=>{
        let name =e.target.name
        let value=e.target.value;
        if (name==='key'){
            setKey(value);
        }
        if (name==='txnid'){
            settxnid(value)
        }
        if (name==='amount'){
            setAmount(value)
        }
        if(name==='firstname'){
            setfirstname(value)
        }
        if (name==='email'){
            setEmail(value)
        }
        if (name==='phone'){
            setPhone(value)
        }
        if (name==='productinfo'){
            setproductinfo(value)
        }
    }

    const posthash=async()=>{
        console.log(firstname)
        
        const config = {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'qCvyXmKu8e1FUey6nOeYEokD5KBUKRn4917X5hWHTZ0='
          },
          body:JSON.stringify({
            "amount": amount,
            "productinfo": productinfo,
            "firstname": firstname,
            "email": email ,
            
          })
        };
        
        const res=await fetch('https://api.seventhsq.com/payu/hash/',config);
        const data= await res.json();
        console.log(data);
        sethash(data.hash);
        settxnid(data.txnid)
        
        console.log(data.hash)
        console.log(data.txnid)
        
    }


    useEffect(()=>{
       posthash();
    },[amount,productinfo,firstname,email])
    return (
        <Container>
            <Form action={baseurl} method="post">
                <Row>
                    <Col sm>
                     <h4>{title}</h4>
                    </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              Key
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='key' value={key} onChange={calHash}>
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              Salt
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='salt' value={salt} onChange={calHash}>
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              Txn Id
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='txnid' value={txnid} onChange={calHash}>
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              Amount
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='amount' value={amount} onChange={calHash}>
                             
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              First Name
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='firstname' value={firstname} onChange={calHash}>
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              Email
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='email' value={email} onChange={calHash}>
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              Phone
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='phone' value={phone} onChange={calHash}>
                              
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                             Product Info
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='productinfo' value={productinfo} onChange={calHash}>
                              
                          </Form.Control>
                      </Col>
                </Row>
               
               
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              SURL
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='surl' value={surl} readonly>
                             
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              FURL
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='furl' value={furl} readonly>
                             
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              Service Provider
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='serviceprovider' value={serviceProvider} readonly>
                             
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Form.Label>
                              Hash
                          </Form.Label>
                      </Col>
                      <Col sm>
                          <Form.Control type="text" name='hash' value={hash} readonly>
                             
                          </Form.Control>
                      </Col>
                </Row>
                <Row className='pt-sm-2'>
                      <Col sm>
                          <Button type='submit'>
                                 Pay
                          </Button>
                      </Col>
                      
                </Row>
            </Form>
        </Container>
    )
}

export default Payumoney
