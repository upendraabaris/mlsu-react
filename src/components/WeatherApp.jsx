import { useState } from "react"
import axios from "axios";

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    let [error, setError] = useState("");

    async function getWeather() {
        try {
            setError("");
            const API_KEY = '9078faf6cc296f8f7d1e7f7c89dce713';

            const url =
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

            const response = await fetch(url);

            const data = await response.json();
            // const data = await axios.get(url);

            if(data.cod !== 200){
                setError(data.message);
                setWeather(null);
                return;
            }

            // console.log(data);
            setWeather(data);
        } catch (err) {
            setError(err);
        }
    }
    return (
        <>

            <div>
                <h1 className="text-3xl font-bold mb-5">Weather App</h1>

                <div className="flex gap-3 mb-5">
                    <input type="text"
                        placeholder="Enter city..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="border p-2 rounded w-full" />

                    <button onClick={getWeather} className="bg-blue-500 text-white px-4 rounded">Search</button>
                </div>

                {
                    error && (
                        <>
                        <h1 className="text-red-500">{error}</h1>
                        </>
                    )
                }

                {
                    weather && (
                        <div>
                            <h2>{weather.name}</h2>

                            <p>Temperature: {weather.main.temp}C</p>

                            <p>Weather: {weather.weather[0].main}</p>

                            <p>Wind: {weather.wind.speed} km/h</p>
                        </div>
                    )
                }
            </div>


        </>
    )
}

export default WeatherApp