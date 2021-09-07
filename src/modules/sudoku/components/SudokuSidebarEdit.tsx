
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'

import {Button} from 'react-bootstrap'
import { confirmSquares } from '../reducers/sudoku.slice'



export const SudokuSidebarEdit = () => {
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

    const handleConfirmSquares = (e: React.FormEvent) => {
        dispatch(confirmSquares);
    }
    
    const handleExport = (e: React.FormEvent) => {

    }

    return (
        
        <div className = "sudoku modulesidebar">
            <div className = "sudoku modulesidebartitle">
                Sudoku EDIT
            </div>
            <div className = "sudoku modulesidebardescription">
                FOR ADMIN ONLY  
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
                onClick = {handleConfirmSquares}
                className = "sudoku module sidebarbutton"
            >Confirm Squares
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleExport}
                className = "boggle module sidebarbutton"
                
            >Export Puzzle
            </Button>

        </div>
    )
}

