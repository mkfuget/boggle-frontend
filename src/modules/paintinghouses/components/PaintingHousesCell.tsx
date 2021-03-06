
import React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../../hooks'
import { motion } from "framer-motion"
import { getPaintingHousesData, paintHouse } from '../reducers/paintinghouses.slice'
import { useSelector } from 'react-redux'

interface CellProps {
    index: number,
    color: string,
    value: (number | "")
}


export const PaintingHousesCell = (({index, color, value}: CellProps) => {
    const dispatch = useAppDispatch();
    const selectedColor = useSelector(getPaintingHousesData).selectedColor;
    let backgroundColor = "";
    switch(color)
    {
        case "red":
            backgroundColor = "#bd0c00";
            break;
        case "green":
            backgroundColor = "green";
            break;
        case "blue":
            backgroundColor = "blue";
            break;
        case "white":
            backgroundColor = "white";
            break;
               
    }
    let textColor = "";
    let cellClassName = "";
    
    const handleClick = () =>{
        dispatch(paintHouse({color: selectedColor, index: index}));
    }
    return (
        
        <motion.div 
            className = "paintinghouses cell"
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

