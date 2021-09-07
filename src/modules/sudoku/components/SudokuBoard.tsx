import React, { Fragment, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks'
import Button from 'react-bootstrap/Button';
import {SudokuCell} from './SudokuCell'
import {useSelector} from 'react-redux'
import * as Constants from '../constants'
import {getFlashColorData, getSudokuSelected, selectCell, updateBoard} from '../reducers/sudoku.slice'
import {getSudokuBoardData} from '../reducers/sudoku.slice'
import BoardData from '../functional/sudokuBoardData';
import './sudoku.css'

export const SudokuBoard = () => {
    const dispatch = useAppDispatch();
    const board = useSelector(getSudokuBoardData);
    const currentSelected = useSelector(getSudokuSelected);
    const flashes = useSelector(getFlashColorData);
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const keyCode = parseInt(e.code); 
            if((keyCode >= 49 && keyCode <= 57) || (keyCode >= 97 && keyCode <= 105))
            {
                const keyPressed = parseInt(e.key); 
                let currentBoard = new BoardData();
                currentBoard.addDataHash(board);
                currentBoard.addEntry(currentSelected, keyPressed - 1);
                dispatch(updateBoard(currentBoard.toDataHash()));
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
                    selected = {i === currentSelected}
                    backgroundColor = {flashes.color[i]}
                    confirmed = {board.confirmedSquares[i]}

                />)
            )}
        </div>
    )
};