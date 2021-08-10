import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../shared/Button/Button';
import { connect } from 'react-redux';
import Dashboard from '../../../HomePage/components/Dashboard/Dashboard';
import { logout } from '../../../store/actions/index';

const activeStyle = {
    color: '#28a7ea'
};

const NavigationItems = (props) => {
    
    let titleButton = !props.fName ? "SignUp" : "Logout";
    let hrefButton =  !props.fName ? "/authentication/signup" : "/";

    return (
        <ul style={{ color: props.color }}>
            <li>
                <NavLink to="/" exact > Home </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    activeStyle={activeStyle}> About </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    activeStyle={activeStyle}> Contact </NavLink>
            </li>

            {!props.fName ? 
            (<li>
                <NavLink
                    to="/authentication/login"
                    activeStyle={activeStyle}> LogIn </NavLink>
            </li>) : null}

            {props.fName ? 
            <Button
                title="Dashboard"
                width="100px"
                height="41px"
                href="/dashboard" /> : null
            }

            <Button
                title={titleButton}
                width="100px"
                height="41px"
                href={hrefButton}
                onClick={props.logout} />
        </ul>

    )
}



const mapStateToProps = (state) => {
    return {
        fName: state.fName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);