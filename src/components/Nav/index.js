import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => { 

    return(
        <div className="navbar-fixed">
            <nav className="medium_gray_opacity"> 
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">GP</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                        <Link to="/public-profile"> 
                             Public Profile
                        </Link> </li>
                        <li>
                        <Link to="/profile"> 
                            <span className="large material-icons">account_circle</span> Adam
                        </Link></li>
                        <li><a href='#'><span> <i className="large material-icons">arrow_drop_down</i> </span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};


export default Nav; 




