import React from 'react';
import './Spinner.css';

let style = null;

const spinner = (props) => {
    props.big ? style = {
        width: '100%',
        height: '100%',
        zIndex: '1000000000000000000000',
        left: '0px',
        top: '0px'
    } : style = {
        width: '50%',
        minHeight: '56%',
        zIndex: '1000',
        left: '25%',
        top: '25%',
        borderRadius: '3%'
    }
    
    return (
        <div className="main-spinner" style={style}>
            <div className="spinner">
                Loading...
            <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    )
};

export default spinner;