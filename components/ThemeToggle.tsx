"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleTheme } from "@/store/slices/themeSlice";
import { useEffect } from "react";

import React, { createContext} from "react";

const ThemeContext = createContext({ toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value={{ toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default function ThemeToggle() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);
  
    
    useEffect(() => {
      document.body.className = theme === "dark" ? "dark" : "light";
    }, [theme]);
  
    return (
      <div className="flex justify-end mb-4">
        <button
          onClick={() => dispatch(toggleTheme())} 
          className={`${
            theme === "dark" ? "bg-gray-500 text-white" : "bg-white text-black"
          } p-2 rounded-lg font-bold shadow-lg text-center transition-all`}
          
        >
          Toggle {theme === "light" ? "Light" : "Dark"} Mode
        </button>
      </div>
    );
  }