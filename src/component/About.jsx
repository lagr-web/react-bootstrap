import React, {useState} from 'react';
import {Button} from 'react-bootstrap'
import {Container,Row,Col} from 'react-bootstrap'

const About = () => {

  const [count, setCount]=useState(0)
    
  const myFunc = () => {

    console.log('allo');
    
      }


  return (
<>
    <Container fluid="sm" >
      <Row className="justify-content-md-center">
    this is about me ... so
    </Row>
    <Row>You clicked {count} times</Row>
  <Row>
    <Button variant="primary" onClick={() => setCount(count + 1)} >Primary</Button>
    </Row>
    </Container>
</>
  )
  

};

export default About;
