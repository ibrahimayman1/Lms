import React from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../../shared/Spinner/Spinner';
import classes from '../../Assignments/AssignmentReview/AssignmentReview.module.css';
import Button from '../../../../shared/Button/Button';

const QuizReview = (props) => {
    console.log(props);

    let targetQuiz = null;
    let body = null;
    
    const style = {
        padding: '8px'
    };


    if (props.quizzesList) {
        targetQuiz = props.quizzesList.filter((e) => e.id == props.match.params.id);
        console.log(targetQuiz);
        body = (
            <div className={classes.AssignmentReview}>
                <div className={classes.Header + " shadow rounded"}> Quiz Review </div>
                <div className={classes.Body + " shadow rounded"}>
                    <div style={style}> Name: {targetQuiz[0].name} </div>
                    <div style={style}> points: {targetQuiz[0].points} </div>
                    <div style={style}> Start Date: {targetQuiz[0].startDate} </div>
                    <div style={style}> End Date: {targetQuiz[0].duration} </div>
                    <div className={"rounded"}style={{border: "1px solid #ccc", padding: "7px"}}>
                        {targetQuiz[0].instructions ? "Instructions:" : null}
                        {targetQuiz[0].instructions ? <div style={style} dangerouslySetInnerHTML={{ __html: targetQuiz[0].instructions }}></div> : null}
                    </div>

                </div>
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
                onClick={() => props.deleteQuizHandler(props.match.params.id)}/>
        </div>
    )
}

export default withRouter(QuizReview);
