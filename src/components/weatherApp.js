import {useState} from "react"
import WeatherForm from "./weatherForm";

export default function WeatherApp(){
    const [weather, setWeather] = useState(null);

    async function loadInfo(city = "Buenos Aires"){
        try {
            const request = await fetch()
        } catch () {
            
        }
    }

    function handleChangeCity(city){
        setWeather(null)
        loadInfo()
    }

    return <div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <div>Info</div>
    </div>
}