import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ChefsInfo = () => {
    useEffect(() => {
        fetch('http://localhost:5000/chefs-data')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default ChefsInfo;