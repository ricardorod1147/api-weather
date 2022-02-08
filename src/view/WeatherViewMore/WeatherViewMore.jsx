import React from 'react'

// styles

import './WeatherMore.style.css';

const WeatherViewMore = ({handleViews, data}) => {
    const {name, weather, coord :{lon, lat}, wind:{speed}, main:{humidity, sea_level,pressure, temp_max, temp_min } } = data;
    const [p1] = weather;
    return (
        <div className="weather-container" >
            <h1>{name}</h1>
            <div> 
            <p>Latitud : {lat}</p>
            <p>Longitud : {lon}</p>
        </div>

        <div>
            <p>Descripción : {p1.description}</p>
            <p>Velocidad del viento : {speed}</p>
            <p>Humedad : {humidity}</p>
            <p>Presión : {pressure}</p>
        </div>
                    <div>
            <p>Temperatura Maxima :{temp_max} </p>
            <p>Temperatura Minima :{temp_min} </p>
            
            <p>Nivel del mar : {sea_level}</p>
            </div>
        <div>
            <img src={`http://openweathermap.org/img/wn/${p1.icon}@2x.png`} alt="" />
            <button onClick={()=>handleViews()} >Infor. Abreviada</button>
        </div>
           
        </div>
    )
}

export default WeatherViewMore
