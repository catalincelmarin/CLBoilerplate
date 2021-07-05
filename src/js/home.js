import React,{Component} from 'react';
import {NavLink, Route, Switch,Link} from "react-router-dom";
import {Redirect} from 'react-router';
import AboutMe from "./aboutme";
import Weather from "./weather";
import Calculator from "./calculator";

export default class Home extends Component{

    render() {
            return(
                <div className={'bigWrapper'}>
                    <nav className={'divWrapper'}>
                        <input type={'checkbox'}/>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={'divWrapper'}>
                            <div><button className={'btn btn-1'}><NavLink className={'navlink'} to={'/aboutme'}>About me</NavLink></button></div>
                            <div><button className={'btn btn-2'}><NavLink className={'navlink'} to={'/weather'}>Weather</NavLink></button></div>
                            <div><button className={'btn btn-3'}><NavLink className={'navlink'} to={'/calculator'}>Calculator</NavLink></button></div>
                            <div><button className={'btn btn-4'}><NavLink className={'navlink'} to={'/contactme'}>Contact</NavLink></button></div>
                        </div>
                    </nav>
                    <main className={'squaresWrapper'}>
                        <div className={'squares-row'}>
                            <div className={'row-1 square-1'}> </div>
                            <div className={'row-1 square-2'}> </div>
                            <div className={'row-1 square-3'}> </div>
                            <div className={'row-1 square-4'}> </div>
                            <div className={'row-1 square-5'}> </div>

                        </div>
                        <div className={'squares-row'}>
                            <div className={'row-1 square-6'}> </div>
                            <div className={'row-1 square-7'}> </div>
                            <div className={'row-1 square-8'}> </div>
                            <div className={'row-1 square-9'}> </div>
                            <div className={'row-1 square-10'}> </div>
                        </div>
                        <div className={'squares-row'}>
                            <div className={'row-1 square-11'}> </div>
                            <div className={'row-1 square-12'}> </div>
                            <div className={'row-1 square-13'}> </div>
                            <div className={'row-1 square-14'}> </div>
                            <div className={'row-1 square-15'}> </div>
                        </div>
                    </main>

                </div>

            )


    }
}