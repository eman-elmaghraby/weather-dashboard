"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { fetchWeather } from "@/store/slices/weatherSlice";
import { AppDispatch } from "@/store/store";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useGeolocation } from "@/hooks/useGeolocation"; 

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);


  const { location, error: geolocationError } = useGeolocation();

  
  const debouncedSearch = useDebounce((city: string) => {
    if (city) {
      dispatch(fetchWeather(city)); 
    } else if (location) {
      
      dispatch(fetchWeather(`${location.latitude},${location.longitude}`)); 
    }
  }, 800);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
   
    if (location && !query) {
      debouncedSearch("");
    }
  }, [location, query, debouncedSearch]);

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Enter Your City Name"
        value={query}
        onChange={handleChange}
        className={`${
          theme === "dark" ? "bg-gray-500 text-white" : "bg-white text-black"
        } w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all`}
      />
      {geolocationError && (
        <div className="text-red-500 text-center mt-2">{geolocationError}</div>
      )}
    </div>
  );
}
