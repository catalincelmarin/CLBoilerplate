import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import {
//     HashRouter,
//     Route,
//     Link,
//     Switch,
//     NavLink,
// } from 'react-router-dom';

export class Menu extends Component {

    render() {
        return (
            <div className="topnav" id="myTopnav">
                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <NavLink to="/">Home</NavLink>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <NavLink to="/bestsellers">Bestsellers</NavLink>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/Business">Business</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/Fiction">Fiction</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/Hobbies">Hobbies</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <a href="#" className="active"> Home </a>
                <a href="#bestsellers" className="active"> Bestsellers </a>
                <a href="#business" className="active"> Business </a>
                <a href="#science" className="active"> Science </a>
                <a href="#biography" className="active"> Biography </a>
                <a href="#fiction" className="active"> Fiction </a>
                <a href="#hobbies" className="active"> Hobbies </a>
                <a href="#children" className="active"> Children </a>
                <a href="#" className="icon" /*onClick={myFunction()}>*/>
                    <i className="fa fa-bars"> </i>
                </a>
            </div>
        )
    }
}

