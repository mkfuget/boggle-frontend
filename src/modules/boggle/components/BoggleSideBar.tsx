
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {addIndex, removeIndex} from '../reducers/boggle.slice'
import {useSelector} from 'react-redux'
import {getBoggleData} from '../reducers/boggle.slice'
import {generateSolution} from '../functional/BoggleBoardData'
import {Button} from 'react-bootstrap'



export const BoggleSideBar = () => {
    const dispatch = useAppDispatch();
    const board = useSelector(getBoggleData).board;
    const dictionary = Object.keys(useSelector(getBoggleData).dictionary);

    
    const handlePuzzleSolve = (e: React.FormEvent) => {
        const solutionSteps = generateSolution({
            board: board,
            dictionary: dictionary,
        })

        let i=0;
        let timer = setInterval(function(){
            switch(solutionSteps[i].type)
            {
                case "added":
                    dispatch(addIndex({xIndex: solutionSteps[i].xIndex, yIndex: solutionSteps[i].yIndex}))
                    break;
                case "removed":
                    dispatch(removeIndex({xIndex: solutionSteps[i].xIndex, yIndex: solutionSteps[i].yIndex}))
                    break;
            }
            i++;
            if(i===solutionSteps.length)
            {
                clearInterval(timer);
            }
        }, 125);

        

    }

    const handleClick = (e: React.FormEvent) => {

    }
    
    return (
        
        <div id = "bogglesidebar">
            <div className = "boggle title">
                Boggle
            </div>
            <div className = "boggle description">
                Words can be connected up, down, left, right, or diagonally. Re-click on a letter to return the string to that point. See if you can find all the words. 
            </div>
            <Button 
                variant="outline-primary" 
                onClick = {handlePuzzleSolve}
                className = "boggle sidebar button"
            >Solve Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handlePuzzleSolve}
                className = "boggle sidebar button"
            >New Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handlePuzzleSolve}
                className = "boggle sidebar button"
            >Reset Word
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handlePuzzleSolve}
                className = "boggle sidebar button"
            >Explore Concepts
            </Button>

        </div>
    )
}

