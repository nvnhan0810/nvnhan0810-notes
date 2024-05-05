"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext);
    
    return (
        <div 
            className={styles.container} 
            onClick={toggle}
            style={
                theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
            }
        >
            <Image src="/moon.png" alt="moon" width={14} height={14} />
            <div 
                className={styles.ball} 
                style={
                    theme === 'dark' 
                        ? { left: 1, backgroundColor: '#0f172a' } 
                        : { right: 1, backgroundColor: 'white' }
                } 
            />
            <Image src="/sun.png" alt="sun" width={14} height={14} />
        </div>
    );
};

export default ThemeToggle;