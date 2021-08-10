import React from 'react';
import List from '../../../../shared/List/List';

const AssignmentsList = (props) => {

    return (
        <List 
            url={props.match.url } 
            list={props.assignmentsList} 
            loading={props.loading} 
            accordionHeader="Course Assignments"/>
    )
}

export default AssignmentsList
