import React from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../../shared/Spinner/Spinner';
import classes from './AssignmentReview.module.css';
import Button from '../../../../shared/Button/Button';

const AssignmentReview = (props) => {
    console.log(props);

    let targetAssignment = null;
    let body = null;

    if (props.assignmentsList) {
        targetAssignment = props.assignmentsList.filter((e) => e.id == props.match.params.id);
        body = (
            <div className={classes.AssignmentReview}>
                <div className={classes.Header + " shadow rounded"}> Body Review </div>
                <div className={classes.Body + " shadow rounded"} dangerouslySetInnerHTML={{ __html: targetAssignment[0].body }}></div>
            </div>
        )
    }

    return (
        <div style={{textAlign: "center"}}>
            {props.deleteLoading ? <Spinner /> : null}
            {body}
            <Button
                title="Edit"
                width="165px"
                height="36px"
                rounded={true}
                margin="10px 10px 0 0"
                onClick={() => props.history.push(props.match.url + "/edit")}/>
            <Button
                title="Delete"
                width="165px"
                height="36px"
                rounded={true}
                onClick={() => props.deleteAssignmentHandler(props.match.params.id)}/>
        </div>
    )
}

export default withRouter(AssignmentReview);
