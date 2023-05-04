import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefsInfo from '../ChefsInfo/ChefsInfo';
import { Container, Row } from 'react-bootstrap';
import FeaturedRecipe from '../Featured-recipe/FeaturedRecipe';

const Home = () => {
    const [chefsData, setChefsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs-data')
        .then(res => res.json())
        .then(data => setChefsData(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Container className='my-5'>
                <h2 className='text-center mb-5'>Meet Our Chefs</h2>
             <Row>
             {   chefsData.map(singleChefData => <ChefsInfo    className='container'
             key = {singleChefData.id}
             singleChefData = {singleChefData}
            >
            </ChefsInfo>
            )}
             </Row>
            </Container>
            <FeaturedRecipe></FeaturedRecipe>
        </div>
    );
};

export default Home;