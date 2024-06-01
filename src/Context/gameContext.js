import { createContext, useContext } from "react";

export const GameContext = createContext({
    selectedValue: -1,
    setSelectedValueContext: ()=>{},
    updateGame: ()=>{},
    playing: false,
    updateIsPlaying: ()=>{},
    handlePosition: ()=>{},
    boxes: 0,
})

export const GameContextProvider = GameContext.Provider

export default function useGame(){
    return useContext(GameContext)
}