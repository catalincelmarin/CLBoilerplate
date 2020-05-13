import React, {Component} from 'react';
import {BookCard} from "./bookCard";
import books from '../Database/books.js';

export  class BusinessBooks extends Component {
    // state = {
    //     list: [],
    // };
    //
    // buyProduct = productName => {
    //     // this.setState(prevState => ({
    //     //     list: [...prevState.list, productName]
    //     // }));
    //     const list = this.state.list;
    //     list.push(productName);
    //     this.setState({
    //         list
    //     });
    // };

    render() {

        return (
            <section className="category" id="business">
                <div className="category__title"><h1>BUSINESS</h1></div>
                <div className="category__container">
                    <BookCard category={"business"} />
                    {/*<ul>*/}
                    {/*    {this.state.list.map((product, index) => {*/}
                    {/*        return <li key={index}>{product}</li>*/}
                    {/*    })}*/}
                    {/*</ul>*/}
                </div>
            </section>
        )
    }

}


export  class ScienceBooks extends Component {
    render() {
        return (
            <section className="category" id="science">
                <div className="category__title" ><h1>SCIENCE</h1></div>
                <div className="category__container">
                    <BookCard category={"science"}/>
                </div>
            </section>
        )
    }
}

export  class FictionBooks extends Component {
    render() {

        return (
            <section className="category" id="fiction">
                <div className="category__title"><h1>FICTION</h1></div>
                <div className="category__container">
                    <BookCard category={"fiction"}/>
                </div>
            </section>
        )
    }
}

export  class HobbiesBooks extends Component {
    render() {

        return (
            <section className="category" id="hobbies">
                <div className="category__title"><h1>HOBBIES</h1></div>
                <div className="category__container">
                    <BookCard category={"hobbies"}/>
                </div>
            </section>
        )
    }
}

export  class BiographyBooks extends Component {
    render() {
        return (
            <section className="category" id="biography">
                <div className="category__title"><h1>BIOGRAPHY</h1></div>
                <div className="category__container">
                    <BookCard category={"biography"}/>
                </div>
            </section>
        )
    }
}
export  class ChildrenBooks extends Component {
    render() {

        return (
            <section className="category" id="children">
                <div className="category__title"><h1>CHILDREN'S BOOKS</h1></div>
                <div className="category__container">
                    <BookCard category={"children"}/>
                </div>
            </section>
        )
    }
}

export class BestsellerBooks extends Component {
    render() {

        return (
            <section className="category" id="bestsellers">
                <div className="category__title"><h1>BESTSELLER</h1></div>
                <div className="category__container">
                    <BookCard category={"bestsellers"}/>
                </div>
            </section>
        )
    }
}