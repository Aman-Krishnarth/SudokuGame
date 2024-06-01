import useGame from "../Context/gameContext"

function ValueOption({value}){

    const {setSelectedValueContext, playing} = useGame();

    function handleClick(event){
        if(playing){
            setSelectedValueContext(+event.target.getAttribute("value"))
        }
    }

    return (
        <button
        className="bg-orange-600 p-2 hover:bg-zinc-400 hover:text-gray-100 transition-all ease-in-out duration-200 hover:scale-110 font-semibold text-2xl box-border"
        onClick={handleClick}
        value={value}
        >{value}</button>
    )
}

export default ValueOption