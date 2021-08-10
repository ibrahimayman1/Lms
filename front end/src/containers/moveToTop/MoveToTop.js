import React, { useState, useEffect } from 'react';
import classes from './MoveToTop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const MoveToTop = () => {
    const [state, changeState] = useState({});

    useEffect(() => {
        let functionOfEvent = () => {
            window.pageYOffset > 15 ? changeState({
                visibility: 'visible',
                opacity: 1
            }) : changeState({
                visibility: 'hidden',
                opacity: 0
            })
        }

        window.addEventListener('scroll', functionOfEvent)

        return () => {
            window.removeEventListener('scroll', functionOfEvent)
        }

    }, [])

    const moveTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div
            className={classes.MoveToTop}
            style={{
                opacity: state.opacity,
                visibility: state.visibility
            }}>
            <span className={classes.Arrow} onClick={moveTop}>
                <FontAwesomeIcon icon={faAngleUp} />
            </span>
        </div>
    )
}

export default MoveToTop
