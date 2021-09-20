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
    ["I", "E", "E", "E", "E", "y", "r", "E", "E", "E"], 
    ["I", "E", "I", "E", "E", "g", "r", "E", "E", "E"], 
    ["S", "E", "E", "E", "E", "b", "r", "E", "E", "E"], 
    ["E", "E", "E", "E", "E", "r", "r", "E", "E", "E"], 
    ["E", "E", "E", "E", "E", "E", "r", "E", "F", "E"], 
    ["E", "E", "E", "E", "E", "E", "r", "E", "E", "E"], 
    ["I", "E", "E", "E", "E", "E", "r", "E", "E", "E"], 
    ["I", "E", "E", "E", "E", "E", "r", "E", "E", "E"], 
    ["W", "E", "E", "E", "E", "E", "r", "E", "E", "E"], 
    ["W", "R", "E", "E", "E", "E", "r", "E", "E", "E"], 

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