
import React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../../hooks'
import {addIndex, removeIndex} from '../reducers/boggle.slice'
import { motion } from "framer-motion"

interface CellProps {
    xIndex: number,
    yIndex: number,
    value: string,
    selected: boolean, 
    headXIndex: number,
    headYIndex: number,
    initialFlash: string,
}


export const BoggleCell = (({xIndex, yIndex, value, selected, headXIndex, headYIndex, initialFlash}: CellProps) => {
    const dispatch = useAppDispatch();
    
    const [flash, setFlash] = useState('white')
    let backgroundColor = "";
    let textColor = "";
    let cellClassName = "";
    const cellOutOfRange = headXIndex !== -1 && !(Math.abs(xIndex - headXIndex) <= 1 &&  Math.abs(yIndex - headYIndex) <= 1);
    if(xIndex === headXIndex && yIndex === headYIndex)
    {
        cellClassName = "head cell";
        backgroundColor = "#13057d";
        textColor = "white"
    }
    else if(selected)
    {
        cellClassName = "selected cell";
        backgroundColor = "#4373e6";
        textColor = "white"
    }
    else if(cellOutOfRange)
    {
        cellClassName = "invalid unselected cell";
        backgroundColor = "white";
        textColor = "black"
    }
    else
    {
        cellClassName = "unselected cell";
        backgroundColor = "white";
        textColor = "black"
    }
    const handleClick = (e: React.FormEvent) => {
        if(selected)
        {
            dispatch(removeIndex({xIndex, yIndex}))
        }
        else if(cellOutOfRange)
        {
            if(flash === 'white')
            {
                setFlash('red')
            }
            else 
            {
                setFlash('white')
            }
        }
        else
        {
            dispatch(addIndex({xIndex, yIndex}))
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

