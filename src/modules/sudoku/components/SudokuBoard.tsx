import React, { Fragment, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks'
import Button from 'react-bootstrap/Button';
import {SudokuCell} from './SudokuCell'
import {useSelector} from 'react-redux'
import * as Constants from '../constants'
import {flashSquares, getFlashColorData, getSudokuSelected, selectCell, updateBoard} from '../reducers/sudoku.slice'
import {getSudokuBoardData} from '../reducers/sudoku.slice'
import BoardData from '../functional/sudokuBoardData';
import './sudoku.css'

export const SudokuBoard = () => {
    const dispatch = useAppDispatch();
    const board = useSelector(getSudokuBoardData);
    const currentSelected = useSelector(getSudokuSelected);
    const backgroundColor = useSelector(getFlashColorData);
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const keyCode = e.key; 
            const keyPressed = parseInt(keyCode); 
            if(keyCode === "Delete")
            {
                let currentBoard = new BoardData();
                currentBoard.addDataHash(board);
                currentBoard.deleteEntry(currentSelected);
                dispatch(updateBoard(currentBoard.toDataHash()));    
            }
            else if(keyPressed === 1 || keyPressed === 2 ||keyPressed === 3 ||keyPressed === 4 ||keyPressed === 5 ||keyPressed === 6 ||keyPressed === 7 ||keyPressed === 8 ||keyPressed === 9)
            {
                const keyPressed = parseInt(e.key); 
                let currentBoard = new BoardData();
                currentBoard.addDataHash(board);
                const addToBoard = currentBoard.addEntry(currentSelected, keyPressed - 1);
                if(addToBoard.type === "Success")
                {
                    currentBoard.addEntry(currentSelected, keyPressed - 1);
                    dispatch(updateBoard(currentBoard.toDataHash()));    
                }
                else if(addToBoard.type === "Failure")
                {
                    dispatch(flashSquares({indices: addToBoard.blockers, color: "orange"}));
                    setTimeout(()=> {dispatch(flashSquares({indices: addToBoard.blockers, color: "white"}))}, 150)
                }
            }
        };
        window.addEventListener('keydown', handleKeyPress);
               
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
    })

    return (
        <div className = "sudoku moduleboard">
            {board.boardData.map((entry: number, i:number) => (
                <SudokuCell 
                    key = {`sudokuecell${i}`}
                    index = {i}
                    value = {entry}
                    backgroundColor = {backgroundColor[i]}
                    confirmed = {board.confirmedSquares[i]}

                />)
            )}
        </div>
    )
};