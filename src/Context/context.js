import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    isDarkTheme: true,
    themeMode: "bg-gray-800",
    fontColor: "white",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
    toggleIsDarkTheme: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}