import React, {useState,useEffect} from 'react'
import Profile from '../Navbar/Profile/Profile';
import classes from './Account.module.css';
import Button from '../../shared/Button/Button';
import axios from '../../axios-base';
import {connect} from 'react-redux';
import {updateUserInforamtion} from '../../store/actions/index';
import DashboardHeader from '../../shared/DashboardHeader/DashboardHeader';

const Account = (props) => {

    const [informationState, changeInformationState] = useState({
        fName: localStorage.getItem("fName"),
        lName: localStorage.getItem("lName")
    });

    const [hideSuccMessage, changeHideSuccMessageStatus] = useState('hidden');


    useEffect(() => {
        console.log("Account is Updated")
        return () => {
            console.log("Account will mount")
        }
    })

    const changeInputValueHandler = (e, nameOfField) => {
        changeInformationState({
            ...informationState,
            [nameOfField]: e.target.value
        });
    }

    const updateUserProfileHandler = (e) => {
        e.preventDefault();
        changeHideSuccMessageStatus('hidden')
        const config = { headers: { "Authorization": "Bearer " + props.token} };
        axios.put(`/api/usersprofile/changeusername/${props.userId}`, informationState, config )
        .then(res => {
            console.log(res);
            localStorage.setItem("fName", informationState.fName);
            localStorage.setItem("lName", informationState.lName);
            props.updateUserInforamtion();
            changeHideSuccMessageStatus('visible')
        })
        .catch(err => err.data)
    };


    return (
        <div className={classes.Account + " shadow-sm rounded"}>
            <div className={classes.InnerAccount}>
                <DashboardHeader 
                    fontSize='16px'
                    title="Profile Information"
                    marginBottom="25px" />
                <Profile fromAccount={true}/>
                <input
                    className="rounded"
                    // style={hideForms}
                    type="text"
                    placeholder="Enter F-Name"
                    value={informationState.fName}
                    onChange={(e) => changeInputValueHandler(e, "fName")} />
                <input
                    className="rounded"
                    type="text"
                    placeholder="Enter L-Name"
                    value={informationState.lName}
                    onChange={(e) => changeInputValueHandler(e, "lName")} />
                <Button
                    title="Update Profile"
                    width="226px"
                    height="41px"
                    rounded={true}
                    onClick={updateUserProfileHandler} />
                        <div 
                            className={classes.successfulMessage} 
                            style={{visibility: hideSuccMessage}}>
                             The information has changed successfully </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        userId: state.userId,
        token: state.token,
        fName: state.fName,
        lName: state.lName,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserInforamtion: () => dispatch(updateUserInforamtion())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
