import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTheme from "../Context/context";

function Header() {
    const { darkTheme, lightTheme, fontColor, isDarkTheme } = useTheme();

    const [isDarkMode, setIsDarkMode] = useState(false);

    console.log(isDarkTheme)

    function handleClick() {
        if (isDarkMode) {
            darkTheme();
        } else {
            lightTheme();
        }

        setIsDarkMode(!isDarkMode);

        console.log(isDarkMode);
    }

    return (
        <>
            <div
                className={`flex p-5 gap-x-9 justify-center w-3/4 m-auto items-center h-min ${fontColor} `}
            >
                <img
                    src="https://imgs.search.brave.com/Xk7hwy64ZYTB7vzQ6mGvZo_0RkbEuOWYnSk5xsLNdSs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/c3Vkb2t1LXdvcmQt/bG9nby1kZXNpZ25f/MTMwOC0xMTQ0MjQu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
                    alt=""
                    className=" h-24 w-24"
                />
                <Link to="/">
                    <button
                        className={`text-4xl hover:rounded-2xl hover:bg-sky-700 p-2  transition-colors ease-in-out duration-200 rounded-xl hover:scale-105 font-extrabold
                        `}
                    >
                        Game
                    </button>
                </Link>
                <Link to="/About">
                    <button
                        className={` text-4xl hover:rounded-2xl hover:bg-sky-700 p-2  transition-colors ease-in-out duration-200 rounded-xl hover:scale-105 font-extrabold`}
                    >
                        About
                    </button>
                </Link>

                <button
                    className={` text-4xl hover:rounded-2xl hover:bg-sky-700 p-2  transition-colors ease-in-out duration-200 rounded-xl hover:scale-105 font-extrabold`}
                    onClick={handleClick}
                >
                    {isDarkMode ? "Dark Theme" : "Light Theme"}
                </button>
            </div>
            <hr  className={`mt-1 w-3/4 mx-auto `}
            style={{
                color: "white",
                backgroundColor: `${isDarkMode? "black" : "white"}`,
                height: 2,
                border: 0
            }}
            />
        </>
    );
}

export default Header;
