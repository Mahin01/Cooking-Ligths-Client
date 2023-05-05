import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsInfo = ({ singleChefData }) => {
  const { id, chefPictureUrl, chefName, numRecipes, numLikes, yearsOfExperience } = singleChefData;

  return (
    <Col xs={12} md={4} className='mb-3'>
      <Card>
        <Card.Img variant="top" src={chefPictureUrl} />
        <Card.Body>
          <Card.Title>{chefName}</Card.Title>
          <Card.Text>Total Recipes: {numRecipes}</Card.Text>
          <Card.Text>Experience: {yearsOfExperience}</Card.Text>
          <Card.Text>Total Likes: {numLikes}</Card.Text>
          <Link to={`/chef-recipe/${id}`} className='btn btn-primary'>
            View Recipes
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefsInfo;
