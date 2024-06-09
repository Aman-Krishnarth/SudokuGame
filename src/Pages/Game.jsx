import { useEffect, useRef } from "react";
import { useState } from "react";
import GameBox from "../components/GameComponents/GameBox";
import { GameContextProvider } from "../Context/gameContext";
import ValueOption from "../components/ValueOption";
import StopWatch from "../components/StopWatch";
import useTheme from "../Context/context";
import { toast } from "react-toastify";

const Game = () => {
    const boxesFilled = useRef(0);

    const { themeMode, fontColor, isDarkTheme } = useTheme();

    const [selectedValue, setSelectedValue] = useState(-1);

    const [gameButtons, setGameButtons] = useState();

    const [playing, setPlaying] = useState(false);

    const [boxes, setBoxes] = useState(0);

    const [showToasts, setShowToasts] = useState(false);

    useEffect(() => {
        setGameButtons(document.querySelectorAll(".gameButtons"));
    }, []);

    function updateIsPlaying() {
        if (playing) {
            setPlaying(false);
        } else {
            setPlaying(true);
        }
        setBoxes(0);
    }

    function setSelectedValueContext(s) {
        // console.log(`selectedValue aaya hai ${s}`);
        setSelectedValue(s);
    }

    function canAdd(row, col, selectedValue) {
        //col check crow
        for (let c = 0; c < 9; c++) {
            if (
                +gameButtons[row * 9 + c].getAttribute("id") === selectedValue
            ) {
                return false;
            }
        }

        //row check crow
        for (let r = 0; r < 9; r++) {
            if (
                +gameButtons[r * 9 + col].getAttribute("id") === selectedValue
            ) {
                return false;
            }
        }

        return true;
    }

    function updateGame(row, col, selectedValue) {
        gameButtons[row * 9 + col].setAttribute("id", selectedValue);
        gameButtons[row * 9 + col].textContent = selectedValue;
    }

    function handlePosition(row, col, selectedValue) {
        console.log("HANDLE POSITION");
        console.log(row, col, selectedValue);
        if (canAdd(row, col, selectedValue)) {
            updateGame(row, col, selectedValue);
            boxesFilled.current++;
            if (showToasts) {
                toast.success("Value added");
            }
        } else {
            if (showToasts && selectedValue != -1) {
                toast.error("Value not added");
            }
        }
        setSelectedValue(-1);
    }

    function handlePlay() {
        if (!playing) {
            console.log("GAME START HUA HAI");

            let i = 0;

            while (i < 10) {
                let v = (Math.floor(Math.random() * 10) % 9) + 1;

                let row = Math.floor((Math.random() * 10) % 9);

                let col = Math.floor((Math.random() * 10) % 9);

                console.log(v, row, col);

                if (+gameButtons[row * 9 + col].getAttribute("id") === -1) {
                    console.log(gameButtons[row * 9 + col]);

                    if (canAdd(row, col, v)) {
                        updateGame(row, col, v);
                        i++;
                        boxesFilled.current++;
                        // alert("value added")
                    }
                }
            }

            setShowToasts(true);
        } else {
            console.log("GAME BAND HO GAYA");

            for (let i = 0; i < gameButtons.length; i++) {
                gameButtons[i].setAttribute("id", -1);
                gameButtons[i].textContent = "";
            }
        }
        updateIsPlaying();
    }

    return (
        <GameContextProvider
            value={{
                selectedValue,
                setSelectedValueContext,
                updateGame,
                playing,
                updateIsPlaying,
                handlePosition,
                boxes,
            }}
        >
            <div className = "animate-fadeIn">
                <button
                    className={`block p-8 text-center  mx-auto my-2 font-bold py-3 text-4xl hover:scale-110 transition-all duration-150 ease-in-out rounded-2xl hover:bg-sky-700 ${fontColor}`}
                    onClick={handlePlay}
                >
                    {playing ? <p>Reset</p> : <p>Play</p>}
                </button>
                {/* game ka navbar hai yeh */}
                <div
                    className={`grid gap-4 grid-rows-3 grid-cols-3 w-2/6 m-auto h-min ${fontColor}`}
                >
                    {/* <ValueOption value={0} /> */}
                    <ValueOption value={1} />
                    <ValueOption value={2} />
                    <ValueOption value={3} />
                    <ValueOption value={4} />
                    <ValueOption value={5} />
                    <ValueOption value={6} />
                    <ValueOption value={7} />
                    <ValueOption value={8} />
                    <ValueOption value={9} />
                </div>

                <h1 className={`p-3 text-center text-2xl ${fontColor}`}>
                    {/* {selectedValue === -1? <p>Select a value</p> : <p>Selected value = {selectedValue}</p>} */}

                    {playing ? (
                        selectedValue === -1 ? (
                            <p>Select a value</p>
                        ) : (
                            <p>Selected value = {selectedValue}</p>
                        )
                    ) : (
                        <p>Start playing to select values</p>
                    )}
                </h1>

                <div className={`bg-${themeMode} ${fontColor} time`}>
                    <StopWatch />
                </div>

                <div
                    className={` bg-zinc-400 grid grid-rows-1 w-1/2 m-auto ${fontColor}`}
                >
                    <GameBox index={0} />
                    <GameBox index={9} />
                    <GameBox index={18} />
                    <GameBox index={27} />
                    <GameBox index={36} />
                    <GameBox index={45} />
                    <GameBox index={54} />
                    <GameBox index={63} />
                    <GameBox index={72} />
                </div>
            </div>
        </GameContextProvider>
    );
};

export default Game;
