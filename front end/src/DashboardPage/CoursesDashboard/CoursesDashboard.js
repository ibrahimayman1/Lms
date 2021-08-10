import React from 'react';
import classes from './CoursesDashboard.module.css'
import { Route } from 'react-router-dom';
import DashboardHeader from '../../shared/DashboardHeader/DashboardHeader';
import Navigation from './Navigation/Navigation';
import Assignments from './Assignments/Assignments';
import People from './People/People';
import Quizzes from './Quizzes/Quizzes';

const CoursesDashboard = (props) => {
    return (
        <div className={classes.CoursesDashboard + " shadow-sm"}>
            <DashboardHeader
                fontSize='29px'
                title="Courses Dashboard"
                marginBottom="20px" >
                <Navigation {...props}/>
            </DashboardHeader>
            <Route path={props.match.url + '/assignments'} render={() => <Assignments courseId={props.match.params.id}/>} />
            <Route path={props.match.url + '/members'} render={() => <People courseId={props.match.params.id}/>} />
            <Route path={props.match.url + '/quizzes'} render={() => <Quizzes courseId={props.match.params.id}/>} />
        </div>
    )
}

export default CoursesDashboard;
