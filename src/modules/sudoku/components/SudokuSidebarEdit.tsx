
import React, { useState } from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'

import {Button} from 'react-bootstrap'
import { addEntry, confirmSquares, deleteEntry, flashSquares, getSudokuBoardData, updateBoard } from '../reducers/sudoku.slice'
import BoardData from '../functional/sudokuBoardData'
import { SolutionBuilder } from 'typescript'
import { addIndex } from '../../boggle/reducers/boggle.slice'

export const SudokuSidebarEdit = () => {
    const dispatch = useAppDispatch();
    const board = useSelector(getSudokuBoardData);
    const [branches, setBranches] = useState(0);
    const [solutions, setSolutions] = useState(0);

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

    const handleConfirmSquares = (e: React.FormEvent) => {
        const currentBoard = new BoardData();
        currentBoard.addDataHash(board);
        for(let i=0; i<currentBoard.boardData.length; i++)
        {
            if(currentBoard.boardData[i] !== -1)
            {
                currentBoard.confirmedSquares[i] = true;
            }
        }
        dispatch(updateBoard(currentBoard));
    }
    
    const handleUnconfirmSquares = (e: React.FormEvent) => {
        const currentBoard = new BoardData();
        currentBoard.addDataHash(board);
        for(let i=0; i<currentBoard.boardData.length; i++)
        {
            currentBoard.confirmedSquares[i] = false;
        }
        dispatch(updateBoard(currentBoard));
    }

    const handleCalculateStats = (e: React.FormEvent) => {
        const currentBoard = new BoardData();
        currentBoard.addDataHash(board);
        const solution = currentBoard.solvePuzzle();
        setBranches(solution.steps.length/(currentBoard.heapSize/4));
        setSolutions(solution.solutions);
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
                onClick = {handleUnconfirmSquares}
                className = "boggle module sidebarbutton"
                
            >Unconfirm Squares
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleCalculateStats}
                className = "boggle module sidebarbutton"
                
            >Calculate Stats
            </Button>

            <div>
                branches: {branches}
            </div>
            <div>
                solutions: {solutions}
            </div>

        </div>
    )
}

  