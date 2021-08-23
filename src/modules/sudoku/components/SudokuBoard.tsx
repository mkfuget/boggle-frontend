import React, { Fragment } from 'react';
import { useAppDispatch } from '../../../hooks'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import {SudokuCell} from './SudokuCell'
import {useSelector} from 'react-redux'
import * as Constants from '../constants'
import {updateBoard} from '../reducers/sudoku.slice'
import {getSudokuBoardData} from '../reducers/sudoku.slice'

import './SudokuBoard.css'
export const SudokuBoard = () => {
    const dispatch = useAppDispatch();

    const board = useSelector(getSudokuBoardData);
    
    return (
        <div className = "content">
            <div className = "puzzle">
                <div className = "board">
                    /*
                    {board.boardData.map((entry: number, i:number) => (
                        <SudokuCell 
                            index = {i}
                            value = {entry}
                            selected = {false}
                        />)
                    )}
                    */
                </div>
            </div>

            <div className = "contentsidebar">
                <Button variant="outline-primary">Solve</Button>
            </div>
        </div>
    )
};