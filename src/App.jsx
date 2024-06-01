import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./Context/context";
import { useEffect, useState } from "react";

function App() {

	const [themeMode, setThemeMode] = useState()
	const [fontColor, setFontColor] = useState('white')
	const [isDarkTheme, setIsDarkTheme] = useState(true)

	useEffect(()=>{
		setThemeMode("bg-gray-800")
		setFontColor("text-white")
		console.log(fontColor)
	},[])

	function darkTheme(){
		setThemeMode("bg-gray-800")
		setFontColor('text-white')
		setIsDarkTheme(true)
	}

	function lightTheme(){
		setThemeMode("bg-slate-300")
		setFontColor("text-black")
		setIsDarkTheme(false)
	}

    return (
		<ThemeProvider value={{ isDarkTheme,themeMode, darkTheme, lightTheme, fontColor, setIsDarkTheme}}>
            <div className = {`${themeMode} container`}>
                <div className="">
                    <Header />
                </div>

                <div className="p-2">
                    <Outlet />
                </div>
                <div className="">
                    <Footer />
                </div>
            </div>
		</ThemeProvider>

    );
}

export default App;
