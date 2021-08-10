import React, { useState } from 'react';
import classes from './SignUpLayout.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import registerPic from '../../images/register.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import SignUp from './SignUp/SignUp';
import Button from '../../shared/Button/Button';

const SignUpLayout = (props) => {

    let isLogin = props.isLogin ? true : false;

    const [changeToSign, changeState] = useState({
        changeToInstructor: false,
        changeToStudent: false,
        hideButtons: false
    });

    const changeSignUpToInstructor = (e) => {
        e.preventDefault();
        changeState({
            changeToInstructor: true,
            changeToStudent: false,
            hideButtons: true
        })
    }

    const changeSignUpToStudent = (e) => {
        e.preventDefault();
        changeState({
            changeToInstructor: false,
            changeToStudent: true,
            hideButtons: true
        })
    }

    const buttons = (
        <div>
            <Button
                title="Instructor"
                width="180px"
                height="41px"
                display="block"
                onClick={(e) => changeSignUpToInstructor(e)} />
            <Button
                title="Student"
                width="180px"
                height="41px"
                dispaly="block"
                onClick={(e) => changeSignUpToStudent(e)} />
        </div>
    )

    console.log(isLogin);
    return (
        <div className={classes.SignUpLayout}>
            <Container className="d-flex" style={{ height: '100%' }}>
                <div className={classes.SignUpLayoutBox + " shadow-lg"}>
                    {changeToSign.hideButtons  || isLogin ? null : buttons}
                    {changeToSign.changeToInstructor ? <SignUp type="instrcutor" /> : null}
                    {changeToSign.changeToStudent ? <SignUp type="student" /> : null}
                    {isLogin ? <SignUp isLogin={isLogin}/> : null}
                </div>
                <div className={classes.HeaderContainer}>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <h2> SignUp </h2>
                    <p> Already Registered ? SignIn </p>
                </div>
            </Container>
        </div>
    )
}

export default SignUpLayout;
