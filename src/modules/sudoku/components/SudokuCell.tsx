
import React from 'react'
import { useState, memo } from 'react'
import { useAppDispatch } from '../../../hooks'
import {updateBoard} from '../reducers/sudoku.slice'
import { motion } from "framer-motion"

interface CellProps {
    index: number,
    value: number,
    selected: boolean, 
}


export const SudokuCell = (({index, value, selected }: CellProps) => {
    const dispatch = useAppDispatch();

    let backgroundColor = "";
    let textColor = "";
    let cellClassName = "";
    if(selected)
    {
        cellClassName = "selected cell";
        backgroundColor = "#4373e6";
        textColor = "white"
    }
    else
    {
        cellClassName = "unselected cell";
        backgroundColor = "white";
        textColor = "black"
    }
    const handleClick = (e: React.FormEvent) => {
        //cellFlashOff(xIndex, yIndex);
        if(selected)
        {
            //dispatch(removeIndex({xIndex, yIndex}))
        }
        else
        {
            //dispatch(addIndex({xIndex, yIndex}))
        }
    }
    
    return (
        
        <motion.div 
            className = "cell"
            onClick = {handleClick}
            animate ={{
                backgroundColor: backgroundColor,
                color: textColor,
              
            }}

            transition={{ ease: "easeOut"}}
            initial = {false}
        >
            {value}
        </motion.div>
    )
})

