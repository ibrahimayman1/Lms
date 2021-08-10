import React from 'react';
import List from '../../../../shared/List/List';

const QuizzesList = (props) => {

    return (
        <List 
            url={props.match.url } 
            list={props.quizzesList} 
            loading={props.loading} 
            accordionHeader="Course Quizzes"
            message="No Quizzes In This Course"/>
    )
}

export default QuizzesList
