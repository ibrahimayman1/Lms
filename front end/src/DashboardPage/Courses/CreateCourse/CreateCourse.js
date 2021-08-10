import React from 'react'
import classes from './CreateCourse.module.css';
import { Modal } from 'react-bootstrap';
import Button from '../../../shared/Button/Button';

const CreateCourse = (props) => {

    return (
        <div className={classes.CreateCourse}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Create A New Course</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input
                        type="text"
                        placeholder="Course Name"
                        value={props.courseName}
                        onChange={(e) => props.changeCourseName(e.target.value)} />
                    <input
                        type="text"
                        placeholder="Description"
                        value={props.description}
                        onChange={(e) => props.changeCourseDescription(e.target.value)} />
                    <input
                        type="text"
                        placeholder="Code"
                        value={props.courseCode}
                        onChange={(e) => props.changeCourseCode(e.target.value)} />
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        title="Cancel"
                        width="165px"
                        height="36px"
                        rounded={true}
                        background="#6b6b6b"
                        onClick={() => props.closeModelHandler()} />
                    <Button
                        title="Create Course"
                        width="165px"
                        height="36px"
                        rounded={true}
                        onClick={() => props.createCourseHandler()} />
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CreateCourse
