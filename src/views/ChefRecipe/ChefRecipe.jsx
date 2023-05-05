import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
  const { id } = useParams();
  const individualChefData = useLoaderData();
  const { chefPictureUrl, chefName, numRecipes, numLikes, yearsOfExperience, shortDescription } = individualChefData;

  useEffect(() => {
    fetch(`http://localhost:5000/chefs-recipe/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }, [id])

  return (
    <Container className="banner">
      <Row>
        <Col xs={12} md={6}>
          <h2 className="banner-heading">{chefName}</h2>
          <p className="banner-info-text">
           {shortDescription}
          </p>
          <p> Total Recipe: {numRecipes} </p>
          <p> Experience: {yearsOfExperience} Years </p>
          <p> Likes: {numLikes} </p>
        </Col>
        <Col xs={12} md={6}>
          <Figure>
            <Figure.Image className="rounded" src={chefPictureUrl} />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};

export default ChefRecipe;
