import React, { useEffect, useState } from 'react';
import classes from './People.module.css';
import axios from '../../../axios-base';
import { connect } from 'react-redux';
import Spinner from '../../../shared/Spinner/Spinner';

const People = (props) => {

    const [peopleList, changePeopleList] = useState(null);
    const [loading, changeLoading] = useState(true);

    useEffect(() => {
        const config = { headers: { "Authorization": "Bearer " + props.token } };

        axios.get(`/api/Courses/getcoursemembers/${props.courseId}`, config)
            .then(res => {
                console.log(res);
                changePeopleList(res.data)
                changeLoading(false);

            })
            .catch(err => err.data)
    }, [])

    let table = null;

    if (peopleList !== null && peopleList.length > 0) {
        table = peopleList.map((e) => {
            console.log(e.profilePicture)
            return (
                <div className={classes.People + " rounded shadow-sm"}>
                    <div className={classes.imageContainer}>
                        <img
                            src={e.profilePicture}
                            title="Profile Picture"
                            alt="Profile Picture"
                            className="img-fluid" />
                    </div>
                    <div className={classes.Name}> {e.fName + " " + e.lName} </div>
                </div>

            )
        })
    } else if (peopleList !== null && peopleList.length == 0) {
        table = <div style={{textAlign: 'center'}}> No Members In This Course </div>
    } else if (peopleList == null) {
        table = <Spinner />
    }

    return table
};

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
};

export default connect(mapStateToProps)(People);
