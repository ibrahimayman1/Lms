import React from 'react'
import classes from './BelowNav.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const style = { height: '100%' };

const BelowNav = () => {
    return (
        <div className={classes.BelowNav}>
            <Container style={style}>
                <Row
                    className="justify-content-between align-items-center"
                    style={style}>
                    <Col xs={5}>
                        <h1> FCIFU Learning Management System </h1>
                        <p> PowerSchool is doing everything we can to make it easy for districts
                             to get up and running with distance learning.</p>
                    </Col>
                    <Col xs={7}>
                        <img
                            className={classes.TopImage}
                            alt="Learning Management System Photo"
                            title="FCIFU Learning Management System Photo"
                            src="https://wp.quomodosoft.com/bisy/wp-content/uploads/2021/02/top-image.svg" />
                    </Col>
                </Row>
            </Container>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f5f5f5" fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,69.3C480,53,600,43,720,53.3C840,64,960,96,1080,106.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg> */}
        </div>
    )
}

export default BelowNav
