import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import axios from "axios";

const useFetchWeather = () => {
    const {app,dispatch} = useContext(AppContext);
    const {search} = app;

    return {fetchWeather};

    async function fetchWeather(){

        try {
            const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${app.apiKey}`
                
            const geoRes = await axios.get(geoURL);
        
            if (geoRes.data.length === 0) {
                //there was no city matching that name
                dispatch({type: 'noSearchMatch'})
            } else {
                const {lat,lon} = geoRes.data[0]; 
                //comes back as array of city options, selecting the first
        
                const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,daily,alerts&appid=${app.apiKey}`;
        
                const res = await axios.get(weatherURL);
                dispatch({type: 'loadWeatherInfo', payload: res.data})
            }  
        } catch (error) {
            dispatch({type: 'serverDown'})
        }
    }

}

export default useFetchWeather;