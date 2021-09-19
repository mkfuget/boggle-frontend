import React from 'react';
import {PathFinderCell} from './PathFinderCell'
import { useAppDispatch } from '../../../hooks'
import { useState } from 'react'

import {useSelector} from 'react-redux'

import './PathFinder.css'
import { getPathFinderBackgroundImages, getPathFinderBoard, getPathFinderBoardColors } from '../reducers/pathfinder.slice';
export const PathFinderBoard = () => {
    const dispatch = useAppDispatch();
    const board = useSelector(getPathFinderBoard);
    const colors = useSelector(getPathFinderBoardColors);
    const backGroundImages = useSelector(getPathFinderBackgroundImages);

    return (
        <div id = "pathfinderpuzzle" className = "pathfinder moduleboard">
            <div className = "puzzle">
                <div className = "pathfinderpuzzle">
                    {board.map((row: string[], i:number) => (<>
                        {row.map((cell: string, j:number) => (
                            <PathFinderCell 
                                key = {`cell_row${i}_col${j}`}
                                xIndex={j}
                                yIndex = {i}
                                color = {colors[j][i]}
                                backgroundImage = {backGroundImages[j][i]}

                            />))}
                        </>)
                    )}
                </div>
            </div>

        </div>
    )
};