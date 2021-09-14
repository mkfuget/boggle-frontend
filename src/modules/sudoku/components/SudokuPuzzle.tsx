import React, {useEffect } from 'react';
import {Button} from 'react-bootstrap'
import {SudokuBoard} from './SudokuBoard'
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import {updateBoard, selectCell} from '../reducers/sudoku.slice';
import BoardData from '../functional/sudokuBoardData'

import * as Constants from '../constants'
import './sudoku.css'
import { SudokuSidebar } from './SudokuSidebar';
  
export const SudokuPuzzle = () => {

    const boardData = new BoardData();
    const dispatch = useAppDispatch()
    dispatch(updateBoard(BoardData.generatePuzzleMatchingParameters(1, 30, 20).toDataHash()));
    return (
        <div className = "module entry sudoku"
        >
            <SudokuBoard/>
            <SudokuSidebar/>
        </div>
    )
};