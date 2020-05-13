import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import books from "../Database/books";


export class BookCard extends Component {
    // handleBuy = () => {
    //     if(typeof this.props.onBuy === 'function') {
    //         this.props.onBuy(this.props.name);
    //     }
    // }

    render() {
        return books.map((book, index) => {
            const {category, name, author, image, price} = book;
            if (category === this.props.category) {
                return (
                    <div key={index} className="book__container">
                        <div className="book__cover">
                            <img src={image}/>
                        </div>

                        <div className="book__info">
                            <div className="book__title">
                                <h1>{name}</h1>
                                <h3>{author}</h3>
                            </div>
                            <div className="price">
                                <span> Price: {price} €</span>
                                <div className="add__to__cart"><button >Add to cart</button></div>

                            </div>
                        </div>
                    </div>

                )}
        })
    }
}
