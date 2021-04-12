import React,{Fragment} from 'react';
import {Container, Row, Col, Media, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    
  return (
  <Fragment>
  <Row>
  <Col style={{textAlign:"center"}} ><h3>This is where my Alien Ninja lives</h3></Col>
  </Row>

  <Row>
      <Media>
      <img
    width={64}
    height={64}
    className="mr-3"
    src="/assets/ninja.png"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>My Ninja</h5>
  
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
   
  </Media.Body>

      </Media>

</Row>
<Row>
      <Media>
    <img
      width={64}
      height={64}
      className="mr-3"
      src="/assets/ninja.png"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>More about my nija</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>


      </Row>

      <Row> <Image src="/assets/ninja.png" rounded fluid /></Row>
    
      <Row  className="align-self-center">
     <Col style={{textAlign:"center"}}>the end of my Ninja</Col>
      </Row>
    
 </Fragment> 
  )
};

export default Home;
