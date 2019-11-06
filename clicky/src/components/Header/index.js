import React from "react";

function Header(props) {
    return (
        <nav className="navbar navbar-inverse">
            <div className="navbar-header">
                <p className="navbar-brand">{props.children}</p>
            </div>
            <p className="navbar-text">Score: {props.score} Top Score: {props.topscore}</p>
        </nav>
    )
}

export default Header;