import React from 'react';
import classes from './DashboardHeader.module.css';

const DashboardHeader = (props) => {
    console.log(props);
    return (
        <div className={classes.Header} style={{marginBottom: props.marginBottom}}>
            <h6 style={{fontSize: props.fontSize}}> {props.title} 
            </h6>
            {props.children}
        </div>
    )
}

export default DashboardHeader
