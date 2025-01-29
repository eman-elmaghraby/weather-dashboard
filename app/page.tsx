"use client";

import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "@/store/slices/weatherSlice";
import ThemeToggle from "@/components/ThemeToggle";
import SearchBar from "@/components/SearchBar";
import ErrorMessage from "@/components/ErrorMessage";
import WeatherCard from "@/components/WeatherCard";

export default function Home() {
  const dispatch = useDispatch();
  const { weather, error } = useSelector((state: RootState) => state.weather);
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    dispatch(setError(""));
  }, [dispatch]);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } transition-all`}
    >
      <div className="container mx-auto p-4">
        <ThemeToggle />
        <h1 className="text-4xl font-bold text-center mb-8">Weather Dashboard</h1>
        <SearchBar />

        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}
