import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ChefsInfo = () => {
    useEffect(() => {
        fetch('http://localhost:5000/chefs-data')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <Container className='my-5'>
                <h2 className='text-center mb-5'>Meet Our Chefs</h2>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChefsInfo;