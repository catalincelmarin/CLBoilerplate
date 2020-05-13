import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export class Announce extends Component {
    render() {
        return (
            <div className="announce">
                <p>We're delivering gifts as normal! FREE standard shipping with promo
                    code: <span>FREESHIPPING</span>
                </p>
            </div>
        )
    }
}


export class Introduction extends Component {
    render() {
        return (
            <div className="intro__box">
                <div className="intro__box__title">
                    <h1>Explore new adventures without leaving the house</h1>
                    <p>Page-turners, plot twists and more</p>
                </div>
                <div className="explore__button">
                    <NavLink className="shop__now" to="/bookslist">Shop now</NavLink>
                </div>
            </div>
        )
    }
}
