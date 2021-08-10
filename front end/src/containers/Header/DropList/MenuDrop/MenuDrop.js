import React from 'react';
import classes from './MenuDrop.module.css';
import NavigationItems from '../../NavigationItems/NavigationItems';


class MenuDrop extends React.Component {
    render() {
        return(
            <div
                className={`${classes.MenuDrop} ${this.props.show ? classes.MakeAnimation : classes.HideDropList}`}>
                <ul onClick={this.props.swapBackDrop}>
                    <NavigationItems isAuth={this.props.isAuth}/>
                    {/* <Link to='/'> <li> Home </li> </Link>
                    <Link to='/make-order'> <li> Make-Order </li> </Link>
                    <Link to='/orders'> <li> Orders </li> </Link>
                    <Link to='/make-order'> <li> SignUp </li> </Link> */}
                </ul>
            </div>

        )
    }
}

// const menuDrop = (props) => {
//     return (
//     )
// };

export default MenuDrop;