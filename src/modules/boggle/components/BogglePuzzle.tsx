import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap'
import {BoggleBoard} from './BoggleBoard'
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import {getBoggleData} from '../reducers/boggle.slice'
import { setBoard } from '../reducers/boggle.slice';
import {generateFinishedBoard} from '../functional/BoggleBoardData'

import * as Constants from '../constants'
import './BoggleBoard.css'
type BoardProps = {
    board: string[][];
    dictionary: string[];
}

  
export const BogglePuzzle = () => {
    const boardData = generateFinishedBoard();
    const dispatch = useAppDispatch()
    dispatch(setBoard(boardData));
    return (
        <div className = "puzzle">
            <BoggleBoard/>
        </div>
    )
};