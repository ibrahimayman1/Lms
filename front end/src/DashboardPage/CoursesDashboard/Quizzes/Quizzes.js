import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import QuizzesBody from './QuizzesList/QuizzesList';
import { withRouter, Switch } from 'react-router';
import axios from '../../../axios-base';
import CreateQuiz from './CreateQuiz/CreateQuiz';
import { connect } from 'react-redux';
import QuizReview from './QuizReview/QuizReview';

const Quizzes = (props) => {

    const [editorState, changeEditor] = useState(null);
    const [quizzesList, changeQuizzesList] = useState(null);
    const [listLoading, changeListLoadingStatus] = useState(true);
    const [createLoading, changeCreateLoadingStatus] = useState(false);
    const [quizDetails, changeQuizDetails] = useState({
        name: '',
        points: '',
        duration: '',
        startDate: '',
        instructions: ''
    });

    const [updateQuizList, changeUpdateQuizList] = useState(false);
    const [deleteLoading, changeDeleteLoadingStatus] = useState(false);


    useEffect(() => {
        const config = { headers: { "Authorization": "Bearer " + props.token } };
        axios.get(`/api/quizzes/getquizzes/${props.courseId}`, config)
            .then(res => {
                console.log(res);
                changeQuizzesList(res.data);
                changeListLoadingStatus(false);
            })
            .catch(err => err.data);
    }, [updateQuizList]);

    const uploadQuizHandler = () => {
        changeCreateLoadingStatus(true);
        const config = { headers: { "Authorization": "Bearer " + props.token } };
        let informationState = {
            ...quizDetails,
            instructions: editorState,
            courseId: props.courseId,
        }

        axios.post(`/api/quizzes/addquiz/${props.userId}`, informationState, config)
            .then(res => {
                console.log(res);
                changeCreateLoadingStatus(false);
                changeUpdateQuizList(!updateQuizList);
                props.history.push(`/dashboard/courses/${props.courseId}/quizzes`);
            })
            .catch(err => err.data)
    }

    const updateQuizHandler = (quizId) => {
        changeCreateLoadingStatus(true);
        const config = { headers: { "Authorization": "Bearer " + props.token } };
        let informationState = {
            ...quizDetails,
            body: editorState,
        }

        axios.post(`/api/quizzes/updatequiz/${quizId}`, informationState, config)
            .then(res => {
                console.log(res);
                changeCreateLoadingStatus(false);
                changeUpdateQuizList(!updateQuizList);
                props.history.push(`/dashboard/courses/${props.courseId}/quizzes`);
            })
            .catch(err => err.data)
    }

    const deleteQuizHandler = (quizId) => {
        changeDeleteLoadingStatus(true);
        axios.delete(`/api/quizzes/delete/${quizId}`)
            .then(res => {
                let newQuizList = quizzesList.filter((e) => e.id != quizId);
                props.history.push(props.match.url);
                changeQuizzesList(newQuizList);
                changeDeleteLoadingStatus(false);
            }).catch(err => console.log(err));
    }

    const onEditorStateChange = (e) => {
        changeEditor(e);
        console.log(e);
    }

    const onInputValueChange = (e, nameOfField) => {
        console.log(e.target.value);
        changeQuizDetails({
            ...quizDetails,
            [nameOfField]: e.target.value
        });
    }

    return (
        <React.Fragment>
            <Route path={props.match.url}
                exact render={() => <QuizzesBody
                    {...props}
                    url={props.match.url}
                    quizzesList={quizzesList}
                    loading={listLoading}
                />} />
            <Route path={props.match.url + "/:id/edit"}
                render={() => <CreateQuiz
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    uploadQuizHandler={uploadQuizHandler}
                    quizDetails={quizDetails}
                    onInputValueChange={onInputValueChange}
                    createLoading={createLoading}
                    changeCreateLoadingStatus={changeCreateLoadingStatus}
                    quizzesList={quizzesList}
                    changeQuizDetails={changeQuizDetails}
                    mode={1}
                    updateQuizHandler={updateQuizHandler} />} />
            <Switch>
                <Route path={props.match.url + "/new"}
                    exact render={() => <CreateQuiz
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
                        uploadQuizHandler={uploadQuizHandler}
                        quizDetails={quizDetails}
                        onInputValueChange={onInputValueChange}
                        createLoading={createLoading} />} />

                <Route path={props.match.url + "/:id"}
                    exact render={() => <QuizReview
                        quizzesList={quizzesList}
                        deleteQuizHandler={deleteQuizHandler}
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

export default connect(mapStateToProps)(withRouter(Quizzes));