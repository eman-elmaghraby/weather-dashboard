import { useEffect, useState } from "react";
import axios from "axios"; 

export const useGeolocation = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "6c43e0586fa84e79823151555233012";

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        axios
          .get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
          )
          .then((response) => {
            console.log("Geolocation API Response:", response.data); 

            
            const cityName = response.data.results[0]?.components.city || "Unknown Location";
            if (cityName === "Unknown Location") {
              setError("City not found from geolocation data.");
            } else {
              setCity(cityName);
              setError(null); 
            }
          })
          .finally(() => {
           
          });
      },
      () => {
        setError("Unable to retrieve your location.");
      }
    );
  }, []);

  return { location, city, error };
};
