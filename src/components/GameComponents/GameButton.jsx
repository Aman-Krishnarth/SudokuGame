import { useState } from "react";
import useGame from "../../Context/gameContext";

function GameButton({value, id}){

    const {selectedValue,handlePosition} = useGame()    

    function handleClick(event){
        // console.log(event)

        console.log(event.target.getAttribute('value'))
        console.log("gameButton mein se selected value bta raha ",selectedValue)

        const value = +event.target.getAttribute('value');

        handlePosition(Math.floor(value/9),value%9,selectedValue);

    }

    return (

        <div className="bg-yellow-300 text-center gameButtons border-2 border-solid border-black min-h-10 cursor-pointer font-bold text-2xl box-border hover:bg-red-500 transition ease-in-out" onClick={handleClick} value = {value} id = {id}>  </div>

    )

}

export default GameButton