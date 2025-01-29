import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface WeatherCardProps {
  weather: {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      temp_f: number;
      condition: {
        text: string;
        icon: string;
      };
      wind_mph: number;
      humidity: number;
      pressure_mb: number;
      feelslike_c: number;
      feelslike_f: number;
      dewpoint_c: number;
      dewpoint_f: number;
      uv: number;
      gust_mph: number;
    };
  };
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-500 text-white" : "bg-white text-black"
      } p-6 rounded-lg shadow-lg text-center transition-all`}
    >
      <h2 className="text-2xl font-bold mb-4">{weather.location.name}</h2>
      <p className="text-xl mb-2">{weather.location.region}, {weather.location.country}</p>

      <div className="flex justify-center items-center mb-4">
        <img
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
        />
        <p className="text-xl">{weather.current.condition.text}</p>
      </div>

      <p className="text-xl">Temperature: {weather.current.temp_c}°C / {weather.current.temp_f}°F</p>
      <p className="text-xl">Feels Like: {weather.current.feelslike_c}°C / {weather.current.feelslike_f}°F</p>
      <p className="text-xl">Humidity: {weather.current.humidity}%</p>
      <p className="text-xl">Wind Speed: {weather.current.wind_mph} mph</p>
      <p className="text-xl">Pressure: {weather.current.pressure_mb} mb</p>
      <p className="text-xl">Dewpoint: {weather.current.dewpoint_c}°C / {weather.current.dewpoint_f}°F</p>
      <p className="text-xl">UV Index: {weather.current.uv}</p>
      <p className="text-xl">Gust Speed: {weather.current.gust_mph} mph</p>
    </div>
  );
}
