import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import useFetchWeather from "../hooks/useFetchWeather";

function Form() {

    const {app, dispatch} = useContext(AppContext);
    const {search} = app;
    const {fetchWeather} = useFetchWeather();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'setCityToSearch', payload: e.target.value})
    }

    const handleClick = () => {
        fetchWeather();
    }

    return (
        <div id='form'>
            <span>City</span>
            <input placeholder="Enter your city" onChange={handleChange} value={search}/>
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default Form