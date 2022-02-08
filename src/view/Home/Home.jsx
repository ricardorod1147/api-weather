import React, {useState} from 'react'
import WeatherForm from '../../componets/Home/Form/WeatherForm/WeatherForm.jsx';


//IMPORTS COMPONENTS
import Header from '../../componets/Custom/Header/Header.jsx';
import WeatherView from '../WeatherView/WeatherView.jsx';
import NotFound from '../NotFound/NotFound.jsx';

const Home = () => {
//State/
const [city, setcity] = useState("");
const [data, setData] =  useState(null);

    //FUNCIONES///////////////////////////////
    const handleSearchCity = ({value}) => {
        setcity(value);
      } 
    const handldeSearch = async e => {
        e.preventDefault();
        const cityValue = city;

    const key = `f46e3963573a2c59ef6a651f4913efd1`; 
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}`;
    const response = await fetch(API);
    const result = await response.json();
    setData(result);

    console.log(result);
    }
    
    return (
        <div>
            <Header />
            <WeatherForm 
            handleSearchCity={handleSearchCity} 
            city={city}
            handldeSearch={handldeSearch} 
            />      
            
            {
            data?.message?     (<NotFound data={data?.message} cod={data?.cod}/>)  : 
            data&&
         (<WeatherView data={data} />)
            
            }
        </div>
    )
}

export default Home
