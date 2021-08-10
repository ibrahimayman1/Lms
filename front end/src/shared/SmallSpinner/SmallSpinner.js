import React from 'react';
import './SmallSpinner.css';

const SmallSpinner = ({margin}) => {
    return (
        <div className="spinnerSmall" style={{margin: margin}}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    )
}

export default SmallSpinner
