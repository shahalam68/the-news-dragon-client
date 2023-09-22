import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms And conditiosn</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolore labore illum qui velit, voluptatum quam optio rem placeat nesciunt recusandae molestiae magnam error iste unde fuga doloribus ut sit.</p>
            <p><Link to={'/register'}>Go to register</Link></p>
        </Container>
    );
};

export default Terms;