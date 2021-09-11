import React, {useEffect } from 'react';
import {Button} from 'react-bootstrap'
import {SudokuBoard} from './SudokuBoard'
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import {updateBoard, selectCell} from '../reducers/sudoku.slice';
import BoardData from '../functional/sudokuBoardData'

import * as Constants from '../constants'
import './sudoku.css'
import { SudokuSidebarEdit } from './SudokuSidebarEdit';
const testBoardAlpha = () =>{
    let currentBoard = new BoardData();
    currentBoard.addEntry(5, 6 - 1)
    currentBoard.addEntry(6, 8 - 1)
    currentBoard.addEntry(10, 6 - 1)
    currentBoard.addEntry(16, 4 - 1)
    currentBoard.addEntry(18, 8 - 1)
    currentBoard.addEntry(20, 9 - 1)
    currentBoard.addEntry(25, 5 - 1)
    currentBoard.addEntry(30, 8 - 1)
    currentBoard.addEntry(35, 2- 1)
    currentBoard.addEntry(36, 1 - 1)
    currentBoard.addEntry(38, 6 - 1)
    currentBoard.addEntry(39, 3 - 1)
    currentBoard.addEntry(49, 2 - 1)
    currentBoard.addEntry(51, 7- 1)
    currentBoard.addEntry(51, 7- 1)
    currentBoard.addEntry(56, 8- 1)
    currentBoard.addEntry(61, 1- 1)
    currentBoard.addEntry(63, 9- 1)
    currentBoard.addEntry(71, 7- 1)
    currentBoard.addEntry(73, 4- 1)
    currentBoard.addEntry(74, 5- 1)
    currentBoard.addEntry(75, 9- 1)
    currentBoard.addEntry(79, 8- 1)
    currentBoard.confirmCurrentEntries();
    return currentBoard;
}
  
export const SudokuPuzzleEdit = () => {

    const boardData = testBoardAlpha();
    const dispatch = useAppDispatch()
    dispatch(updateBoard(boardData.toDataHash()));
    return (
        <div className = "module entry sudoku"
        >
            <SudokuBoard/>
            <SudokuSidebarEdit/>

        </div>
    )
};