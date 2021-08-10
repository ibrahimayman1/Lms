import React from 'react';
import Button from '../../../shared/Button/Button';

const Navigation = (props) => {

    return (
        <div>
            <Button
                title="Members"
                width="135px"
                height="36px"
                rounded={true}
                href={props.match.url + "/members"} />
            <Button
                title="Assignments"
                width="135px"
                height="36px"
                margin="0px 0px 0px 10px"
                rounded={true}
                href={props.match.url + "/assignments"} />
            <Button
                title="Quizzes"
                width="135px"
                height="36px"
                margin="0px 0px 0px 10px"
                rounded={true}
                href={props.match.url + "/quizzes"} />
            <Button
                title="Grades"
                width="135px"
                height="36px"
                margin="0px 0px 0px 10px"
                rounded={true} />
        </div>
    )
}

export default Navigation
