import useTheme from "../Context/context";

const About = ()=>{

    const {isDarkTheme, fontColor} = useTheme()
    

    return (
        <>
        
        <div className=" animate-fadeIn">
        <h1 className={`p-2 text-center font-bold text-2xl ${fontColor}`}>About Sudoku Game</h1>
        <hr
        className="w-1/2 mx-auto"
    
        style={{
            color: "white",
            backgroundColor: `${isDarkTheme ? "white" : "black"}`,
            height: 7,
            border: 0
        }} />
        <p className={`p-2 mx-auto my-2 w-3/5 font-semibold ${fontColor}`}>Sudoku is a popular logic-based number puzzle game that gained widespread popularity in the early 2000s. The game consists of a 9x9 grid, divided into nine 3x3 subgrids or regions. The objective is to fill the grid with digits from 1 to 9, ensuring that each row, each column, and each of the nine 3x3 subgrids contains all of the digits from 1 to 9 without repetition.</p>

        <p className={`p-2 mx-auto my-2 w-3/5 font-semibold ${fontColor}`}>A Sudoku puzzle starts with some cells already filled with numbers, and the player's task is to fill in the remaining cells according to the rules. The puzzle is designed in such a way that there is only one correct solution.</p>

        <p className={`p-2 mx-auto my-2 w-3/5 font-semibold ${fontColor}`}>Sudoku puzzles vary in difficulty, with some requiring simple logic and deduction techniques to solve, while others may demand more advanced strategies and techniques. The game has gained immense popularity due to its simplicity, yet challenging nature, making it a favorite pastime for puzzle enthusiasts worldwide.</p>

        <p className={`p-2 mx-auto my-2 w-3/5 font-semibold ${fontColor}`}>Sudoku has also been adapted into various forms, including digital versions for computers, smartphones, and tablets. These digital adaptations often include features like hint systems, automatic error checking, and different difficulty levels to cater to players of all skill levels. Additionally, Sudoku competitions and tournaments are held regularly, further showcasing its enduring appeal.</p>

        </div>
        </>
    )
}

export default About;