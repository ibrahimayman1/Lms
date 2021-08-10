import React, { useEffect } from 'react';
import classes from '../../Assignments/CreateAssignment/CreateAssignment.module.css';
import ReactQuill from 'react-quill';
import '../../../../../node_modules/react-quill/dist/quill.snow.css';
import Button from '../../../../shared/Button/Button';
import Spinner from '../../../../shared/Spinner/Spinner';
import { withRouter } from 'react-router';

const CreateAssignment = (props) => {

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'image'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']
        ],
    };

    const formats = [
        'header', 'font',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'code-block', 'size', 'background', 'color', 'align', 'image'
    ];



    useEffect(() => {
        if (props.mode && props.quizzesList) {
            console.log(props.quizDetails)
            props.changeCreateLoadingStatus(true);
            let targetQuiz = props.quizzesList.filter((e) => e.id == props.match.params.id);
            console.log(targetQuiz)
            props.changeQuizDetails({
                name: targetQuiz[0].name,
                points: targetQuiz[0].points,
                duration: targetQuiz[0].duration,
                startDate: targetQuiz[0].startDate,
                instructions: targetQuiz[0].instructions
            })
            props.onEditorStateChange(targetQuiz[0].instructions)
            props.changeCreateLoadingStatus(false);
        }
    }, [props.quizzesList])

    return (
        <div>
            {props.createLoading ? <Spinner /> : null}

            <label style={{display: "inline"}}>  Name </label>
            <input
                className={classes.NameAssignmentInput + " rounded"}
                value={props.quizDetails.name}
                type="text"
                placeholder="Quiz Name"
                onChange={(e) => props.onInputValueChange(e, "name")} />

            <label style={{display: "inline"}}> Points </label>
            <input
                className={classes.PointsOfAssignmentInput + " rounded"}
                style={{ display: "inline", width: '100%', marginRight: '10px' }}
                value={props.quizDetails.points}
                type="text"
                placeholder="Points Of Quiz"
                onChange={(e) => props.onInputValueChange(e, "points")} />

            <label style={{display: "inline"}}> Start Date </label>
            <input
                className={classes.PointsOfAssignmentInput + " rounded"}
                style={{ display: "inline", width: '100%' }}
                value={props.quizDetails.startDate}
                type="datetime-local"
                onChange={(e) => props.onInputValueChange(e, "startDate")} />

            <label style={{display: "block"}}>  End Date </label>
            <input
                className={classes.PointsOfAssignmentInput + " rounded"}
                style={{ display: "inline", width: '100%' }}
                value={props.quizDetails.duration}
                type="datetime-local"
                placeholder="Quiz Time"
                onChange={(e) => props.onInputValueChange(e, "duration")} />

            <span style={{ color: "#757575", display: 'block' }} >  Quiz Instructions : </span>
            <ReactQuill value={props.editorState}
                onChange={props.onEditorStateChange}
                modules={modules}
                formats={formats} />

            {props.mode !== 1 ? <Button
                title="Save And Publish"
                width="100%"
                height="36px"
                margin="12px auto"
                rounded={true}
                onClick={props.uploadQuizHandler} /> : null}

            {props.mode == 1 ? <Button
                title="Update And Publish"
                width="100%"
                height="36px"
                margin="12px auto"
                rounded={true}
                onClick={() => props.updateQuizHandler(props.match.params.id)} /> : null}

        </div>
    )
}

export default withRouter(CreateAssignment);
