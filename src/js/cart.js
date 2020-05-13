import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import books from '../Database/books.js';

// class CartItem extends Component {
//
//     calculateTotal: {
//         return Number(this.props.price * this.props.qty).toFixed(2);
//     },
//
//     render() {
//         return (
//             <div key={this.props.key} className='cart-line'>
//                 <div className='cart-line__name'>{this.props.name}</div>
//                 <div className='cart-line__change-qty'>
//                     <a className='cart-line__qty-up' onClick={this.props.onQtyChanged.bind(null, this.props.arrayIndex, '+')}>+</a>
//                     <a className='cart-line__qty-down' onClick={this.props.onQtyChanged.bind(null, this.props.arrayIndex, '-')}>-</a>
//                 </div>
//                 <div className='cart-line__quantity'>{this.props.qty}</div>
//                 <div className='cart-line__price'>£{Number(this.props.price).toFixed(2)}</div>
//                 <div className='cart-line__total'>£{this.calculateTotal()}</div>
//             </div>
//         );
//     }
//
// });
//
//
//
//
//
// class AllCartItems extends Component {
//
//     buildRows: {
//         return (
//             this.props.cartItems.map((cartItem, indx) =>
//             <CartItem
//                 key={cartItem.id}
//                 arrayIndex={indx}
//                 name={cartItem.name}
//                 qty={cartItem.qty}
//                 price={cartItem.price}
//                 onQtyChanged={this.props.onQtyChanged} />
//         );
//             )
//     };
//
//     render:{
//         return (
//             <section className='all-cart-items'>
//                 <h1 className='all-cart-items__heading'>Cart Items</h1>
//                 <div className='all-cart-items__items'>
//                     {this.buildRows()}
//                 </div>
//             </section>
//         );
//     }
//
// });
//
//
//
//
//
//
//
//
//
//
//
// class TotalRow extends Component {
//
//     calculateTotal(total): {
//         return Number(total).toFixed(2);
//     },
//
//     render:{
//         return (
//             <div className='total-row'>
//                 <span className='total-row__label'>{this.props.label}</span>
//                 <span className='total-row__total'>£{this.calculateTotal(this.props.total)}</span>
//             </div>
//         );
//     }
//
// });
//
//
//
//
//
// class Totals extends Component {
//
//     discount: {
//         return 0 - this.total() * 0.1;
//     },
//     subTotal: function() {
//         var items = this.props.cartItems;
//         var subTotal = 0;
//         for (var x = 0; x < items.length; x ++) {
//             subTotal += items[x].price * items[x].qty;
//         }
//         return subTotal;
//     },
//     taxTotal: function() {
//         return this.subTotal() / 100 * 20;
//     },
//     total: function() {
//         return this.subTotal() + this.taxTotal();
//     },
//
//
//     render: function() {
//         return (
//             <section className='totals'>
//                 <h1 className='totals__heading'>Totals</h1>
//                 <div className='totals__details'>
//                     <TotalRow label='Sub Total' total={this.subTotal()}/>
//                     <TotalRow label='Discount Value' total=''/>
//                     <TotalRow label='Tax @ 20%' total={this.taxTotal()}/>
//                     <TotalRow label='Grand Total' total={this.total()}/>
//
//                 </div>
//             </section>
//         );
//     }
//
// });
//
//
//
//
//
// var Basket = React.createClass({
//
//     getInitialState: function() {
//         return {cartItems};
//     },
//
//     handleQtyChanged: function(cartItemIndex, direction) {
//         if (direction === '+') {
//             cartItems[(cartItemIndex)].qty++;
//         } else {
//             cartItems[(cartItemIndex)].qty--;
//         }
//
//         this.setState({cartItems});
//     },
//
//     render: function() {
//         return (
//             <main>
//                 <AllCartItems cartItems={this.state.cartItems} onQtyChanged={this.handleQtyChanged}/>
//                 <Totals cartItems={this.state.cartItems} />
//             </main>
//         );
//     }
//
// });
//
//
//
//
//
// React.render(
//     <Basket cartItems={cartItems} />,
//     document.getElementById('react-basket')
// );

