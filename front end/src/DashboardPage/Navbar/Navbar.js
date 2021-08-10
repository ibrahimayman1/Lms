import React from 'react'
import classes from './Navbar.module.css';
import TopNav from './TopNav/TopNav';
import Profile from './Profile/Profile';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div className={classes.Navbar + " shadow-sm"}>
            <TopNav />
            <div className={classes.Description}> Profile Information </div>
            <Profile />
            <div className={classes.Description}> Main Menu </div>
            <ul>
                <NavLink to="/dashboard/account"> <li className={classes.AccList}> Account </li>  </NavLink>
                <NavLink to="/dashboard/courses"> <li className={classes.CoursesList}> Courses </li> </NavLink>
                <NavLink to="/dashboard"> <li> Dashboard </li> </NavLink>
                <NavLink to="/dashboard"> <li> Grades </li> </NavLink>
            </ul>
        </div>
    )
}

export default Navbar
