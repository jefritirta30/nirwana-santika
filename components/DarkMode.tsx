"use client";
import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load initial dark mode preference from localStorage
  useEffect(() => {
    const darkModePreference = localStorage.getItem("dark-mode");
    if (darkModePreference === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("dark-mode", newMode.toString());
      document.body.classList.toggle("dark-mode", newMode);
      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode} className={`${isDarkMode ? "text-white " : "text-black"}`}>
      {isDarkMode ? <FaSun /> : <FaMoon />} 
    </button>
  );
}
