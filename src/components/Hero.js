import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Hero(props) {
    return(
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
                <Col md={4} sm={12}> 
                    { props.title && <h1>{props.title}</h1> }
                    { props.subTitle && <h2>{props.subTitle}</h2> }
                    { props.text && <h3>{props.text}</h3> } 
                </Col>
            </Row>

        </Container>
      </Jumbotron>
    );

}


export default Hero