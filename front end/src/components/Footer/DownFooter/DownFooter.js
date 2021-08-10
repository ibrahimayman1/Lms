import React from 'react';
import classes from './DownFooter.module.css';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const DownFooter = (props) => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.DownFooter}>
                <Container className="mb-5">
                    <hr />
                    <Row className={classes.Row}>
                        <span className={classes.MadeBy}> &copy; 2020 FCIFU. All rights reserved. </span>
                        <div className={classes.Social}>
                            <span> FOLLOW US </span>
                            <FontAwesomeIcon
                                className={classes.Insta}
                                icon={faInstagram} />
                            <FontAwesomeIcon
                                className={classes.Twitter}
                                icon={faTwitter} />
                            <FontAwesomeIcon
                                className={classes.Fb}
                                icon={faFacebookF} />
                            <FontAwesomeIcon
                                className={classes.YouTube}
                                icon={faYoutube} />
                        </div>
                    </Row>
                </Container>
            </div>
        </footer>

    )


}


export default DownFooter;