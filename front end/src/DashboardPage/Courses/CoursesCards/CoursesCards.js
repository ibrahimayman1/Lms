import React from 'react';
import classes from './CoursesCards.module.css';
import { Card } from 'react-bootstrap';
import defaultPicCard from '../../../images/course-creation.png';
import { Link } from 'react-router-dom';
import QuickNavigation from './QuickNavigation/QuickNavigation';

const CoursesCards = (props) => {

    console.log(props);
    let coursesCards = null;

    if (props.courses.length > 0 ) {
        coursesCards = props.courses.map(e => {
            return (
                <Card
                    className={classes.CardCourse + " shadow-sm"}
                    style={{ width: '16rem' }}
                    key={e.id}>
                        
                    <QuickNavigation 
                        url={`${props.match.url}/${e.id}`} 
                        deleteCourseHandler={props.deleteCourseHandler} 
                        changeNewCourseCreatedHandler={props.changeNewCourseCreatedHandler}
                        courseId={e.id}/>
    
                    <Link to={`${props.match.url}/${e.id}`}>
                        <Card.Img variant="top" src={defaultPicCard} />
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>
                                {e.description}
                        </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            )
        })

    }

    return (
        <React.Fragment>
            {coursesCards}
        </React.Fragment>
    )
}

export default CoursesCards
