import React, { Fragment } from 'react';
import {PathFinderBoard} from './PathFinderBoard'
import { PathFinderSideBar } from './PathFinderSideBar';
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import './PathFinder.css'
import { getPathFinderBoard, BOARD_HEIGHT, BOARD_WIDTH, addBoard } from '../reducers/pathfinder.slice';
import Board from '../functional/board/board';
type BoardProps = {
    board: string[][];
    dictionary: string[];
}

  
export const PathFinderPuzzle = () => {
    const dispatch = useDispatch();
    return (
        <div className = "module" id = "pathfinder">
            <PathFinderBoard/>
            <PathFinderSideBar/>
        </div>
    )
};