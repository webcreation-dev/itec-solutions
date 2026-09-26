"use client";

import { createContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({
    children,
    defaultTheme = "",
}: {
    children: React.ReactNode;
    defaultTheme?: Theme;
}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        const html = document.documentElement;

        // remove previous classes
        html.classList.remove("aleric-dark", "aleric-light");

        // add class only if theme exists
        if (theme === "dark") {
            html.classList.add("aleric-dark");
        }

        if (theme === "light") {
            html.classList.add("aleric-light");
        }

        return () => {
            html.classList.remove("aleric-dark", "aleric-light");
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};