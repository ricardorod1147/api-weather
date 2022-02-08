import React from 'react';
import "./NotFound.styles.css";

const NotFound = ({data, cod}) => {
    
    return (
        <div className= "card-container">
            <h1>{data}</h1>
            <h1>{cod}</h1>
           
        </div>
    )
}

export default NotFound
