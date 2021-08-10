import React from 'react';
import Account from './Account/Account';
import Courses from './Courses/Courses';
import classes from './DashboardPage.module.css';
import Navbar from './Navbar/Navbar';
import {Route} from 'react-router-dom';
import CoursesDashboard from './CoursesDashboard/CoursesDashboard';

const DashboardPage = (props) => {
    console.log(props);
    
    return (
        <div className={classes.Dashboard}>
            <Navbar />
            <Route path={props.match.url + "/account"} component={Account}/>
            <Route path={props.match.url + "/courses"} exact component={Courses}/>
            <Route path={props.match.url + "/courses/:id"} component={CoursesDashboard}/>
        </div>
    )
};

export default DashboardPage;
