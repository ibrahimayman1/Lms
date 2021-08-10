import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import logo from '../../images/logo.png';
import classes from './Header.module.css';
import './Header.css';
import NavigationItems from './NavigationItems/NavigationItems';
import { Link } from 'react-router-dom';
// import DropList from './DropList/DropList';

const Header = () => {
    
    const [state, changeState] = useState({
        opacity: '1',
        makeAnimation: null
    });

    useEffect(() => {
        let functionOfEvent = () => {
            window.pageYOffset > 1 ? changeState({
                opacity: '0.8',
                backgroundColor: 'rgb(20, 42, 59)',
                makeAnimation: 'makeAnimationForNav',
                color: '#fff'
            }) : changeState({
                opacity: '1',
                makeAnimation: null
            })
        }
        window.addEventListener('scroll', functionOfEvent)

        return () => {
            window.removeEventListener('scroll',functionOfEvent)
        }

    }, [])
    
    const style = { height: '100%'};
  

    return (
        <nav 
            className={state.makeAnimation} 
            style={{opacity: state.opacity, backgroundColor: state.backgroundColor}}>
            <Container style={style}>
                <Row 
                    className="justify-content-around align-items-center" 
                    style={style}>
                    <div className={classes.Brand}>
                        <Link to="/">
                            <img src={logo}
                                className={classes.Logo}
                                alt="FCIFU"
                                title="FCIFU-Learning Management System" />
                        </Link>
                    </div>
                    <NavigationItems color={state.color}/>
                    {/* <DropList
                                swapBackDrop={this.props.swapBackDrop}
                                show={this.props.show}
                                isAuth={this.props.isAuth} /> */}
                </Row>
            </Container>
        </nav>
    )
}

// class Header extends Component {
//     state = {
//         opacity: '1'
//     };

//     render() {
//         return (

//     }
// }

// const mapStateToProps = state => {
//     return {
//         isAuth: state.auth.token
//     };
// };

export default Header;
