
import React from 'react'
import { useState, memo } from 'react'
import { useAppDispatch } from '../../../hooks'
import {updateBoard, selectCell, getSudokuSelected} from '../reducers/sudoku.slice'
import {useSelector} from 'react-redux'
import { motion } from "framer-motion"
import "./sudoku.css"
interface CellProps {
    index: number,
    value: number,
    selected: boolean,
    backgroundColor: string,
    confirmed: boolean,
}


export const SudokuCell = (({index, value, selected, backgroundColor, confirmed}: CellProps) => {
    const dispatch = useAppDispatch();
    const animateBackgroundColor = backgroundColor;
    let cellClassName = "";
    if(confirmed)
    {
        cellClassName+="confirmed "
    }
    if(index%3 === 2)
    {
        cellClassName += "right "
    }
    if(index%9 === 0)
    {
        cellClassName += "left "
    }
    if(Math.floor(index/9)%3==2)
    {
        cellClassName += "bottom "
    }
    if(Math.floor(index/9)%9==0)
    {
        cellClassName += "top "
    }


    cellClassName += "sudokucell"
    const handleClick = (e: React.FormEvent) => {
        dispatch(selectCell(index));
    }
    
    return (
        <motion.div 
            className = {cellClassName}
            onClick = {handleClick}
            animate ={{
                backgroundColor: backgroundColor,
            
            }}
            transition={{ ease: "easeOut"}}
            initial = {false}
            >
            {value !== -1 ? value : ""}
        </motion.div>
        )
    })
