import React, { Fragment, useEffect, useState } from 'react';
import {PathFinderBoard} from './PathFinderBoard'
import { PathFinderSideBar } from './PathFinderSideBar';
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import './PathFinder.css'
import { getPathFinderBoard, BOARD_HEIGHT, BOARD_WIDTH, addBoard, updateCursor, getPuzzle } from '../reducers/pathfinder.slice';
import Board from '../functional/board/board';
import Cursor from '../functional/board/cursor';
import { API, graphqlOperation } from 'aws-amplify';
import { getPathFinderPuzzle, listPathFinderPuzzles } from '../../../graphql/queries';
const TEST_BOARD = [
    ["E", "E", "W", "E", "E", "E", "W", "E", "W", "S"], 
    ["W", "E", "E", "E", "E", "E", "W", "E", "W", "E"], 
    ["E", "E", "W", "W", "E", "E", "E", "E", "E", "E"], 
    ["E", "E", "W", "E", "E", "E", "W", "E", "W", "E"], 
    ["E", "W", "W", "b", "b", "b", "E", "E", "W", "E"], 
    ["B", "W", "E", "r", "F", "b", "E", "E", "W", "E"], 
    ["E", "E", "E", "r", "r", "r", "E", "E", "E", "E"], 
    ["E", "W", "E", "W", "E", "E", "E", "W", "W", "W"], 
    ["E", "W", "E", "E", "E", "W", "W", "W", "E", "R"], 
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"], 

]
type BoardProps = {
    board: string[][];
    dictionary: string[];
}

const NUM_PUZZLES = 5;
  
export const PathFinderPuzzle = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPuzzle(1));
    }, [])

    return (
        <div className = "module" id = "pathfinder">
            <PathFinderBoard/>
            <PathFinderSideBar/>
        </div>
    )
};