import classes from './SignUp.module.css';
import axios from '../../../axios-base';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import validation from '../../validationFunction/validationFunction';
import Spinner from '../../../shared/Spinner/Spinner';
import ConfirmEmailMessage from './ConfirmEmailMesage/ConfirmEmailMessage';
import {authInformations} from '../../../store/actions/index';
import {connect} from 'react-redux';

const SignUp = (props) => {
    let [errorMessage, changeErrorMessage] = useState({
        code: '',
        fName: '',
        lName: '',
        // phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    let [state, changeState] = useState({
        code: '',
        fName: '',
        lName: '',
        // phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    let [validationStatus, changeValidationStatus] = useState({
        code: false,
        fName: false,
        lName: false,
        // phone: false,
        email: false,
        password: false,
        confirmPassword: false
    });

    let [loadingSpinner, changeLoadingSpinner] = useState(false);

    let [loginErrorMessage, changeLoginErrorMessage] = useState(null);

    const changeInputValueHandler = (e, nameOfField) => {

        changeState({
            ...state,
            [nameOfField]: e.target.value
        });

        if (nameOfField == 'password') {
            changeErrorMessage({
                ...errorMessage,
                confirmPassword: validation(state.confirmPassword, 'confirmPassword', e.target.value).errorMessage,
                [nameOfField]: validation(e.target.value, nameOfField, state.password).errorMessage
            });
            changeValidationStatus({
                ...validationStatus,
                [nameOfField]: validation(e.target.value, nameOfField, state.password).validation,
                confirmPassword: validation(state.confirmPassword, 'confirmPassword', e.target.value).validation,
            });
        } else if (nameOfField == 'code'){
            changeErrorMessage({
                ...errorMessage
            });
        }
        
        else {
            changeErrorMessage({
                ...errorMessage,
                [nameOfField]: validation(e.target.value, nameOfField, state.password).errorMessage
            });

            changeValidationStatus({
                ...validationStatus,
                [nameOfField]: validation(e.target.value, nameOfField, state.password).validation
            });
        }
    };

    const registerApi = (userInformation) => {
        axios.post("/api/Account/Register", userInformation)
        .then(response => {
            console.log(response);
            changeLoadingSpinner(false);
            props.history.push({
                pathname: props.match.url + "/ConfirmEmailMessage"
            });
        })
        .catch(err => console.log(err.response.data.modelState));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (props.isLogin) {
            if (validationStatus.email && validationStatus.password) {
                changeLoadingSpinner(true);
                var reqData = `grant_type=password&username=${state.email}&password=${state.password}`;
                axios.post("/token", reqData)
                .then(res => {
                    console.log(res);
                    localStorage.setItem("token", res.data.access_token);
                    localStorage.setItem("userName", res.data.userName);
                    localStorage.setItem("fName",res.data.fName);
                    localStorage.setItem("lName", res.data.lName);
                    localStorage.setItem("userId", res.data.userId);
                    localStorage.setItem("profilePicture", res.data.profilePicture);
                    localStorage.setItem("type", res.data.type);

                    props.saveAuthInformation(res.data.access_token, res.data.userName, res.data.fName, res.data.lName,res.data.profilePicture, res.data.userId, res.data.type);
                    props.history.push('/dashboard');
                    console.log(res);
                })
                .catch(err => {
                    changeLoginErrorMessage(err.response.data.error_description);
                    changeLoadingSpinner(false);
                    console.log(err.response.data);
                });
            }
            
        } else {
            if (validationStatus.fName && validationStatus.lName && validationStatus.password
                && validationStatus.confirmPassword && validationStatus.email) {
                changeLoadingSpinner(true);
                let type = props.type == "student" ? 1 : 0;
                let userInformation = {
                    ...state,
                    type: type
                };

                if (type == 1) {
                    console.log('hahah')
                    axios.get(`/api/Courses/getcoursebycode/${state.code}`)
                    .then( res => {
                        console.log("hahaha2")
                        if (res.data) {
                            console.log(res);
                            changeValidationStatus({
                                ...validationStatus,
                                code: true
                            })
                            registerApi(userInformation);
                        }
                        else {
                            changeErrorMessage({
                                ...errorMessage,
                                code: "course code is invalid"
                            })
                            changeLoadingSpinner(false);
                        }
                    })
                }else {
                    changeValidationStatus({
                        ...validationStatus,
                        code: true
                    })
                    registerApi(userInformation);
                }

            }
            else {
                console.log(props);
                changeErrorMessage({
                    ...errorMessage,
                    fName: validation(state.fName, 'fName').errorMessage,
                    lName: validation(state.lName, 'lName').errorMessage,
                    email: validation(state.email, 'email').errorMessage,
                    password: validation(state.password, 'password').errorMessage,
                    confirmPassword: validation(state.confirmPassword, 'confirmPassword', state.password).errorMessage
                });
            }
        }
    };

    let hideForms = props.isLogin ? {display: 'none'} : {display: 'block'};
    
    return (
        <form onSubmit={onSubmitHandler}>
            {loadingSpinner ? <Spinner /> : null}
            {props.type == "student" ? <input
                type="text"
                placeholder="Enter Course Code"
                value={state.code}
                onChange={(e) => changeInputValueHandler(e, "code")}
            /> : null}
            <span
                className={validationStatus.code ?
                    classes.ApprovedMessage : classes.ErrorMessage}
                style={hideForms}> {errorMessage.code} </span>

            <input
                style={hideForms}
                type="text"
                placeholder="Enter F-Name"
                value={state.fName}
                onChange={(e) => changeInputValueHandler(e, "fName")} />
            <span 
                className={validationStatus.fName ? 
                classes.ApprovedMessage : classes.ErrorMessage}
                style={hideForms}> {errorMessage.fName} </span>
            <input
                style={hideForms}
                type="text"
                placeholder="Enter Your L-Name"
                value={state.lName}
                onChange={(e) => changeInputValueHandler(e, "lName")} />
            <span 
                className={validationStatus.lName ? 
                classes.ApprovedMessage : classes.ErrorMessage}
                style={hideForms}> {errorMessage.lName} </span>
            {/* <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={state.phone}
                    onChange={ (e) => changeInputValueHandler(e, "phone")} /> */}
            <input
                type="email"
                placeholder="Enter Your E-mail"
                value={state.email}
                onChange={(e) => changeInputValueHandler(e, "email")} />
            <span className={validationStatus.email ? classes.ApprovedMessage : classes.ErrorMessage}> {errorMessage.email} </span>
            <input
                type="password"
                placeholder="Enter Your Password"
                value={state.password}
                onChange={(e) => changeInputValueHandler(e, "password")} />
            <span
                className={validationStatus.password ? classes.ApprovedMessage : classes.ErrorMessage}
                style={{ fontSize: '9px' }}> {errorMessage.password} </span>
            <input
                style={hideForms}
                type="password"
                placeholder="Confirm Your Password"
                value={state.confirmPassword}
                onChange={(e) => changeInputValueHandler(e, "confirmPassword")} />
            <span 
                className={validationStatus.confirmPassword ? 
                classes.ApprovedMessage : classes.ErrorMessage}
                style={hideForms}> {errorMessage.confirmPassword}  </span>
            <button type="submit"> Submit </button>
            <span className={classes.ErrorMessage} >
                {loginErrorMessage}
            </span>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveAuthInformation: (token, userName, fName, lName, profilePicture, userId, type) => dispatch(authInformations(token, userName, fName, lName, profilePicture, userId, type)) 
    }
};

export default connect(null,mapDispatchToProps)(withRouter(SignUp));
