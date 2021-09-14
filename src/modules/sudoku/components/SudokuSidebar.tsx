
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'

import {Button} from 'react-bootstrap'
import { addEntry, deleteEntry, flashSquares, getSudokuBoardData, updateBoard } from '../reducers/sudoku.slice'
import BoardData from '../functional/sudokuBoardData'



export const SudokuSidebar = () => {
    const dispatch = useAppDispatch();
    const board = useSelector(getSudokuBoardData);
    
    const handlePuzzleSolve = (e: React.FormEvent) => {
        let i=0;
        const currentBoard = new BoardData();
        currentBoard.addDataHash(board);
        const solution = currentBoard.solvePuzzle();
        let timer = setInterval(function(){
            const index = solution.steps[i].index;
            const number = solution.steps[i].number;
            switch(solution.steps[i].stepTaken)
            {
                case "Added":
                    dispatch(addEntry({index: index, value: number}));
                    dispatch(flashSquares({indices: [index],color: 'rgba(25, 250, 29, 0.6)'}));
                    setTimeout(() => {dispatch(flashSquares({indices: [index],color: 'white'}))}, 200);   
                    break;
                case "Removed":
                    dispatch(deleteEntry(index));
                    dispatch(flashSquares({indices: [index],color: 'rgba(255, 38, 18, 0.8)'}));
                    setTimeout(() => {dispatch(flashSquares({indices: [index],color: 'white'}))}, 200);   
                    break;
                default:
            }
            i++;
            if(i>=solution.steps.length)
            {
                clearInterval(timer);
            }
        }, 400);

        

    }

    const handleNewPuzzle = (e: React.FormEvent) => {
        dispatch(updateBoard(BoardData.generatePuzzleMatchingParameters(1, 30, 20).toDataHash()));
    }

    const handleResetPuzzle = (e: React.FormEvent) => {
        const currentBoard = new BoardData();
        currentBoard.addDataHash(board);
        currentBoard.resetPuzzle();
        dispatch(updateBoard(currentBoard.toDataHash()));

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
                onClick = {handleResetPuzzle}
                className = "sudoku module sidebarbutton"
            >Reset Puzzle
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

