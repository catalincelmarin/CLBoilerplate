import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


class Dashboard extends React.Component{
    render() {
        return(
         <section>
            <div className="date"> {this.props.date.toLocaleString('ro-RO',{dateStyle:"long"})} </div>
             <div className="account">
                     <div className="name"><span>Cash</span></div>
                     <div className="balance"><span className="">RON:-2500.00</span></div>
             </div>
            <div className={"buttons"} >
                <button className={"button1"}>-</button>
                <button className={"button2"}>+</button>
            </div>
            <div className="expense">
                <span className={"expenses"}>Expenses</span>
                <span className={"budget"}>Budget</span>
            </div>
        </section>)
    }
}

class Dashboard2 extends React.Component{
    render() {
        return(
         <section>
            <div className="date"> {this.props.date.toLocaleString('ro-RO',{dateStyle:"long"})} </div>
             <div className="account">
                     <div className="name"><span>CashX</span></div>
                     <div className="balance"><span className="">RON:-2500.00</span></div>
             </div>
            <div className={"buttons"} >
                <button className={"button1"}>-</button>
                <button className={"button2"}>+</button>
            </div>
            <div className="expense">
                <span className={"expenses"}>ExpensesX</span>
                <span className={"budget"}>Budget</span>
            </div>
        </section>)
    }
}
class Footer extends React.Component{
    render() {
        return (
        <footer>
            <div className="icon-bar">
                <Link to={"/"}><i className="fa fa-home"></i></Link>
                <Link to={"/contact"}><i className="fa fa-sitemap"></i></Link>
                <a href="#"><i className="fa fa-calendar"></i></a>
                <a href="#"><i className="fa fa-bank"></i></a>
                <a href="#"><i className="fa fa-gear"></i></a>
            </div>
        </footer>)
    }
}
class Header extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (<header>
            <div className="topnav">
                <a href="#home" className="logo">myIMM</a>
                <div id="myLinks">
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                <a className="icon">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </header>)
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>



                <HashRouter>
                    <Header />
                    <div>
                        <Route exact path='/' component={() => <Dashboard date={new Date()}/>} />
                        <Route path='/contact' component={() => <Dashboard2 date={new Date()}/>} />
                    </div>
                    <Footer/>
                </HashRouter>

            </>
    )}
}


document.addEventListener("DOMContentLoaded",function () {

    var date = new Date();

    ReactDOM.render(
        <App date={date}/>,
        document.getElementById('app')
    )
});