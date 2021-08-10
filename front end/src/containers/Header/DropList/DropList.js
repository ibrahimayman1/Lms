import React from 'react';
import classes from './DropList.module.css';
import MenuDrop from './MenuDrop/MenuDrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons';

const dropList = (props) => {
    let myIcon = faAlignJustify;
    if (props.show) myIcon = faTimes;
    return(
        <div className={classes.DropList} >
            <FontAwesomeIcon
                icon={myIcon}
                className={classes.Drop}
                onClick={props.swapBackDrop} />
            <MenuDrop
                show={props.show}
                swapBackDrop={props.swapBackDrop}
                isAuth={props.isAuth} />
        </div>

    )
};

export default dropList;