import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from "./navigation";

export class Header extends Component {
    render() {
        return (
            <header>

                    <section className={"navigation"}>
                        <Announce/>
                        <Navigation/>
                    </section>

                <section className={"introduction"}>
                    <Introduction/>
                </section>
            </header>
        )
    }
}

class Announce extends Component {
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


class Introduction extends Component {
    render() {
        return (
            <div className="intro__box">
                <div className="intro__box__title">
                    <h1>Explore new adventures without leaving the house</h1>
                    <p>Page-turners, plot twists and more</p>
                </div>
                <div className="explore__button">
                    <a className="shop__now" href="#business">Shop now</a>
                </div>
            </div>
        )
    }
}
