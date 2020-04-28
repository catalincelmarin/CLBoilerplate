import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, NavLink, Route, Switch} from "react-router-dom";

export default class ContactMe extends Component{
    render() {
        return(
        <>

            <div className={'formDiv'}>

                <h2>Contact me</h2>
                <form className={'formForm'} action="mailto:tavisirbu2310@gmail.com" method="post" encType="text/plain">
                    Name:<br/>
                    <input className={'inputs'} type="text" name="name"/><br/>
                    E-mail:<br/>
                    <input className={'inputs'} type="text" name="mail"/><br/>
                    Comment:<br/>
                    <textarea className={'inputs'} name="comment"/><br/><br/>
                    <input className={'aboutMeInput'} type="submit" value="Send"/><br/>
                    <input className={'aboutMeInput'} type="reset" value="Reset"/>
                </form>
                <button><NavLink className={'navlink'} to={'/'}>Home</NavLink></button>
            </div>
        </>

        )
    }
}