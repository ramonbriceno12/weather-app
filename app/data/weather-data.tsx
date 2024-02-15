'use client'
import { useState, useEffect } from "react"
import Info from "../components/info";

export default function weatherData(){

    const [location, setLocation] = useState(null)

    useEffect(() => {
        const getLocation = async () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            }, (error) => {
              console.error('Error getting location:', error);
            });
          } else {
            console.log('Geolocation is not supported by this browser.');
          }
        };
    
        getLocation();
    }, []);

    return (
        <Info location={location}/>
    )
}