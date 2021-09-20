
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'

import {Button} from 'react-bootstrap'
import { BOARD_HEIGHT, BOARD_WIDTH, getPathFinderBoard, getPathFinderCursor, lightCell } from '../reducers/pathfinder.slice'
import Board from '../functional/board/board'
import Cursor from '../functional/board/cursor'



export const PathFinderSideBar = () => {
    const dispatch = useAppDispatch();
    const boarddata = useSelector(getPathFinderBoard);
    const cursorData = useSelector(getPathFinderCursor);

    const board = Board.initializeBoard(BOARD_WIDTH, BOARD_HEIGHT, boarddata);
    const cursor = new Cursor(board);
    cursor.xIndex = cursorData.xIndex;
    cursor.yIndex = cursorData.yIndex;
    cursor.bitMask = cursorData.bitMask;


    
    const handlePuzzleSolve = (e: React.FormEvent) => {
        const solution = board.dijsktra(cursor);
        console.log(solution);
        let i=0;
        let finalPath = false;
        let timer = setInterval(function(){
            const currentCursor = solution.searchPath[i];
            dispatch(lightCell({
                xIndex: currentCursor.xIndex,
                yIndex: currentCursor.yIndex,
                color: currentCursor.cursorColor(),
            }));
            i++;
            if(i === solution.searchPath.length )
            {
                clearInterval(timer);
                finalPath = true;
                i=0;
            }

        }, 60);
        
    }

    const handleNewPuzzle = (e: React.FormEvent) => {
    
    }

    const handleWordReset = (e: React.FormEvent) => {

    }

    const handleConceptsSidebarToggle = (e: React.FormEvent) => {
        dispatch(toggle());
    }
    
    return (
        
        <div className = "pathfinder modulesidebar">
            <div className = "pathfinder modulesidebartitle">
                Boggle
            </div>
            <div className = "pathfinder modulesidebardescription">
                Words can be connected up, down, left, right, or diagonally. Re-click on a letter to return the string to that point. See if you can find all the words. 
            </div>
            <Button 
                variant="outline-primary" 
                onClick = {handlePuzzleSolve}
                className = "pathfinder module sidebarbutton"
            >Solve Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleNewPuzzle}
                className = "pathfinder module sidebarbutton"
            >New Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleWordReset}
                className = "pathfinder module sidebarbutton"
            >Reset Word
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleConceptsSidebarToggle}
                className = "pathfinder module sidebarbutton"
                
            >Explore Concepts
            </Button>

        </div>
    )
}

