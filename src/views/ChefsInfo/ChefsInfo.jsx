import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ChefsInfo = ({singleChefData}) => {
    const {id, chefPictureUrl, chefName, numRecipes, numLikes, yearsOfExperience} = singleChefData;
    return (
            <Col xs={12} md={4} className='mb-3'>
                <Card>
                    <Card.Img variant="top" src={chefPictureUrl} />
                    <Card.Body>
                        <Card.Title>{chefName}</Card.Title>
                        <Card.Text>
                        Total Recipes: {numRecipes}
                        </Card.Text>
                        <Card.Text>
                        Experience: {yearsOfExperience}
                        </Card.Text>
                        <Card.Text>
                        Total Likes: {numLikes}
                        </Card.Text>
                        <Button variant="primary">View Recipes</Button>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default ChefsInfo;