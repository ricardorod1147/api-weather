import React from 'react'

//styles
import './WeatherForm.styles.css';

const WeatherForm = ({handleSearchCity, handldeSearch}) => {
    return (
        <div className="form-container">
       <form action="" onSubmit={(e)=> handldeSearch(e)} >
           <input className="input-text" type="text" placeholder="City Name" 
           onChange={({target}) => handleSearchCity(target)}/>
           <input className="input-submit" type="submit" value="Search !" />
       </form>
       </div>
    )
}

export default WeatherForm
 