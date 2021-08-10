import React, { useState, useEffect } from 'react';
import axios from '../../../axios-base';
import { Route, withRouter, Switch } from 'react-router-dom';
import AssignmentsBody from './AssignmentsList/AssignmentsList';
import CreateAssignment from './CreateAssignment/CreateAssignment';
import { connect } from 'react-redux';
import AssignmentReview from './AssignmentReview/AssignmentReview';
const Assignments = (props) => {

    const [editorState, changeEditor] = useState(null);
    const [assignmentsList, changeAssignmentsList] = useState(null);
    const [listLoading, changeListLoadingStatus] = useState(true);
    const [createLoading, changeCreateLoadingStatus] = useState(false);
    const [assignmentDetails, changeAssignmentDetails] = useState({
        name: '',
        points: ''
    });
    const [updateAssignmentList, changeUpdateAssignmentList] = useState(false);
    const [deleteLoading, changeDeleteLoadingStatus] = useState(false);

    useEffect(() => {
        const config = { headers: { "Authorization": "Bearer " + props.token } };
        axios.get(`/api/assignments/getassignments/${props.courseId}`, config)
            .then(res => {
                console.log(res);
                changeAssignmentsList(res.data);
                changeListLoadingStatus(false);
            })
            .catch(err => err.data)
    }, [updateAssignmentList])

    const onEditorStateChange = (e) => {
        changeEditor(e);
        console.log(e);
    }

    const onInputValueChange = (e, nameOfField) => {
        console.log(e.target.value);
        changeAssignmentDetails({
            ...assignmentDetails,
            [nameOfField]: e.target.value
        });
    }

    const uploadAssignmentHandler = () => {
        changeCreateLoadingStatus(true);
        const config = { headers: { "Authorization": "Bearer " + props.token } };
        let informationState = {
            ...assignmentDetails,
            body: editorState,
            courseId: props.courseId,
            userId: props.userId
        }

        axios.post(`/api/assignments/addassignment/${props.userId}`, informationState, config)
            .then(res => {
                console.log(res);
                changeCreateLoadingStatus(false);
                changeUpdateAssignmentList(!updateAssignmentList);
                props.history.push(`/dashboard/courses/${props.courseId}/assignments`);
            })
            .catch(err => err.data)
    }

    const updateAssignmentHandler = (assignmentId) => {
        changeCreateLoadingStatus(true);
        const config = { headers: { "Authorization": "Bearer " + props.token } };
        let informationState = {
            ...assignmentDetails,
            body: editorState,
        }

        axios.post(`/api/assignments/updateassignment/${assignmentId}`, informationState, config)
            .then(res => {
                console.log(res);
                changeCreateLoadingStatus(false);
                changeUpdateAssignmentList(!updateAssignmentList);
                props.history.push(`/dashboard/courses/${props.courseId}/assignments`);
            })
            .catch(err => err.data)
    }

    const deleteAssignmentHandler = (assignmentId) => {
        changeDeleteLoadingStatus(true);
        axios.delete(`/api/assignments/deleteassignment/${assignmentId}`)
            .then(res => {
                let newAssignmentList = assignmentsList.filter((e) => e.id != assignmentId);
                props.history.push(props.match.url);
                changeAssignmentsList(newAssignmentList);
                changeDeleteLoadingStatus(false);
            }).catch(err => console.log(err));
    }


    return (
        <React.Fragment>
            <Route path={props.match.url}
                exact render={() => <AssignmentsBody 
                                        {...props} 
                                        assignmentsList={assignmentsList} 
                                        loading={listLoading} />} />
            <Route path={props.match.url + "/:id/edit"}
                render={() => <CreateAssignment 
                                    editorState={editorState} 
                                    onEditorStateChange={onEditorStateChange} 
                                    uploadAssignmentHandler={uploadAssignmentHandler} 
                                    assignmentDetails={assignmentDetails} 
                                    onInputValueChange={onInputValueChange} 
                                    createLoading={createLoading}
                                    changeCreateLoadingStatus={changeCreateLoadingStatus}
                                    assignmentsList={assignmentsList}
                                    changeAssignmentDetails={changeAssignmentDetails}
                                    mode={1}
                                    updateAssignmentHandler={updateAssignmentHandler} />} />
            <Switch>
                <Route path={props.match.url + "/new"}
                    exact render={() => <CreateAssignment 
                                            editorState={editorState} 
                                            onEditorStateChange={onEditorStateChange} 
                                            uploadAssignmentHandler={uploadAssignmentHandler} 
                                            assignmentDetails={assignmentDetails} 
                                            onInputValueChange={onInputValueChange} 
                                            createLoading={createLoading} />} />

                <Route path={props.match.url + "/:id"}
                    exact render={() => <AssignmentReview 
                                            assignmentsList={assignmentsList} 
                                            deleteAssignmentHandler={deleteAssignmentHandler} 
                                            deleteLoading={deleteLoading} />} />
            </Switch>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.userId,
        token: state.token
    }
};

export default connect(mapStateToProps)(withRouter(Assignments));
