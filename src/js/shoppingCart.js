import React, {Component} from 'react'
import ItemPage from './bookCard'

class CartPage extends ItemPage {
    constructor(props){
        super(props);

        this.countItems = this.countItems.bind(this);
    }

    countItems(cart){
        /* Returns an pbject named cartIdCount which contains the ID of rach item added to the cart along with number of times an item was added in the cart */
        let cartIds = [];
        let cartIdCount = {};
        for (let i = 0; i < cart.length; i++){
            if (cart[i].id in cartIds){
                cartIdCount[cart[i].id] += 1;
            }
            else{
                cartIds.push(cart[i].id);
                cartIdCount[cart[i].id] = 1;
            }
        }
        console.log("cartIdCount", cartIdCount);
        console.log("cartIds", cartIds);

        return cartIdCount;
    }

    netCart = (cart) =>{
        /*Returns a array which contains the items added to the cart only once, even if they are added more than once and occur more than once in "cart"*/
        let cartIds = [];
        let netCart = [];

        for (let i=0; i < cart.length; i++){
            if(cart[i].id in cartIds){
                continue
            }
            else{
                cartIds.push(cart[i].id);
                netCart.push(cart[i]);
            }
        }
        return(netCart)
    };

    render(){
        let cartIdCounts = this.countItems(this.props.CartItems);
        let netCart = this.netCart(this.props.CartItems);

        return(
            //<ItemPage items={this.props.CartItems} />
            <div>
                {netCart.map((item) => (
                    <CartItem key={item.id} item={item} count={cartIdCounts[item.id]}/>
                ))}
            </div>
        )
    }
}

class CartItem extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div  className="book__container">
                <div className="book__cover">
                    <img src={this.props.item.image} alt={"book"}/>
                </div>

                <div className="book__info">
                    <div className="book__title">
                        <h1>{this.props.item.name}</h1>
                        <h3>{this.props.item.author}</h3>
                    </div>
                    <div className="price">
                        <span> Price: {this.props.item.price} €</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartPage;