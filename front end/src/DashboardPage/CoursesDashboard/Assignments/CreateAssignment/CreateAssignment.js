import React, { useEffect } from 'react';
import classes from './CreateAssignment.module.css';
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

    console.log("hello");
    console.log(props);

    useEffect(() => {
        if (props.mode && props.assignmentsList) {
            props.changeCreateLoadingStatus(true);
            console.log("heloo");
            console.log(props.assignmentsList)
            console.log(props);
            let targetAssignment = props.assignmentsList.filter((e) => e.id == props.match.params.id);
            console.log("weza");
            console.log(targetAssignment)
            props.changeAssignmentDetails({
                name: targetAssignment[0].name,
                points: targetAssignment[0].points
            })
            props.onEditorStateChange(targetAssignment[0].body)
            props.changeCreateLoadingStatus(false);
        }
    }, [props.assignmentsList])

    return (
        <div>
            {props.createLoading ? <Spinner /> : null}
            <input
                className={classes.NameAssignmentInput + " rounded"}
                value={props.assignmentDetails.name}
                type="text"
                placeholder="Assignment Name"
                onChange={(e) => props.onInputValueChange(e, "name")} />

            <input
                className={classes.PointsOfAssignmentInput + " rounded"}
                value={props.assignmentDetails.points}
                type="text"
                placeholder="Points Of Assignment"
                onChange={(e) => props.onInputValueChange(e, "points")} />

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
                onClick={props.uploadAssignmentHandler} /> : null}

            {props.mode == 1 ? <Button
                title="Update And Publish"
                width="100%"
                height="36px"
                margin="12px auto"
                rounded={true}
                onClick={() => props.updateAssignmentHandler(props.match.params.id)} /> : null}

        </div>
    )
}

export default withRouter(CreateAssignment);
