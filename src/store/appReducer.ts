import { AppState, initObject } from "./AppContext";
import Action from "./actionTypes";

const appReducer = (state: AppState, action: Action) => {
    let newState = {...state}
    const {type,payload} = action;
    switch(type) {
        case 'setCityToSearch':
            newState.search = payload;
            break;
        case 'noSearchMatch':
            newState.loadedData = null;
            break;
        case 'loadWeatherInfo':
            const {current,lat,lon} = payload;
            const weather = {
                icon: current.weather[0].icon,
                description: current.weather[0].description,
                currentTemp: current.temp,
                feelsLike: current.feels_like,
                windSpeed: current.wind_speed,
            }
            newState = {...newState, 
                lat, 
                lon, 
                weather, 
                loadedData: true,
                city: newState.search,
                search: '',
            }
            break;
        case 'serverDown':
            newState = {
                ...initObject, 
                loadedData: 'serverDown'
            }
            break;
    }

    return newState;
}

export default appReducer;