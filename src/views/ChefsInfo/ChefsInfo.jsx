import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ChefsInfo = () => {
    const [chefsData, setChefsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs-data')
        .then(res => res.json())
        .then(data => setChefsData(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
                {   chefsData.map(singleChefData => <div className='container'
                    key = {singleChefData.id}
                >
                    <Col xs={12} md={4}>
                        <Card>
                         <Card.Img variant="top" src={singleChefData.chefPictureUrl} />
                            <Card.Body>
                                <Card.Title>{singleChefData.chefName}</Card.Title>
                                <Card.Text>
                                Total Recipes: {singleChefData.numRecipes}
                                </Card.Text>
                                <Card.Text>
                                Experience: {singleChefData.yearsOfExperience}
                                </Card.Text>
                                <Card.Text>
                                Total Likes: {singleChefData.numLikes}
                                </Card.Text>
                                <Button variant="primary">View Recipes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    </div>
                    
                )}
        </div>
    );
};

export default ChefsInfo;