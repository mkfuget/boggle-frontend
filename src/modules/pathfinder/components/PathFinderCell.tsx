
import React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../../hooks'
import { motion } from "framer-motion"
import wall_cell from '../../../assets/images/wall_cell.png'
const wallCellImage = require('../assets/images/wall_cell.png') as string;

interface CellProps {
    xIndex: number,
    yIndex: number,
    color: string,
    backgroundImage: string,
}


export const PathFinderCell = (({xIndex, yIndex, color, backgroundImage}: CellProps) => {
    const dispatch = useAppDispatch();
    const style={  
        backgroundImage: wall_cell,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
      
    return (
        
        <motion.div 
            className = "pathfinder cell"
            style = {style}
            transition={{ ease: "easeOut"}}
            initial = {false}
        >
        </motion.div>
    )
})

