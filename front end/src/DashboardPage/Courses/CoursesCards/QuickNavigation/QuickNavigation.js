import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import classes from './QuickNavigation.module.css';
import { NavLink } from 'react-router-dom';

const QuickNavigation = (props) => {
    const [showNav, changeShowNav] = useState('none');


    const changeShowNavHandler = () => {
        showNav == 'none' ? changeShowNav('block') : changeShowNav('none');
    };

    let style = {
        display: showNav
    }

    const deleteCourseHandler = () => {
        console.log('fu')
        props.deleteCourseHandler(props.courseId);
    }

    console.log(props)

    return (
        <div className={classes.QuickNavigation} >
            <div className={classes.Navigation} onClick={changeShowNavHandler}>
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            <ul
                style={style}
                className={"shadow-lg rounded"}>
                <li onClick={deleteCourseHandler}> Delete Course </li>
                <NavLink to={props.url}> <li> Course Dashboard  </li> </NavLink>
            </ul>
        </div>
    )
}

export default QuickNavigation;
