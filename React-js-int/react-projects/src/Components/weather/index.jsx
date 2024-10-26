
import { useState } from "react";
import Search from "../search";
export default function Weather(){
    const [search , setSearch] = useState('');
    const [loading ,setLoading] = useState(false);
    const [weatherData ,setweatherData] = useState(false);

    async function fetchWeatherData(param){
        setLoading(true);
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=0ddb3cc9b5adbd3cfc0f646de63d5654`)
            // vars must be declared
            const data = await response.json();
            console.log(data , "data");
            if(data){
                setweatherData(data);
                setLoading(false)
            }
        }catch(e){
            setLoading(false);
            console.log(e);
        }

    }
    function handleSearch(){
        fetchWeatherData(search)
    }
    function getCurrentDate(){
        return new Date().toLocaleDateString('en-us' , {
            weekday: 'long',
            month : 'long',
            day : 'numeric',
            year : 'numeric'
        })
    }
    console.log(loading)
    return <div className="App">
        <Search 
        search={search} setSearch={setSearch}
        handleSearch={handleSearch}
        />
        {
            loading ? (
                <div>Loading...</div>
            ):(
                <>
                    <div className="city-name">
                    <h2>{weatherData?.name }  <span>{weatherData?.sys?.country}</span></h2>
                    </div>
                    <div className="date">
                        <span>{getCurrentDate()}</span>
                    </div>
                    <div className="temp">
                        {weatherData?.main?.temp}
                    </div>
                    <p className="description">{weatherData && weatherData.weather ? weatherData.weather[0].description : ''}</p>
                    <div className="weather-info">
                        <div className="column">
                            <div>
                                <p className="wind">{weatherData?.wind?.speed}</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <p className="humidity">{weatherData?.main?.humidity}</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </>
            
            )
        }
    </div>
}