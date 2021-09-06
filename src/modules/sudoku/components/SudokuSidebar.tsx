
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'

import {Button} from 'react-bootstrap'



export const SudokuSidebar = () => {
    const dispatch = useAppDispatch();

    
    const handlePuzzleSolve = (e: React.FormEvent) => {
        let i=0;
        let timer = setInterval(function(){
            i++;
            if(i===100)
            {
                clearInterval(timer);
            }
        }, 125);

        

    }

    const handleNewPuzzle = (e: React.FormEvent) => {
    
    }

    const handleWordReset = (e: React.FormEvent) => {
    }

    const handleConceptsSidebarToggle = (e: React.FormEvent) => {
        dispatch(toggle());
    }
    
    return (
        
        <div className = "sudoku modulesidebar">
            <div className = "sudoku modulesidebartitle">
                Sudoku
            </div>
            <div className = "sudoku modulesidebardescription">
                Each row, column and square can only contain one of each number 1-9. See if you can solve the puzzle.  
            </div>
            <Button 
                variant="outline-primary" 
                onClick = {handlePuzzleSolve}
                className = "sudoku module sidebarbutton"
            >Solve Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleNewPuzzle}
                className = "sudoku module sidebarbutton"
            >New Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleWordReset}
                className = "sudoku module sidebarbutton"
            >Reset Word
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleConceptsSidebarToggle}
                className = "boggle module sidebarbutton"
                
            >Explore Concepts
            </Button>

        </div>
    )
}

