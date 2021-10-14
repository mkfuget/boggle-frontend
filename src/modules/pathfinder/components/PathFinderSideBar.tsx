
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'

import {Button} from 'react-bootstrap'
import { BOARD_HEIGHT, BOARD_WIDTH, getPathFinderBoard, getPathFinderCursor, getPuzzle, lightCell, resetCursor } from '../reducers/pathfinder.slice'
import Board from '../functional/board/board'
import Cursor from '../functional/board/cursor'
import { clear } from 'console'



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
                let j=0;
                let timerFinish = setInterval(function(){
                    const currentEntry = solution.foundPath[j];
                    dispatch(lightCell({
                        xIndex: currentEntry.xIndex,
                        yIndex: currentEntry.yIndex,
                        color: Cursor.keysUnlockedColor(currentEntry.bitMask),
                    }));
                    j++;
                    if(j===solution.foundPath.length)
                    {
                        clearInterval(timerFinish);
                    }
                }, 200);
            }
        }, 60);
        
    }
    const handleNewPuzzle = (e: React.FormEvent) => {
        dispatch(getPuzzle());
    }
    const handleExport = (e: React.FormEvent) => {
        let out = "{\n";
        out += '  "id": {\n';
        out += '    "S":\n';    
        out += '  },\n';
        out += '  "createdAt": {\n';
        out += `    "S":"${new Date().toISOString()}"\n`;    
        out += '  },\n';
        out += '  "updatedAt": {\n';
        out += `    "S":"${new Date().toISOString()}"\n`;    
        out += '  },\n';

        out += '  "entries" : {\n';
        out += '    "L": [\n';
        for(let i=0; i<boarddata.length; i++)
        {
            for(let j=0; j<boarddata[i].length; j++)
            {
                out += '      {\n';
                out += `        "S": "${boarddata[i][j]}"\n`;
                out += '      },\n';    
            }
        }    
        out+='    ]\n';
        out+='  }\n';
        out+='}\n'
    }

    const handlePuzzleReset = (e: React.FormEvent) => {
        dispatch(resetCursor());
    }

    const handleConceptsSidebarToggle = (e: React.FormEvent) => {
        dispatch(toggle());
    }
    
    return (
        
        <div className = "pathfinder modulesidebar">
            <div className = "pathfinder modulesidebartitle">
                Path Finder
            </div>
            <div className = "pathfinder modulesidebardescription">
                Unlock keys to get through corresponding colored blocks and try to make your way to the finish. 
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
                onClick = {handlePuzzleReset}
                className = "pathfinder module sidebarbutton"
            >Reset Puzzle
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

