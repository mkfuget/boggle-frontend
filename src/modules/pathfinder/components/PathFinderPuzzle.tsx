import React, { Fragment } from 'react';
import {PathFinderBoard} from './PathFinderBoard'
import { PathFinderSideBar } from './PathFinderSideBar';
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import './PathFinder.css'
import { getPathFinderBoard, BOARD_HEIGHT, BOARD_WIDTH, addBoard, updateCursor } from '../reducers/pathfinder.slice';
import Board from '../functional/board/board';
import Cursor from '../functional/board/cursor';
const TEST_BOARD = [
    ["R", "E", "E", "E", "E", "E", "r", "E", "E", "B"], 
    ["W", "W", "W", "E", "W", "E", "r", "E", "E", "E"], 
    ["S", "E", "W", "E", "W", "E", "r", "E", "E", "E"], 
    ["E", "E", "E", "E", "W", "E", "r", "b", "b", "b"], 
    ["E", "E", "E", "E", "E", "E", "r", "E", "E", "E"], 
    ["W", "W", "W", "W", "E", "E", "r", "E", "F", "E"], 
    ["E", "E", "E", "E", "E", "E", "r", "E", "E", "E"], 
    ["E", "W", "W", "E", "E", "E", "r", "E", "E", "E"], 
    ["E", "E", "W", "E", "E", "E", "r", "E", "E", "E"], 
    ["E", "R", "W", "E", "E", "E", "r", "E", "E", "E"], 

]
type BoardProps = {
    board: string[][];
    dictionary: string[];
}

  
export const PathFinderPuzzle = () => {
    const dispatch = useDispatch();
    const board = Board.initializeBoard(BOARD_WIDTH, BOARD_HEIGHT, TEST_BOARD);
    const cursor = new Cursor(board);

    dispatch(addBoard(TEST_BOARD));
    dispatch(updateCursor({
        xIndex: cursor.xIndex,
        yIndex: cursor.yIndex,
        bitMask: cursor.bitMask,
    }))

    return (
        <div className = "module" id = "pathfinder">
            <PathFinderBoard/>
            <PathFinderSideBar/>
        </div>
    )
};