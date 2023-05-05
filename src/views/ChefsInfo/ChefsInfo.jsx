import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ChefsInfo.css";

const ChefsInfo = ({ singleChefData }) => {
  const { id, chefPictureUrl, chefName, numRecipes, numLikes, yearsOfExperience } = singleChefData;

  return (
    <Col xs={12} md={4} className='mb-3'>
      <Card>
        <Card.Img variant="top" src={chefPictureUrl} />
        <Card.Body>
          <Card.Title className='title'>{chefName}</Card.Title>
          <Card.Text className='chef-info'>Total Recipes: {numRecipes}</Card.Text>
          <Card.Text className='chef-info'>Experience: {yearsOfExperience}</Card.Text>
          <Card.Text className='chef-info'>Total Likes: {numLikes}</Card.Text>
          <Link to={`/chef-recipe/${id}`} className='btn btn-primary view-recipe'>
            View Recipes
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefsInfo;
