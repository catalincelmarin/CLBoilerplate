export default function checkWeather(param,sunrise,sunset,currTime) {
    let x='';
    switch (param) {
        case 'light rain':
        case 'shower rain':
        case 'moderate rain':
            if (currTime>=sunset || currTime<=sunrise){
                x='./../../assets/images/weather/rainynight.svg'
                return x;
            }else{
                x='./../../assets/images/weather/rainyday.svg'
                return x;
            }
        case 'overcast clouds':
            x='./../../assets/images/weather/cloudy.svg'
            return x;
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
            if (currTime>=sunset || currTime<=sunrise){
                x='./../../assets/images/weather/partly-cloudy-night.svg'
                return x;
            }else {
                x='./../../assets/images/weather/partly-cloudy-day.svg'
                return x;
            }
        case 'clear sky':
            if (currTime>=sunset || currTime<=sunrise){
                x='./../../assets/images/weather/clear-night.svg'
                return x;
            }else {
                x='./../../assets/images/weather/clear-day.svg'
                return x;
            }
        case 'haze':
        case 'fog':
        case 'mist':
            x='./../../assets/images/weather/fog.svg'
            return x;

    }
}