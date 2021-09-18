
import React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../../hooks'
import { motion } from "framer-motion"
import { AllowedColors, getPaintingHousesData, paintHouse, selectColor } from '../reducers/paintinghouses.slice'
import { useSelector } from 'react-redux'

interface CellProps {
    color: AllowedColors,
    selected: boolean;
}


export const PaintingHousesSelectionCell = (({color, selected}: CellProps) => {
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
        dispatch(selectColor(color));
    }
    return (
        
        <motion.div 
            className = {selected?" paintinghouses selected selection cell":"paintinghouses unselected selection cell"}
            onClick = {handleClick}
            animate ={{
                backgroundColor: backgroundColor,
                color: textColor,  
            }}
            transition={{ ease: "easeOut"}}
            initial = {false}
        >
        </motion.div>
    )
})

