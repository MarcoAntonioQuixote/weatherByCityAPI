import { useContext } from "react"
import { AppContext } from "../store/AppContext"

function Result() {

    const {app} = useContext(AppContext);
    const {weather, loadedData, search, city} = app;

    switch (loadedData) {
        case false: return (
            <div id='resultCard'>Search by city</div> 
        )
        case null: return (
            <div id='resultCard'>
                No city named {search}
            </div>
        )
        case 'serverDown': return (
            <div id='resultCard'>
                Unfortunately, the serving endpoint is down.
            </div>
        )   
    } //else true return:

    return (
    <div id='resultCard'>
        <h2 id='cityResult'>{city} 
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
        </h2>
        <p>Description: {weather.description}</p>
        <p>Current Temp: {weather.currentTemp} °F</p>
        <p>Feels like: {weather.feelsLike} °F</p>
        <p>Wind speed: {weather.windSpeed} mph</p>
    </div>
    )
}

export default Result