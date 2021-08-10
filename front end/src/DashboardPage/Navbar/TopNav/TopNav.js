import React from 'react';
import classes from './TopNav.module.css';
import logo from '../../../images/logo.png';

const TopNav = () => {
    return (
        <div className={classes.TopNav}>
            <div className={classes.picContainer} >
                <img 
                    src={logo}
                    title="FCIFU"
                    alt="fcifu logo" />
            </div>
        </div>
    )
};

export default TopNav;
