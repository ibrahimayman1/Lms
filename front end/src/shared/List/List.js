import React from 'react';
import { Accordion, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Spinner from '../SmallSpinner/SmallSpinner';

const List = ({list, url, loading, accordionHeader, message = "No Assignments In This Course"}) => {

    const createStyle = {
        color: '#2c90e2',
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        cursor: 'pointer',
    }

    const spinnerMessage = (
        <Accordion.Collapse eventKey="0" style={{ boxShadow: '0' }}>
            <Spinner margin="30px auto" />
        </Accordion.Collapse>
    )

    let listOfCourse = null;

    if (list !== null) {
        if (list.length > 0) {
            listOfCourse = list.map(e => {
                return (
                    <Link to={`${url}/${e.id}`} key={e.id}>
                        <Accordion.Collapse eventKey="0" style={{ boxShadow: '0' }}>
                            <Card.Body className="card-body-list" style={{ textAlign: 'center', fontFamily: 'Open Sans' }}> {e.name} </Card.Body>
                        </Accordion.Collapse>
                    </Link>
                )
            })
        } else if (list.length == 0 ) {
            listOfCourse = <div style={{ margin: 'auto', padding: '10px' }}> {message} </div>;
        }
    }

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <span style={{ fontWeight: 'bold', fontFamily: 'Open Sans' }}>
                        {accordionHeader}
                    </span>
                    <Link to={url + "/new"}>
                        <span style={createStyle}> +Create </span>
                    </Link>

                </Card.Header>
                {loading ? spinnerMessage : null}
                {listOfCourse}
            </Card>
        </Accordion>
    )
}

export default List
