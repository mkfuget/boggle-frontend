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
        const controlDown = (e: KeyboardEvent) => {
            const keyPressed:number = parseInt(e.key);
            if(keyPressed !==NaN && keyPressed!== 0)
            {
                let currentBoard = new BoardData();
                currentBoard.addDataHash(board);
                currentBoard.addEntry(currentSelected, keyPressed);
                dispatch(updateBoard(currentBoard.toDataHash()));
            }
        };
        window.addEventListener('keydown', controlDown);
               
        return () => {
          window.removeEventListener('keydown', controlDown);
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

                />)
            )}
        </div>
    )
};