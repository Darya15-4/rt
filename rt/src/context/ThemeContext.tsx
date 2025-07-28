/*import React, { createContext, useContext, useState } from 'react'
import { ThemeContextType } from '../components/types'



const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider:React.FC<ThemeContextType> = ({children}) => {
        const [theme, setTheme] = useState<'light' | 'dark'>('light');

        const toggleTheme = () => {
            if (theme === 'light') {
                setTheme('dark')
            } else {
                setTheme('light')
            }
            return theme
        };
        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        )
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}; */