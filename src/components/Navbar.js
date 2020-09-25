import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import heading from '../header.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink to="/" className="navbar-brand"><img className="img-fluid" src={heading} alt=" "/></NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to="/" className="one nav-link">Why Vyorious ? <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Use cases</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Team partners</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Contact us</NavLink>
                        </li>
                    </ul>
                    <button className="btn btn-default"><span>Launch Vyorious ></span></button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
