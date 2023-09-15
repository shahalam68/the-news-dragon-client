import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGofore,FaFacebook,FaTwitter,FaInstagramSquare } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2 ' variant="outline-primary"><FaGofore /> Login With Google</Button>
            <Button className='mb-4' variant="outline-secondary"><FaGithub /> Login With gitHub</Button>
            <div >
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagramSquare/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>

            </div>
        </div>
    );
};

export default RightNav;