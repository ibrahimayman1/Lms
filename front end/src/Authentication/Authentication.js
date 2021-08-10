import React from 'react';
import {Route} from 'react-router-dom';
import ConfirmEmailMessage from './SignUpLayout/SignUp/ConfirmEmailMesage/ConfirmEmailMessage';
import SignUpLayout from './SignUpLayout/SignUpLayout';

const Authentication = (props) => {
    return (
        <div 
            style={{margin: '160px auto 55px'}}>
            <Route path={props.match.url + "/SignUp"} exact component={SignUpLayout} />
            <Route path={props.match.url + "/SignUp/ConfirmEmailMessage"} exact component={ConfirmEmailMessage} />
            <Route path={props.match.url + "/Login"} exact render={() => <SignUpLayout isLogin={true}/>} />
        </div>
    )
}

export default Authentication
