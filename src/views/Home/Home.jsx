import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefsInfo from '../ChefsInfo/ChefsInfo';
import { Container, Row, Spinner } from 'react-bootstrap';
import FeaturedRecipe from '../Featured-recipe/FeaturedRecipe';
import Ingredients from '../Ingredients/Ingredients';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [chefsData, setChefsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefsData')
        .then(res => res.json())
        .then(data => {setChefsData(data);
        setLoading(false);
        })
        
        .catch(error => console.error(error))
    }, []);
    if(loading){
        return <div className="d-flex align-items-center justify-content-center">
        <div className="my-5 spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>;
    }
    return (
        <div>
            <Banner></Banner>
            <FeaturedRecipe></FeaturedRecipe>
            <Ingredients></Ingredients>
            <Container className='my-5'>
                <h2 className='text-center mb-5'>Meet Our Chefs</h2>
             <Row>
             {  chefsData.map(singleChefData => <ChefsInfo
             key = {singleChefData.id}
             singleChefData = {singleChefData}
            >
            </ChefsInfo>
            )}
             </Row>
            </Container>
        </div>
    );
};

export default Home;