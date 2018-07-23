import axios from 'axios';
const API_KEY = 'e9c2f2d4d87eaa983555f29fe6f4d90f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url); // Returns a promise

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}