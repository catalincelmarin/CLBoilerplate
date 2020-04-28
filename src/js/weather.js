import React,{Component} from 'react';
import checkWeather from "./checkWeather";
import moment from "moment";
import {Link, NavLink, Route} from "react-router-dom";
import AboutMe from "./aboutme";
import {Redirect} from "react-router";
import Home from "./home";

function KelvintoC(kelvin){
    return Math.round(kelvin-273.15);
}
export default class Weather extends Component{
    constructor(props) {
        super(props);
        this.state={
            loading:false,
            cityWeather:false,
            cityName:'',
            mainTemp:0,
            mainPress:0,
            mainHum:0,
            mainWind:0,
            path:'',
            day_1:'',
            day_2:'',
            day_3:'',
            day_4:'',
            day_5:'',
            temp1:0,
            temp2:0,
            temp3:0,
            temp4:0,
            temp5:0,
            sun1:'',
            sun2:'',
            sun3:'',
            sun4:'',
            sun5:'',

            cityInput:'',

        }
    }
    componentDidMount() {
        fetch(`http://ip-api.com/json/`)
            .then(response => response.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    cityName:data.city,
                })
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=9d99931860d7187e8cbc7d8131bf2f03`)
                    .then(response => response.json())
                    .then(data=>{
                        console.log(data)
                        this.setState({
                            mainTemp:KelvintoC(data.main.temp),
                            mainPress:data.main.pressure,
                            mainHum:data.main.humidity,
                            mainWind:data.wind.speed,

                        })
                        let unixSunSet=data.sys.sunset;
                        let unixSunRise=data.sys.sunrise;

                        //Date changed for every timezone
                        let currentHour=new Date();
                        var utc=currentHour.getTime()+(currentHour.getTimezoneOffset()*60000);
                        var nd=(new Date(utc+(1000*data.timezone))).getHours();

                        //Sunset for every timezone
                        let sunset=new Date(unixSunSet*1000);
                        var utcSet=sunset.getTime()+(sunset.getTimezoneOffset()*60000);
                        let ndSun=(new Date(utcSet+(1000*data.timezone))).getHours();

                        //Sunrise for every timezone
                        let sunrise=new Date(unixSunRise*1000);
                        let utcRise=sunrise.getTime()+(sunrise.getTimezoneOffset()*60000);
                        let ndRise=(new Date(utcRise+(1000*data.timezone))).getHours();

                        this.setState({
                            path:checkWeather(data.weather[0].description,ndRise,ndSun,nd)

                        })

                        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&appid=9d99931860d7187e8cbc7d8131bf2f03`)
                            .then(response => response.json())
                            .then(forecastData=>{

                                //This fetch takes the temperature and the clouds/sun/rain etc. from the next 4 days @ 12 noon time for the current city

                                let day=moment().format('YYYY-MM-DD');

                                let i=0;
                                let templist=[];
                                let sunlist=[];
                                for(let j=0;j<=39;j++){
                                    let dayWatcher=forecastData.list[j].dt_txt.split(' ');
                                    if (dayWatcher[1]==='12:00:00' && dayWatcher[0]!==day ){

                                        let temp=KelvintoC(forecastData.list[j].main.temp);
                                        templist.push(temp);
                                        sunlist.push(checkWeather(forecastData.list[j].weather[0].description,7,19,12));
                                        i++;
                                    }
                                }


                                this.setState({
                                    loading:true,
                                    day_1:moment().add((1),'days').format('dddd'),
                                    day_2:moment().add((2),'days').format('dddd'),
                                    day_3:moment().add((3),'days').format('dddd'),
                                    day_4:moment().add((4),'days').format('dddd'),
                                    temp1:templist[0],
                                    temp2:templist[1],
                                    temp3:templist[2],
                                    temp4:templist[3],
                                    temp5:templist[4],
                                    sun1:sunlist[0],
                                    sun2:sunlist[1],
                                    sun3:sunlist[2],
                                    sun4:sunlist[3],
                                })

                                console.log(templist);
                                console.log(forecastData)})
                            .catch(err => {
                                console.log(err);
                            });

                    })
                    .catch(err => {
                        console.log(err);
                    });

            })
            .catch(err => {
                console.log(err);
            });
    }

    submit(e){
        e.preventDefault();
        this.setState({
            cityWeather:true
        })
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&appid=9d99931860d7187e8cbc7d8131bf2f03`)
            .then(response => response.json())
            .then(data=>{
                console.log(data);
                this.setState({
                    cityName:data.name,
                    mainTemp:KelvintoC(data.main.temp),
                    mainPress:data.main.pressure,
                    mainHum:data.main.humidity,
                    mainWind:data.wind.speed,

                })
                let unixSunSet=data.sys.sunset;
                let unixSunRise=data.sys.sunrise;

                //Date changed for every timezone
                let currentHour=new Date();
                var utc=currentHour.getTime()+(currentHour.getTimezoneOffset()*60000);
                var nd=(new Date(utc+(1000*data.timezone))).getHours();

                //Sunset for every timezone
                let sunset=new Date(unixSunSet*1000);
                var utcSet=sunset.getTime()+(sunset.getTimezoneOffset()*60000);
                let ndSun=(new Date(utcSet+(1000*data.timezone))).getHours();

                //Sunrise for every timezone
                let sunrise=new Date(unixSunRise*1000);
                let utcRise=sunrise.getTime()+(sunrise.getTimezoneOffset()*60000);
                let ndRise=(new Date(utcRise+(1000*data.timezone))).getHours();


                this.setState({
                    path:checkWeather(data.weather[0].description,ndRise,ndSun,nd)

                })

                fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&appid=9d99931860d7187e8cbc7d8131bf2f03`)
                    .then(response => response.json())
                    .then(forecastData=>{

                        //This fetch takes the MAX temperature from each of the next 4 days and the clouds/sun/rain status at the time of the max temp
                        //This is different compared to the one for the current city because the 12 hour temp can't be taken for the searched city
                        //That's because all the hours are shown relative to the current hour, not to the hour in the city you search, so taking hour 12 from the list would not be precise at all in this case

                        let day=moment().format('YYYY-MM-DD');
                        let day1=moment().add(1,'day').format('YYYY-MM-DD');
                        let day2=moment().add(2,'day').format('YYYY-MM-DD');
                        let day3=moment().add(3,'day').format('YYYY-MM-DD');
                        let day4=moment().add(4,'day').format('YYYY-MM-DD');

                        let templist1=[];
                        let templist2=[];
                        let templist3=[];
                        let templist4=[];
                        let sunlist=[];


                        for(let j=0;j<=39;j++){
                            let dayWatcher=forecastData.list[j].dt_txt.split(' ');
                            if (dayWatcher[0]!==day ){
                                if (dayWatcher[0]===day1){
                                    templist1.push(KelvintoC(forecastData.list[j].main.temp))
                                    let maxTemp1=Math.max.apply(Math,templist1);
                                    if (KelvintoC(forecastData.list[j].main.temp)===maxTemp1){
                                        sunlist[0]=checkWeather(forecastData.list[j].weather[0].description,7,19,12);
                                    }
                                }
                                if (dayWatcher[0]===day2){
                                    templist2.push(KelvintoC(forecastData.list[j].main.temp))

                                    let maxTemp2=Math.max.apply(Math,templist2);
                                    if (KelvintoC(forecastData.list[j].main.temp)===maxTemp2){
                                        sunlist[1]=checkWeather(forecastData.list[j].weather[0].description,7,19,12);
                                    }
                                }
                                if (dayWatcher[0]===day3){
                                    templist3.push(KelvintoC(forecastData.list[j].main.temp))

                                    let maxTemp3=Math.max.apply(Math,templist3);
                                    if (KelvintoC(forecastData.list[j].main.temp)===maxTemp3){
                                        sunlist[2]=checkWeather(forecastData.list[j].weather[0].description,7,19,12);
                                    }
                                }
                                if (dayWatcher[0]===day4){
                                    templist4.push(KelvintoC(forecastData.list[j].main.temp))

                                    let maxTemp4=Math.max.apply(Math,templist4);
                                    if (KelvintoC(forecastData.list[j].main.temp)===maxTemp4){
                                        sunlist[3]=checkWeather(forecastData.list[j].weather[0].description,7,19,12);
                                    }
                                }
                            }
                        }
                        this.setState({
                            loading:true,
                            day_1:moment().add((1),'days').format('dddd'),
                            day_2:moment().add((2),'days').format('dddd'),
                            day_3:moment().add((3),'days').format('dddd'),
                            day_4:moment().add((4),'days').format('dddd'),
                            temp1:Math.max.apply(Math,templist1),
                            temp2:Math.max.apply(Math,templist2),
                            temp3:Math.max.apply(Math,templist3),
                            temp4:Math.max.apply(Math,templist4),
                            sun1:sunlist[0],
                            sun2:sunlist[1],
                            sun3:sunlist[2],
                            sun4:sunlist[3]
                        })

                        console.log(forecastData);})
                    .catch(err => {
                        console.log(err);
                    });

            })
            .catch(err => {
                console.log(err);
            });

    }
    handleChange(e){
        this.setState({
            cityInput: e.target.value
        })
    }
    render() {
            if(this.state.loading){
                return (
                    <>
                        <section id="app-weather" className="container">
                            <div className="module module__form">
                                <button className="btnW btnW--icon btnW--close"><i className="material-icons"><NavLink className={'navlink'} to={'/'}>close</NavLink></i></button>
                                <h2>Find city</h2>

                                <form onSubmit={this.submit.bind(this)} noValidate autoComplete="off" className="find-city">
                                    <input type="text" onChange={this.handleChange.bind(this)} name="search" id="search" placeholder="eg. New York"/>
                                    <button type="submit"><i className="material-icons">search</i></button>
                                </form>
                                <div className="search-error"> </div>
                            </div>
                            <div className="module module__weather">

                                <div className="weather">
                                    <div className={'weather'}>
                                    <div className="weather__icon"><img className="clouds" src={this.state.path} alt={'img'}/></div>

                                    <div className="weather__info">
                                        <div className="city">
                                            <span className="city__name">{this.state.cityName}</span>
                                        </div>
                                        <div className="temperature"><span className="temperature__value">{this.state.mainTemp}</span>&deg;C
                                        </div>
                                    </div>

                                    <ul className="weather__details">
                                        <li><img src="./../../assets/images/weather/pressure.svg" alt={'img'}/> <span
                                            className="pressure__value">{this.state.mainPress} hPa</span></li>
                                        <li><img src="./../../assets/images/weather/humidity.svg" alt={'img'}/> <span className="humidity__value">{this.state.mainHum}%</span>
                                        </li>
                                        <li><img src="./../../assets/images/weather/wind-speed.svg" alt={'img'}/> <span
                                            className="wind-speed__value">{this.state.mainWind} m/s</span></li>
                                    </ul>
                                    </div>
                                    <ul className="weather__forecast">
                                        <li>
                                            <span className="day">{this.state.day_1}</span> <img className="clouds" src={this.state.sun1} alt={'img'}/>
                                            <span className="temperature"><span className="temperature__value">{this.state.temp1}</span>&deg;C</span>
                                        </li>

                                        <li>
                                            <span className="day">{this.state.day_2}</span> <img className="clouds" src={this.state.sun2} alt={'img'}/>
                                            <span className="temperature"><span className="temperature__value">{this.state.temp2}</span>&deg;C</span>
                                        </li>

                                        <li>
                                            <span className="day">{this.state.day_3}</span> <img className="clouds" src={this.state.sun3} alt={'img'}/>
                                            <span className="temperature"><span className="temperature__value">{this.state.temp3}</span>&deg;C</span>
                                        </li>

                                        <li>
                                            <span className="day">{this.state.day_4}</span> <img className="clouds" src={this.state.sun4} alt={'img'}/>
                                            <span className="temperature"><span className="temperature__value">{this.state.temp4}</span>&deg;C</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="loading">
                                <div className="dual-ring"> </div>
                            </div>
                        </section>
                    </>
                )
            }else{
                return <h1> </h1>
            }
    }
}