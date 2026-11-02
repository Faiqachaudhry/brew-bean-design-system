import { createContext, useContext, useEffect, useState } from "react";
import tokens from "../../tokens.json";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
const [theme, setTheme] = useState(() => {
return localStorage.getItem("brew-bean-theme") || "light";
});

useEffect(() => {
const root = document.documentElement;

root.dataset.theme = theme;

const colorTokens = tokens.colors[theme];

Object.entries(colorTokens).forEach(([key, value]) => {
const cssName = key.replace(
/[A-Z]/g,
(letter) => `-${letter.toLowerCase()}`
);

root.style.setProperty(`--color-${cssName}`, value);
});

Object.entries(tokens.spacing).forEach(([key, value]) => {
root.style.setProperty(`--spacing-${key}`, value);
});

Object.entries(tokens.typography).forEach(([key, value]) => {
root.style.setProperty(`--font-size-${key}`, value);
});

localStorage.setItem("brew-bean-theme", theme);
}, [theme]);

const toggleTheme = () => {
setTheme((currentTheme) =>
currentTheme === "light" ? "dark" : "light"
);
};

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
}

export function useTheme() {
const context = useContext(ThemeContext);

if (!context) {
throw new Error("useTheme must be used inside ThemeProvider");
}

return context;
}
