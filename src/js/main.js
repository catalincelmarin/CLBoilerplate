import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import books from '../Database/books.js';
import {
    BestsellerBooks,
    BiographyBooks,
    BusinessBooks,
    ScienceBooks,
    FictionBooks,
    ChildrenBooks,
    HobbiesBooks
} from "./category";

import {Announce, Introduction} from "./header"
import {Header} from "./header";
import {Footer} from "./footer";
import {Navigation} from "./navigation";
import {HashRouter, NavLink, Route} from "react-router-dom";
import {Menu} from "./burgermenu";

// console.log(books);


export class AdvertiseBestsellers extends Component {
    render() {
        return (
            <section className="category__advertise">
                <div className="category__box">
                    <div className="bs__images">
                        <div className="bs__first__img">
                            <img src="/assets/images/24.jpg"/>
                            <img src="/assets/images/25.png"/>
                            <img src="/assets/images/26.jpg"/>
                        </div>
                        <div className="bs__second__img">
                            <img src="/assets/images/27.jpg"/>
                            <img src="/assets/images/28.jpeg"/>
                        </div>
                    </div>
                    <div className="bs__text">
                        <div>
                            <h1><NavLink to="/bestsellers">BESTSELLERS</NavLink></h1>
                            <div className="bs__subtitle">Meet your next favourite book</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export class AdvertiseChildrenBooks extends Component {
    render() {
        return (
            <section className="category__advertise">
                <div className="category__box children__box">
                    <div>
                        <h1><NavLink to="/children">CHILDREN'S BOOKS</NavLink></h1>
                    </div>
                </div>
            </section>
        )
    }
}


class BooksList extends Component {
    render() {
        return (
            <div className="books__list">
                <BusinessBooks/>
                <ScienceBooks/>
                <FictionBooks/>
                <HobbiesBooks/>
                <BiographyBooks/>
                <ChildrenBooks/>
                <BestsellerBooks/>
            </div>
        )
    }
}
// class ShoppingCart extends Component {
//     render() {
//         return (
//             <div id="shopping-cart">
//                 <table id="cart-content" className="u-full-width">
//                     <thead>
//                     <tr>
//                         <th>Image</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th></th>
//                     </tr>
//                     </thead>
//                     <tbody></tbody>
//                 </table>
//
//                 <a href="#" id="clear-cart" className="button u-full-width">Clear Cart</a>
//             </div>
//         )
//     }
// }

class App extends Component {
    render() {
        return (
            <>
                <div className={"container"}>
                    <HashRouter>
                        <>
                            <header>
                                <section className={"navigation"}>
                                    <Announce/>
                                    <Navigation/>
                                </section>
                            </header>
                            <main>
                                <div className="books__list">
                                    <Route path='/bestsellers' component={BestsellerBooks}/>
                                    <Route path='/biography' component={BiographyBooks}/>
                                    <Route path='/business' component={BusinessBooks}/>
                                    <Route path='/science' component={ScienceBooks}/>
                                    <Route path='/fiction' component={FictionBooks}/>
                                    <Route path='/children' component={ChildrenBooks}/>
                                    <Route path='/hobbies' component={HobbiesBooks}/>
                                </div>
                                <section className={"introduction"}>
                                    <Introduction/>
                                </section>
                                <div className="books__list">
                                    <Route exact path='/bookslist' component={BooksList}/>
                                </div>
                                <section className="advertise">
                                    <AdvertiseBestsellers/>
                                    <AdvertiseChildrenBooks/>
                                </section>
                                <div className="books__list">
                                    <Route exact path='/bestsellers' component={BestsellerBooks}/>
                                    <Route exact path='/children' component={ChildrenBooks}/>
                                    <BooksList/>
                                    {/*<ShoppingCart/>*/}
                                </div>
                            </main>
                            <Footer/>
                        </>
                    </HashRouter>
                </div>
            </>
        )
    }
}


document.addEventListener("DOMContentLoaded", function () {


    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


    let topNav = document.getElementById("myTopnav");
    let menu = topNav.querySelector("a.icon");
    let menuicon = menu.querySelector(".fa-bars");


    menu.addEventListener('click', myFunction);
    menuicon.addEventListener('click', function (element) {
        this.classList.toggle("fa-times");
        this.classList.toggle("fa-bars");
    });


});