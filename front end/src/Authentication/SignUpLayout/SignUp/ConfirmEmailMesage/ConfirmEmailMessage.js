import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import classes from './ConfirmEmailMessage.module.css';

const ConfirmEmailMessage = () => {
    return (
        <div className={classes.Message + " shadow-lg"} >
            <div className={classes.Circle}> <FontAwesomeIcon icon={faClipboardCheck} /> </div>
            <h4> Confirm Your Email </h4>
            <p> We have sent you a message in your private mail containing a link, 
                please click on this link to verify your email address</p>
        </div>
    )
}

export default ConfirmEmailMessage
