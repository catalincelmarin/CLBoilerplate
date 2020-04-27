import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import books from '../Database/books.js';
import {BestsellerBooks, BiographyBooks, BusinessBooks, ScienceBooks, FictionBooks, ChildrenBooks,HobbiesBooks } from "./category";
import {Header} from "./header";

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
                            <h1>BESTSELLERS</h1>
                            <div className="bs__subtitle"><a href="#">Meet your next favourite book</a></div>
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
                        <h1>CHILDREN'S BOOKS</h1>
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
                <AdvertiseBestsellers/>
                <AdvertiseChildrenBooks/>
                <BusinessBooks/>
                <ScienceBooks/>
                <FictionBooks/>
                <HobbiesBooks/>
                <BiographyBooks/>
                <ChildrenBooks/>
                <BestsellerBooks/>
            </main>
        )
    }
}


class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
            </>
        )
    }
}


document.addEventListener("DOMContentLoaded", function () {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});