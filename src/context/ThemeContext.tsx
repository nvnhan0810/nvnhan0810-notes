"use client";

import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { ThemeContextType } from "./@types/ThemeContext";

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

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

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>{ children }</ThemeContext.Provider>
    );
};