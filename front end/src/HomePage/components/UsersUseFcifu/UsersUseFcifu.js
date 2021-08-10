import React from 'react';
import classes from './UsersUseFcifu.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons';

const UsersUseFcifu = () => {

    const style = { height: '100%' };

    return (
        <div className={classes.UsersUseFcifu}>
            <Container style={style}>
                <Row 
                    className="justify-content-around align-items-center" 
                    style={style}>
                    <Col>
                        <FontAwesomeIcon icon={faUsers} />
                        <h4> 20,000,000+ </h4>
                        <h5> USERS AND COUNTING </h5>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faSchool} />
                        <h4> 10,000,000+ </h4>
                        <h5> SCHOOLS USING FCIFU </h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UsersUseFcifu
