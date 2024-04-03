import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios";

const ApiMovie = () => {
    const [vehicles, setVehicle] = useState([]);

    useEffect(() => {
      axios.get("https://swapi.dev/api/films/1/").then(function (response) {
        console.log(response.data.vehicles);
        setVehicle(response.data.vehicles)
        
      })
    
    
    }, []);
    

  return (
    <div>
      {vehicles.map((vehicles) => {
        return vehicles;
      })}
    </div>
  )
}

export default ApiMovie
