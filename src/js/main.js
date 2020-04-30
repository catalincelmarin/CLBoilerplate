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
import {Header} from "./header";
import {Footer} from "./footer";

console.log(books);


class AdvertiseBestsellers extends Component {
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
                            <h1><a href="#bestsellers">BESTSELLERS</a></h1>
                            <div className="bs__subtitle">Meet your next favourite book</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class AdvertiseChildrenBooks extends Component {
    render() {
        return (
            <section className="category__advertise">
                <div className="category__box children__box">
                    <div>
                        <h1><a href="#children">CHILDREN'S BOOKS</a></h1>
                    </div>
                </div>
            </section>
        )
    }
}


class Main extends Component {
    render() {
        return (
            <main>
                <section className="advertise">
                    <AdvertiseBestsellers/>
                    <AdvertiseChildrenBooks/>
                </section>

                <div className="books__list">
                    <BusinessBooks/>
                    <ScienceBooks/>
                    <FictionBooks/>
                    <HobbiesBooks/>
                    <BiographyBooks/>
                    <ChildrenBooks/>
                    <BestsellerBooks/>
                </div>
            </main>

        )
    }
}


class App extends Component {
    render() {
        return (
            <div className={"container"}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
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


