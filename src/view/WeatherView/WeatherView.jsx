
import React, {useState} from 'react'
// import sol from '../../asset/imagenes/sol.png';
// import nubesgif from '../../asset/imagenes/gif/tiempo-y-clima.gif';

import './WeatherView-styles.css';
import WeatherViewMore from '../WeatherViewMore/WeatherViewMore';

// COMPONENTS

const WeatherView = ({data}) => {
    const {weather } = data;
    const wea = weather[0].icon;
    const {name, main} = data;
    const {temp} = main;
    const tempCelsius = (temp - 273.15).toFixed(2);
    const clas = (tempCelsius<15) ? "card-container" : "card-container-hot" ;

    const [view, setview] = useState(true);
    
    
const handleViews = () =>{
setview(!view);
}
    return (
              view === true? (
    <div className= {clas} >
    <img src={`http://openweathermap.org/img/wn/${wea}@2x.png`} alt="" />
                <p>{tempCelsius}°</p>
                <h1>{name}</h1>
                <button onClick= {() => handleViews()} >Infor. completa</button>
                </div>
                ): <WeatherViewMore handleViews={handleViews} data={data} />
                
          


    )
}

export default WeatherView
