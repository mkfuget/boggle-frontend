import React, { useEffect } from 'react';
import {PathFinderCell} from './PathFinderCell'
import { useAppDispatch } from '../../../hooks'
import { useState } from 'react'

import {useSelector} from 'react-redux'

import './PathFinder.css'
import { getPathFinderBoard, getPathFinderBoardColors, getPathFinderCursor, updateCursor } from '../reducers/pathfinder.slice';
import { PathFinderCursor } from './PathFinderCursor';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../reducers/pathfinder.slice';
import Board from '../functional/board/board';
import Cursor from '../functional/board/cursor';
export const PathFinderBoard = () => {
    const dispatch = useAppDispatch();
    const boarddata = useSelector(getPathFinderBoard);
    const cursorData = useSelector(getPathFinderCursor);
    const colors = useSelector(getPathFinderBoardColors);
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const board = Board.initializeBoard(BOARD_WIDTH, BOARD_HEIGHT, boarddata);
            const cursor = new Cursor(board);
            cursor.xIndex = cursorData.xIndex;
            cursor.yIndex = cursorData.yIndex;
            cursor.bitMask = cursorData.bitMask;

            const keyCode = e.code; 
            if(keyCode === "KeyW" || keyCode === "ArrowUp")
            {
                cursor.move(0, -1);
            }
            if(keyCode === "KeyA" || keyCode === "ArrowLeft")
            {
                cursor.move(-1, 0);
            }
            if(keyCode === "KeyS" || keyCode === "ArrowDown")
            {
                cursor.move(0, 1);
            }
            if(keyCode === "KeyD" || keyCode === "ArrowRight")
            {
                cursor.move(1, 0);
            }
            dispatch(updateCursor({
                xIndex: cursor.xIndex,
                yIndex: cursor.yIndex,
                bitMask: cursor.bitMask,
            }))
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
          };
      })
      return (
        <div id = "pathfinderpuzzle" className = "pathfinder moduleboard">
            <div className = "puzzle">
                <div className = "pathfinderpuzzle">
                    {boarddata.map((row: string[], i:number) => (<>
                        {row.map((cell: string, j:number) => (
                            <PathFinderCell 
                                key = {`cell_row${i}_col${j}`}
                                xIndex={j}
                                yIndex = {i}
                                color = {colors[j][i]}
                                type = {cell}

                            />))}
                        </>)
                    )}
                    <PathFinderCursor/>
                </div>
            </div>

        </div>
    )
};