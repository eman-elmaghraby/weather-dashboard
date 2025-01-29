import { error } from "console";

const API_KEY = "6c43e0586fa84e79823151555233012";

export const fetchWeatherData = async (city: string) =>{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)

     if(!response.ok){
        throw new Error("City Not Found")
     }

     return response.json();

}