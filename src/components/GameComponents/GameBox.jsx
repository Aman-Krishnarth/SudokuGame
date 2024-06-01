import GameButton from "./GameButton";

function GameBox({index}){

    return (

        <div className="grid grid-rows-1 grid-cols-9">

            <GameButton value = {index} id={-1}/>
            <GameButton value = {index+1} id={-1}/>
            <GameButton value = {index+2} id={-1}/>
            <GameButton value = {index+3} id={-1}/>
            <GameButton value = {index+4} id={-1}/>
            <GameButton value = {index+5} id={-1}/>
            <GameButton value = {index+6} id={-1}/>
            <GameButton value = {index+7} id={-1}/>
            <GameButton value = {index+8} id={-1}/>

        </div>

    )

}

export default GameBox;