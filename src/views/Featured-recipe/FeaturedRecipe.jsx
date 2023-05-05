import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const FeaturedRecipe = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-center mb-5'>Featured Recipe</h2>
            <Row>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'300px' }} variant="top" src="Lahmacun.jpg" />
                    <Card.Body>
                        <Card.Title>Lamhacun</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'300px' }} variant="top" src="tavuk-sis.jpg" />
                    <Card.Body>
                        <Card.Title>Tavuk Sis</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'300px' }} variant="top" src="baklava.jpg" />
                    <Card.Body>
                        <Card.Title>Baklava</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FeaturedRecipe;