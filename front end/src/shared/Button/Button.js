import React from 'react'
import {Link} from 'react-router-dom';

const Button = ({title,width = "100px",height, href = "#", margin = null, display="inlineBlock", onClick, rounded = false, background = "linear-gradient(to bottom, #28a7ea 0%,#2e93e6 50%,#207cca 100%,#409ce4 100%,#28a7ea 100%)"}) => {

    const style = {
        width: width,
        height: height,
        border: "none",
        color: "#fff",
        display: display,
        background: background,
        margin: margin
    }

    return (
        <button
            className={rounded ? "rounded" : null} 
            style={style} 
            onClick={onClick}>
             <Link to={href} > {title}  </Link>
        </button>
    )
}

export default Button
