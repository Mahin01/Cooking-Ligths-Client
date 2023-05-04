import React from 'react';
import "./Banner.css";
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import bannerImage from "./../../../public/banner.jpg"
const Banner = () => {
    return (
        <Container className='banner'>
            <Row>
                <Col xs={12} md={6}>
                    <h2 className='banner-heading'>Get the authentic taste of Turkish cuisine</h2>
                    <p className='banner-info-text'>Here You will find best of turkish dishes created by skilled Turkish chefs who use fresh, locally-sourced ingredients and traditional cooking techniques to bring out the rich flavors of the Mediterranean, Middle East, and Central Asia.</p>
                    <Button className='banner-button'>Show More</Button>
                </Col>
                <Col xs={12} md={6}>
                    <Figure>
                        <Figure.Image className='rounded' src={bannerImage} />
                    </Figure>                 
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;