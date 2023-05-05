import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const RecipeCard = ({recipe}) => {
    console.log(recipe);
    const {recipeName, ingredients, cookingMethod, rating} = recipe;
    return (
        <Col xs={12} md={4}>
            <Card>
                <Card.Header as="h5"> {recipeName} </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text> 
                </Card.Body>
                <Card.Footer className='p-0'>
                        <button className='btn btn-primary w-100'>Add to Favorite</button>
                </Card.Footer>
                </Card>
        </Col>
    );
};

export default RecipeCard;