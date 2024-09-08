import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeProviderContext = createContext<{ name: string } | undefined>(
    undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProviderContext.Provider value={{ name: "hello" }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within the ThemeProvider");
    }

    return context;
};
