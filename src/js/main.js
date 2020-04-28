import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from "react-router-dom";
import Home from "./home";
import AboutMe from "./aboutme";
import Weather from "./weather";
import Calculator from "./calculator";
import ContactMe from "./contactme";

document.addEventListener("DOMContentLoaded",function () {

    class App extends Component{

        render() {
            return (
            <HashRouter>
                <>
                    <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/aboutme'} component={AboutMe}/>
                    <Route exact path={'/weather'} component={Weather}/>
                    <Route exact path={'/calculator'} component={Calculator}/>
                    <Route exact path={'/contactme'} component={ContactMe}/>
                    </Switch>
                    </>
            </HashRouter>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});