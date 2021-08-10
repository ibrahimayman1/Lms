import React, { useState } from 'react';
import classes from './WhyFcifu.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import quizzesPic from '../../../images/quizzes.png';
import assignmentsPic from '../../../images/assignments.png';
import courseCreationPic from '../../../images/course-creation.png';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

const WhyFcifu = () => {
    // const [state, changeState] = useState({
    //     discription: "tests and tasks of different levels of difficulty and a variety of question types will make the learning more interesting and memorable",
    //     header: "Advanced Quizzes",
    //     pic: quizzesPic,
    // });

    const [makeFade, changeFade] = useState({
        assignmentFade: false,
        quizzesFade: true,
        courseFade: false,
        pic: quizzesPic
    });

    const changeStyle = (nameOfStyle) => {
        switch (nameOfStyle) {
            case "Quizzes":
                changeFade({
                    assignmentFade: false,
                    quizzesFade: true,
                    courseFade: false,
                    pic: quizzesPic
                })
                break;
            case "Assignments":
                changeFade({
                    assignmentFade: true,
                    quizzesFade: false,
                    courseFade: false,
                    pic: assignmentsPic
                })
                break;
            case "Course-Creation":
                changeFade({
                    assignmentFade: false,
                    quizzesFade: false,
                    courseFade: true,
                    pic: courseCreationPic
                })
                break;
        }
    }

    const list = ["Quizzes", "Assignments", "Course-Creation"];

    return (
        <div className={classes.WhyFcifu}>
            <Container>
                <Row className="justify-content-around">
                    <Col>
                        <h2> What Is Special About <span> FCIFCU ? </span></h2>
                    </Col>
                    <Col>
                        <div className={classes.NavSection + " shadow-lg rounded"}>
                            <ul>
                                {list.map((e) => {
                                    return <li> <a onClick={() => changeStyle(e)}> {e} </a> </li>
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className=" mt-5">
                    <Col xs={5}>
                        <img className="img-fluid" src={makeFade.pic} />
                    </Col>
                    <Col className="d-flex align-items-center" xs={7}>
                        <div className={makeFade.quizzesFade ? "visible " + classes.Description : "hidden"}>
                            <h2> Advanced Quizzes </h2>
                            <p> tests and tasks of different levels of difficulty and a variety of question types will make the learning more interesting and memorable </p>
                        </div>
                        <div className={makeFade.assignmentFade ? "visible " + classes.Description : "hidden"}>
                            <h2> Assignments </h2>
                            <p> Quickly create, manage and grade coursework while motivating students to learn more effectively using the interesting task system</p>
                        </div>
                        <div className={makeFade.courseFade ? "visible " + classes.Description : "hidden"}>
                            <h2> Course Creation </h2>
                            <p> comprehensive frontend course builder with user-friendly interface and easy navigation will help you to design original courses </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyFcifu
