import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SideMenu} from "./burgermenu"
import books from "../Database/books";
import {BookCard} from "./bookCard";


function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export class SearchBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: books,
            term: '',
        };
        this.searchBook = this.searchBook.bind(this);
    }

    searchBook(event) {
        this.setState({term: event.target.value})
    };

    render() {
        const {term, books} = this.state;
        return (
            <>
                <div className="search__input">
                    <input type="text" placeholder="Search Book" onChange={this.searchBook}/>
                    <button className="search__icon"><i className="fa fa-search"> </i>
                    </button>
                </div>
                <div className="searched__book">
                    {
                        books.filter(searchingFor(term)).map((book, index) => {
                                return (
                                    <BookCard key={index} name={book.name}/>
                                )
                            }
                        )
                    }

                </div>
            </>
        )
    }
}


export class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="store__logo">
                    <img className="books__logo" src="/assets/images/books.png" alt={"books logo"}/>
                    <h1>Online Bookstore</h1>
                </div>
                <div className={"nav"}>
                    <div>
                        {/*<img className="menu__logo" src="/assets/images/open-menu.png" alt={"menu"}/>*/}
                        <SideMenu/>
                    </div>
                    <SearchBook/>
                    {/*<div className="search__input">*/}
                    {/*    <input placeholder="Search Book"/>*/}
                    {/*    <button className="search__icon"><i className="fa fa-search"> </i></button>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    <img className="cart__logo" src="/assets/images/white-cart.png" alt={"cart logo"}/>
                </div>
            </nav>
        )
    }
}