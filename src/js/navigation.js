import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Menu} from "./burgermenu"
import books from "../Database/books";
import {BookCard} from "./bookCard";
import {BestsellerBooks} from "./category";
// import {
//     HashRouter,
//     Route,
//     Link,
//     Switch,
//     NavLink,
// } from 'react-router-dom';
// function searchingFor(term) {
//     return function (x) {
//         return x.name.toLowerCase().includes(term.toLowerCase()) ;
//     }
// }

// export class SearchBook extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             books: books,
//             term: '',
//         };
//         this.searchBook = this.searchBook.bind(this);
//     }
//
//     searchBook(event) {
//         this.setState({term: event.target.value})
//     };
//
//
//     render() {
//         const {term, books} = this.state;
//         return (
//             <>
//                 <div className="search__input">
//                     <input type="text" placeholder="Search Book" onChange={this.searchBook}/>
//                     <button className="search__icon"><i className="fa fa-search"> </i>
//                     </button>
//                 </div>
//
//                     {
//                         books.filter(searchingFor(term)).map((book, index) => {
//                             const {name, author, image, price} = book;
//                             return (
//                                 <div className="searched__book">
//                                 <div key={index} className="book__container">
//                                     <div className="book__cover">
//                                         <img src={image}/>
//                                     </div>
//
//                                     <div className="book__info">
//                                         <div className="book__title">
//                                             <h1>{name}</h1>
//                                             <h3>{author}</h3>
//                                         </div>
//                                         <div className="price">
//                                             <p> Price: {price} €</p>
//                                             <div className="add__to__cart"><a href="#">Add to cart</a></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 </div>
//                             )
//                         }
//                     )
//                     }
//
//
//             </>
//         )
//     }
// }
//


export class Navigation extends Component {
    render() {
        return (
            <nav>
                <div>
                    <div className="store__logo">
                        <img className="books__logo" src="/assets/images/books_logo.png" alt={"books logo"}/>
                        <div><h1>Online </h1>
                            <h1>Bookstore</h1>
                        </div>
                    </div>
                    <div className={"nav"}>
                        {/*<div className="burger__menu">*/}
                        {/*    /!*<img className="menu__logo" src="/assets/images/open-menu.png" alt={"menu"}/>*!/*/}

                        {/*</div>*/}
                        {/*<SearchBook/>*/}
                        <div className="search__box">
                            <input className="search__text" placeholder="Search Book"/>
                            <a className="search__btn" href="#"><i className="fa fa-search"> </i></a>
                        </div>
                        {/*<div className="cart__and__account">*/}
                        {/*    <img className="cart__logo" src="/assets/images/white-cart.png" alt={"cart logo"}/>*/}
                        {/*    <a href="#"><i className="fas fa-user"> </i></a>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <Menu/>
                {/*<HashRouter>*/}
                {/*    <Menu/>*/}
                {/*        <Switch>*/}
                {/*            <Route path='/bestsellers' component={BestsellerBooks} />*/}

                {/*        </Switch>*/}

                {/*</HashRouter>*/}
            </nav>
        )
    }
}