import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap'
import {SudokuBoard} from './SudokuBoard'
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import {updateBoard} from '../reducers/sudoku.slice';
import BoardData from '../functional/sudokuBoardData'

import * as Constants from '../constants'
import './sudokuBoard.css'
  
export const BogglePuzzle = () => {
    const boardData = new BoardData();
    const dispatch = useAppDispatch()
    dispatch(updateBoard(boardData.toDataHash()));
    return (
        <div className = "puzzle">
            <SudokuBoard/>
        </div>
    )
};