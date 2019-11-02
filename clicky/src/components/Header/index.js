import React from "react";

function Header(props) {
    return (
        <div className="header">
            <div className="title">{props.children}</div>
            <div className="scores">
                Score: {props.score} Top Score: {props.topscore} 
            </div>
        </div>
    )
}

export default Header;