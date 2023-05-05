import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefRecipe = () => {
  const [individualChefRecipe, setIndividualChefRecipe] = useState([]);
  const { id } = useParams();
  const individualChefData = useLoaderData();
  const { chefPictureUrl, chefName, numRecipes, numLikes, yearsOfExperience, shortDescription } = individualChefData;

  useEffect(() => {
    fetch(`http://localhost:5000/chefs-recipe/${id}`)
      .then(res => res.json())
      .then(data => setIndividualChefRecipe(data))
      .catch(error => console.error(error))
  }, [id]);

  const recipeArray = individualChefRecipe.recipes;

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
      <Row>
          {recipeArray && recipeArray.map(recipe => (
          <RecipeCard key={recipe.chefId} recipe={recipe} />
          ))}
      </Row>
    </Container>
  );
};

export default ChefRecipe;