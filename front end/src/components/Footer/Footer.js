import React from 'react';
import classes from './Footer.module.css';
import DownFooter from './DownFooter/DownFooter';
import { Container, Row, Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import bla from '../../images/graduation.png';

const Footer = (props) => {    
    return (
        <footer className={classes.Footer}>
            <div className={classes.TopFooter}>
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12}>
                            <div className={classes.FooterList}>
                                <h5> MyBurger </h5>
                                <ul>
                                    <li> <NavLink to="/"> ABOUT US </NavLink> </li>
                                    <li> <NavLink to="/">CONTACT US</NavLink> </li>
                                    <li> <NavLink to="/">OUR BRANCHES</NavLink> </li>
                                    <li> <NavLink to="/">Help</NavLink> </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className={classes.FooterList}>
                                <h5> MyBurger </h5>
                                <ul>
                                    <li> <NavLink to="/"> ABOUT US </NavLink> </li>
                                    <li> <NavLink to="/">CONTACT US</NavLink> </li>
                                    <li> <NavLink to="/">OUR BRANCHES</NavLink> </li>
                                    <li> <NavLink to="/">Help</NavLink> </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className={classes.FooterList}>
                                <h5> MyBurger </h5>
                                <ul>
                                    <li> <NavLink to="/"> ABOUT US </NavLink> </li>
                                    <li> <NavLink to="/">CONTACT US</NavLink> </li>
                                    <li> <NavLink to="/">OUR BRANCHES</NavLink> </li>
                                    <li> <NavLink to="/">Help</NavLink> </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className={classes.ImageContainer}>
                                <img className="img-fluid" src={bla} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <DownFooter />
        </footer>

    )


}


export default Footer;