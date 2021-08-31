import React, { Fragment } from 'react';
import {BoggleBoard} from './BoggleBoard'
import { BoggleSideBar } from './BoggleSideBar';
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

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
        <div id = "boggle">
            <BoggleBoard/>
            <BoggleSideBar/>
        </div>
    )
};