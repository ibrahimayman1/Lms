import React, { useState } from 'react';
import classes from './Profile.module.css';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultProfilePic from "../../../images/defaultProfile.jpg";
import axios from '../../../axios-base';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addProfilePicture} from '../../../store/actions/index';

const Profile = (props) => {

    const changeProfilePictureHandler = (e) => {
        props.addProfilePicture(props.userId, e, props.token);
    };

    let styleOfProfilePicture = null;
    let styleOfUploadImgLable = null;
    let styleOfName = null;

    if (props.fromAccount) {

        styleOfProfilePicture = {
            height: "150px",
            width: "150px"
        };

        styleOfUploadImgLable = {
            left: "124px",
            top: "61px"
        }

        styleOfName = {
            fontSize: "18px",
            display: "block",
            marginTop: "10px"
        }
    }
    
    return (
        <div className={classes.Profile}>
            <div
                className={classes.PicCover}
                style={styleOfProfilePicture} >
                <img
                    src={props.profilePicture}
                    title="Profile Picture"
                    alt="Profile Picture"
                    className="img-fluid" />
                <label
                    className={classes.UploadImgLable}
                    style={styleOfUploadImgLable}
                    title="Upload Profile Picture"
                    htmlFor="img">
                    <FontAwesomeIcon icon={faCamera} />
                </label>
            </div>
            <span
                className={classes.Name}
                style={styleOfName}> {`${props.fName} ${props.lName}`} </span>
            <input
                style={{ display: 'none' }}
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={changeProfilePictureHandler} />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.userId,
        token: state.token,
        fName: state.fName,
        lName: state.lName,
        profilePicture: state.profilePicture
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProfilePicture: (userId, e, token) => dispatch(addProfilePicture(userId, e, token))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
