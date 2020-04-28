import React,{Component} from 'react';
import {Link} from "react-router-dom";


export default class AboutMe extends Component{
    render() {
        return(
        <div className={'body'}>
            <div className={'parallax'}><div className={'txt'}><span className={'imgText'}>About me below</span> </div></div>
            <div className={'me'}><h3 className={'title'}>Passion</h3><p className={'content'}>
                Ex-economist, back to his true love, computers and tech.<br/>
                Decided not to follow the crowds anymore and stepped up for my dream<br/>
                I like beautiful designs, mathematical thinking, computers and new tech<br/>
                Front-end checks all the dots for me
            </p></div>
            <div className={'parallax-2'}><div className={'txt'}><span className={'imgText'}>Experiences</span></div></div>
            <div className={'me-2'}><h3 className={'title'}>Long story short</h3><p className={'content'}>
                Jobs: Excel Data-Analyst, Tax Assistant, Junior Tax Consultant<br/>
                Work and travel 'alumnus'<br/>
                Also jobs, but in the US: beach attendant, busser, bellman<br/>
                Tech-head<br/>
                Gamer<br/>
                Obsessed with the United States and especially New York City<br/>
                Running aficionado
            </p></div>
            <div className={'parallax-3'}><div className={'txt'}><span className={'imgText-3'}>What makes me special</span></div></div>
            <div className={'me-3'}><h3 className={'title'}>Nothing</h3><p className={'content'}>
                BUT...<br/>
                I did graduate Coder's Lab's Front-End developer course<br/>
                And I know a lot of new things, I am willing to prove it too<br/>
                And now, at the end of the intensive training in JavaScript, CSS and HTML<br/>
                i can say more than ever that I can't see myself doing anything but this <br/>
                for the rest of my professional life<br/>
                So I am a special kind of special, not as special as Mona Lisa but...
            </p></div>
            <div className={'parallax-4'}><div className={'txt'}><span className={'imgText-4'}>The end(...and the beginning)</span></div></div>
            <div className={'parallax'}><div className={'txt'}><Link className={'link'} to={'/'}>Click to HOME</Link> </div></div>

        </div>


        )
    }
}