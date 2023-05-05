import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./FeaturedRecipe.css";

const FeaturedRecipe = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-center mb-3'>Featured Recipe</h2>
            <p className='w-75 text-center m-auto mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae obcaecati earum expedita totam fugiat autem itaque quibusdam veritatis amet odit ullam laborum non iusto dolores dolorem.</p>
            <Row>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'300px' }} variant="top" src="Lahmacun.jpg" />
                    <Card.Body>
                        <Card.Title className='title'>Lamhacun</Card.Title>
                        <Card.Text className="recipe-info">
                        Lahmacun is a traditional dish from the Middle East and Mediterranean regions. It consists of a thin and crispy dough topped with a mixture of ground meat (usually lamb or beef), tomatoes, onions, parsley, and a variety of spices such as paprika, cumin, and cinnamon.
                        </Card.Text>
                        <div className="rating mb-2">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9734;</span>
                        </div>

                        <Button className='read-more'>Read More</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'300px' }} variant="top" src="tavuk-sis.jpg" />
                    <Card.Body>
                        <Card.Title className='title'>Tavuk Sis</Card.Title>
                        <Card.Text>
                        Tavuk şiş is a popular Turkish kebab dish made with marinated chicken pieces skewered and grilled over a charcoal fire. The chicken is usually marinated in a mixture of olive oil, lemon juice, garlic, and a variety of spices such as paprika, cumin, and oregano.
                        </Card.Text>
                        <div className="rating mb-2">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9734;</span>
                        </div>
                        <Button className='read-more'>Read More</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'300px' }} variant="top" src="baklava.jpg" />
                    <Card.Body>
                        <Card.Title className='title'>Baklava</Card.Title>
                        <Card.Text>
                        Baklava is a sweet dessert that is popular in Middle Eastern, Mediterranean, and Balkan cuisine. It is made of layers of phyllo pastry that are filled with chopped nuts, such as walnuts or pistachios, and sweetened with a syrup made of sugar, honey, and lemon juice.
                        </Card.Text>
                        <div className="rating mb-2">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9734;</span>
                        </div>
                    <Button className='read-more'>Read More</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FeaturedRecipe;