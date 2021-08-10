import React, { useState, useEffect } from 'react';
import classes from './Courses.module.css';
import Button from '../../shared/Button/Button';
import CreateCourse from './CreateCourse/CreateCourse';
import Spinner from '../../shared/SmallSpinner/SmallSpinner';
import axios from '../../axios-base';
import { connect } from 'react-redux';
import CoursesCards from './CoursesCards/CoursesCards';
import { Route } from 'react-router-dom';
import DashboardHeader from '../../shared/DashboardHeader/DashboardHeader';


const Courses = (props) => {

    const [openModel, changeOpenModelStatus] = useState(false);
    const [noCourseMessage, changeNoCourseMessage] = useState(false);
    const [spinner, changeSpinnerStatus] = useState(true);
    const [courses, changeCourses] = useState(null);
    const [courseName, changeCourseName] = useState("");
    const [courseDescription, changeCourseDescription] = useState("");
    const [courseCode, changeCourseCode] = useState("");
    const [newCourseCreated, changeNewCourseCreated] = useState(false);

    useEffect(() => {
        if (props.userId) {
            console.log("USE EFFECT");
            const config = { headers: { "Authorization": "Bearer " + props.token, 'content-type': 'application/json' } };
            axios.get(`api/Courses/getcourses/${props.userId}`, config)
                .then(res => {
                    changeSpinnerStatus(false);
                    console.log(res.data)
                    if (res.data.length > 0) {
                        changeCourses(res.data);
                        changeNoCourseMessage(false);

                    } else {
                        changeNoCourseMessage(true);
                        changeCourses(null);
                        console.log(res);
                    }
                })
                .catch(err => console.log(err));
        }
    }, [props.userId, newCourseCreated])

    const OpenModelHandler = () => {
        changeOpenModelStatus(true);
    };

    const closeModelHandler = () => {
        changeOpenModelStatus(false);
    };

    const changeNewCourseCreatedHandler = () => {
        changeNewCourseCreated(!newCourseCreated);
    };

    const createCourseHandler = () => {
        const config = { headers: { "Authorization": "Bearer " + props.token, 'content-type': 'application/json' } };
        let courseInformation = {
            name: courseName,
            description: courseDescription,
            code: courseCode
        };

        axios.put(`/api/Courses/add/${props.userId}`, courseInformation , config)
            .then(res => {
                console.log(res);
                closeModelHandler();
                changeNoCourseMessage(false);
                changeNewCourseCreatedHandler();
            })
            .catch(err => console.log(err))
    };

    const deleteCourseHandler = (courseId) => {
        const config = { headers: { "Authorization": "Bearer " + props.token, 'content-type': 'application/json' } };
        axios.delete(`/api/Courses/delete/${courseId}`, config)
            .then(res => {
                changeNewCourseCreated(!newCourseCreated);
                // axios.get(`api/Courses/getcourses/${props.userId}`)
                // .then(res => {
                //     if(res.data.length > 0 ) changeCourses(res.data)
                //     else {
                //         changeCourses(null);
                //         changeNoCourseMessage(true);
                //     }
                // })
                // .catch (err => console.log(err));

            })
            .catch(err => console.log(err))
    };

    let coursesCards = null;

    if (courses) {
        coursesCards = <Route path={props.match.url} exact render={() => <CoursesCards {...props} courses={courses} deleteCourseHandler={deleteCourseHandler} changeNewCourseCreatedHandler={changeNewCourseCreatedHandler} />} />
    }

    return (
        <div className={classes.Courses + " shadow-sm rounded"}>
            <div className={classes.CoursesHeader}>
                <DashboardHeader
                    fontSize='29px'
                    title="Courses">
                    <Button
                        title="Create Course"
                        width="165px"
                        height="36px"
                        rounded={true}
                        onClick={OpenModelHandler} />
                </DashboardHeader>
            </div>
            {spinner ? <Spinner big={false} /> : null}
            <div className={classes.CoursesContainer}>
                {coursesCards}
            </div>
            {noCourseMessage ? <span className={classes.NoCoursesMeesage}> There are no courses yet </span> : null}
            {openModel ?
                <CreateCourse
                    closeModelHandler={closeModelHandler}
                    courseName={courseName}
                    courseDescription={courseDescription}
                    courseCode={courseCode}
                    changeCourseName={changeCourseName}
                    changeCourseDescription={changeCourseDescription}
                    changeCourseCode={changeCourseCode}
                    createCourseHandler={createCourseHandler} /> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.userId,
        token: state.token
    }
};

export default connect(mapStateToProps)(Courses);
