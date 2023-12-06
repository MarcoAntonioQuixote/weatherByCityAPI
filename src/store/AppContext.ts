import React, { createContext } from "react";

type AppContextValue = {
    app: AppState;
    dispatch: React.Dispatch<any>;
}

export const AppContext = createContext({} as AppContextValue);

//also defining the expected state/store for duration of app life

const apiKey = import.meta.env.VITE_API_KEY;

type WeatherData = {
    description: string;
    icon: string;
    feelsLike: number;
    currentTemp: number;
    windSpeed: number;
}

export type AppState = {
    search: string;
    city: string;
    lon: number;
    lat: number;
    weather: WeatherData;
    apiKey: string;
    loadedData: boolean | null | 'serverDown'; 
    //null = no match, true = match, false = not started
}

export const initObject: AppState = {
    search: '',
    city: '',
    lon: 0,
    lat: 0,
    weather: {
        description: '',
        currentTemp: 0,
        feelsLike: 0,
        windSpeed: 0,
        icon: '', 
    },
    loadedData: false,
    apiKey,
}

