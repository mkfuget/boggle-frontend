import React from 'react';
import {BoggleCell} from './BoggleCell'
import {BoggleConnectorsList} from './BoggleConnectorsList'
import {BoggleDictionary} from './BoggleDictionary'
import { useAppDispatch } from '../../../hooks'
import { useState } from 'react'

import {useSelector} from 'react-redux'
import {getBoggleData, getHeadData} from '../reducers/boggle.slice'
import {generateSolution} from '../functional/BoggleBoardData'
import * as Constants from '../constants'
import {addIndex, removeIndex} from '../reducers/boggle.slice'

import './BoggleBoard.css'
export const BoggleBoard = () => {
    const dispatch = useAppDispatch();
    const board = useSelector(getBoggleData).board;
    const selected = useSelector(getBoggleData).selected;
    const initialCellFlash = Array(Constants.BOARD_HEIGHT).fill(false).map((element:boolean) => Array(Constants.BOARD_WIDTH).fill(""))
    const [cellFlash, setCellFlash] = useState(initialCellFlash);
    const head = useSelector(getHeadData);
    return (
        <div id = "bogglepuzzle">
            <div className = "puzzle">
                <div className = "bogglepuzzle">
                    {board.map((row: string[], i:number) => (<>
                        {row.map((cell: string, j:number) => (
                            <BoggleCell 
                                key = {`cell_row${i}_col${j}`}
                                xIndex={j}
                                yIndex = {i}
                                value = {cell}
                                headXIndex = {head.xIndex}
                                headYIndex = {head.yIndex}
                                selected = {selected[j][i]}
                                initialFlash = {cellFlash[j][i]}

                            />))}
                        </>)
                    )}
                    <BoggleConnectorsList/>
                </div>
                <BoggleDictionary/>
            </div>

        </div>
    )
};