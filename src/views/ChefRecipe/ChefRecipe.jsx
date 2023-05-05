import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import LazyLoad from 'react-lazy-load';
 
const ChefRecipe = () => {
  const [loading, setLoading] = useState(true);
  const [individualChefRecipe, setIndividualChefRecipe] = useState([]);
  const { id } = useParams();
  const individualChefData = useLoaderData();
  const { chefPictureUrl, chefName, numRecipes, numLikes, yearsOfExperience, shortDescription } = individualChefData;

  useEffect(() => {
    fetch(`http://localhost:5000/chefs-recipe/${id}`)
      .then(res => res.json())
      .then(data => {setIndividualChefRecipe(data);
        setLoading(false);
      })
      .catch(error => console.error(error))
  }, [id]);

  if(loading){
    return <div className="d-flex align-items-center justify-content-center">
    <div className="my-5 spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>;
}

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
          <LazyLoad height={762} offset={300}>
            <Figure.Image className="rounded" src={chefPictureUrl} />
          </LazyLoad>
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
