import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div
        className={
          darkMode
            ? "dark min-h-screen bg-gray-900 text-white"
            : "min-h-screen bg-white text-black"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
