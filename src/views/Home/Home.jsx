import React from 'react';
import Banner from '../Banner/Banner';
import ChefsInfo from '../ChefsInfo/ChefsInfo';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container className='my-5'>
                <h2 className='text-center mb-5'>Meet Our Chefs</h2>
             <Row>
                <ChefsInfo></ChefsInfo>
             </Row>
            </Container>
        </div>
    );
};

export default Home;