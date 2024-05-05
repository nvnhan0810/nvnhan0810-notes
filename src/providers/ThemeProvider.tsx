"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { FC, ReactNode, useContext, useEffect, useState } from "react";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted && (
        <div className={theme}>
            {children}
        </div>
    );
};

export default ThemeProvider;