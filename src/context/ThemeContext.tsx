"use client";

import { FC, ReactNode, createContext, useState } from "react";
import { ThemeContextType } from "./@types/ThemeContext";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const getFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('theme');

        return value || "light";
    }

    return "light";
};

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>(() => {
        return getFromLocalStorage();
    });

    return (
        <ThemeContext.Provider value={{ theme }}>{ children }</ThemeContext.Provider>
    );
};