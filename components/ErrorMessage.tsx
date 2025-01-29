import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-red-800 text-white border-red-600" : "bg-red-100 text-red-700 border-red-400"
      } border px-4 py-3 rounded-lg mb-4 text-center transition-all`}
    >
      {message}
    </div>
  );
}
