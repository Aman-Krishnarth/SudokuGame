import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import useGame from "../Context/gameContext";

function StopWatch() {

    
    const {playing,boxes} = useGame()
    // console.log(boxes)
    console.log(Math.random())

    // const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalId = useRef(null)
    const startTime = useRef(0);

    useEffect(()=>{

        if(playing){
            startTime.current = Date.now() - elapsedTime;
            intervalId.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTime.current)
            },10)

        }

        return ()=>{
            setElapsedTime(0)
            clearInterval(intervalId.current)
        }

    },[playing])

    function startTimer(){

        // setIsRunning(true)
        startTime.current = Date.now() - elapsedTime;

    }

    function stopTimer(){

        // setIsRunning(false)

    }

    function resetTimer(){

        setElapsedTime(0)
        setIsRunning(false)

    }

    function formatTime(){

        // console.log("format time call hua hai")
        // console.log(elapsedTime)

        let hours = (""+Math.floor(elapsedTime/ (1000 * 60 * 60))).padStart(2,"0")

        let minutes = (""+Math.floor(elapsedTime/ (1000 * 60)%60)).padStart(2,"0")
        
        let seconds = (""+Math.floor(elapsedTime/ (1000)%60)).padStart(2,"0")

        return `${hours} : ${minutes} : ${seconds}`

    }

    return (
        <>

            <h1
            className="text-3xl text-center font-bold"
            >{formatTime()}</h1>
        </>
    );
}

export default StopWatch;
