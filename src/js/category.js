import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import books from '../Database/books.js';
import {BookCard} from "./bookCard"

export  class BusinessBooks extends Component {
    render() {

        return (
            <section className="category__business">
                <div className="category__title"><h1>BUSINESS</h1></div>
                <div className="business__container">
                    <BookCard category={"business"}/>
                </div>
            </section>
        )
    }

}


export  class ScienceBooks extends Component {
    render() {
        return (
            <section className="category__business">
                <div className="category__title"><h1>SCIENCE</h1></div>
                <div className="business__container">
                    <BookCard category={"science"}/>
                </div>
            </section>
        )
    }
}

export  class FictionBooks extends Component {
    render() {

        return (
            <section className="category__business">
                <div className="category__title"><h1>FICTION</h1></div>
                <div className="business__container">
                    <BookCard category={"fiction"}/>
                </div>
            </section>
        )
    }
}

export  class HobbiesBooks extends Component {
    render() {

        return (
            <section className="category__business">
                <div className="category__title"><h1>HOBBIES</h1></div>
                <div className="business__container">
                    <BookCard category={"hobbies"}/>
                </div>
            </section>
        )
    }
}

export  class BiographyBooks extends Component {
    render() {
        return (
            <section className="category__business">
                <div className="category__title"><h1>BIOGRAPHY</h1></div>
                <div className="business__container">
                    <BookCard category={"biography"}/>
                </div>
            </section>
        )
    }
}
export  class ChildrenBooks extends Component {
    render() {

        return (
            <section className="category__business">
                <div className="category__title"><h1>CHILDREN'S BOOKS</h1></div>
                <div className="business__container">
                    <BookCard category={"children"}/>
                </div>
            </section>
        )
    }
}

export class BestsellerBooks extends Component {
    render() {

        return (
            <section className="category__business">
                <div className="category__title"><h1>BESTSELLER</h1></div>
                <div className="business__container">
                    <BookCard category={"bestseller"}/>
                </div>
            </section>
        )
    }
}