
import React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../../hooks'
import { motion } from "framer-motion"
import empty_cell from '../../../assets/images/empty_cell.png'
import wall_cell from '../../../assets/images/wall_cell.png'
import ice_cell from '../../../assets/images/ice_cell.png'
import start_cell from '../../../assets/images/start_cell.png'
import finish_cell from '../../../assets/images/finish_cell.png'
import red_key from '../../../assets/images/red_key.png'
import blue_key from '../../../assets/images/blue_key.png'
import green_key from '../../../assets/images/green_key.png'
import yellow_key from '../../../assets/images/yellow_key.png'
import red_lock from '../../../assets/images/red_lock.png'
import blue_lock from '../../../assets/images/blue_lock.png'
import green_lock from '../../../assets/images/green_lock.png'
import yellow_lock from '../../../assets/images/yellow_lock.png'

interface CellProps {
    xIndex: number,
    yIndex: number,
    color: string,
    type: string,
}


export const PathFinderCell = (({xIndex, yIndex, color, type}: CellProps) => {
    const dispatch = useAppDispatch();
      
    return (
        <div className = "pathfinder cell">
            <motion.div 
                className = "pathfinder cell"
                animate ={{
                    backgroundColor: color,
                }}
                transition={{ ease: "easeOut"}}
                initial = {false}
            >
            </motion.div>
            <img src = {typeToImage(type)}alt = "background" className = "pathfindercellbackground"></img>

        </div>
    )
})

const typeToImage = (type:string):string =>{
    switch(type)
    {
        case "E":
        return empty_cell;
        break;
        case "W":
        return wall_cell;
        break;
        case "F":
        return finish_cell;
        break;
        case "S":
        return start_cell;
        break;
        case "I":
        return ice_cell;
        break;
        case "R":
        return red_key;
        break;
        case "B":
        return blue_key;
        break;
        case "G":
        return green_key;
        break;
        case "Y":
        return yellow_key;
        break;
        case "r":
        return red_lock;
        break;
        case "b":
        return blue_lock;
        break;
        case "g":
        return green_lock;
        break;
        case "y":
        return yellow_lock;
        break;                                                                                                               
    }
    return "";
} 