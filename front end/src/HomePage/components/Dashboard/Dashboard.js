import React from 'react'
import classes from './Dashboard.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import dashBoardPic from '../../../images/dashboard.png';

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,186.7C480,149,600,107,720,112C840,117,960,171,1080,197.3C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg> */}
            <Container>
                <Row className="justify-content-around align-items-center">
                    <Col xs={6}>
                        <h2 className={classes.DashboardHeader}> professional dashboard With a user-friendly design </h2>
                    </Col>
                    <Col xs={6}>
                        <div className={classes.Box}>
                            <img 
                                className="img-fluid"
                                src={dashBoardPic} 
                                alt="Dashboard Image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard
