import React, {Component} from 'react';
import {NavLink,} from 'react-router-dom';


export class Menu extends Component {
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/bestsellers">Bestsellers</NavLink>
                <NavLink to="/business">Business</NavLink>
                <NavLink to="/fiction">Fiction</NavLink>
                <NavLink to="/hobbies">Hobbies</NavLink>
                <NavLink to="/biography">Biography</NavLink>
                <NavLink to="/science">Science</NavLink>
                <NavLink to="/children">Children"s books</NavLink>
                <a href="#" className="icon" >
                    <i className="fa fa-bars"> </i>
                </a>
            </div>
        )
    }
}




