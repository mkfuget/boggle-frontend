import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks";
import { getPathFinderCursor } from "../reducers/pathfinder.slice";
export const PathFinderCursor = (({xIndex, yIndex, color, type}: CellProps) => {
    const dispatch = useAppDispatch();
    const cursorData =  useSelector(getPathFinderCursor);
    const xCoord = cursorData.xIndex*36 + 8;
    const yCoord = cursorData.yIndex*36 + 8;
    const upperLeftClass = ((cursorData.bitMask & 1) === 1) ? "red cursorquadrant" : "cursorquadrant";
    const upperRightClass = ((cursorData.bitMask & 2) === 2) ? "blue cursorquadrant" : "cursorquadrant";
    const lowerLeftClass = ((cursorData.bitMask & 4) === 4) ? "green cursorquadrant" : "cursorquadrant";
    const lowerRightClass = ((cursorData.bitMask & 8) === 8) ? "yellow cursorquadrant" : "cursorquadrant";

    return (
        <motion.div 
            className = "pathfindercursor"
            animate ={{
                x: `${xCoord}px`,
                y: `${yCoord}px`,
            }}
            transition={{ ease: "easeOut"}}
            initial = {false}
        >
            <div className = {upperLeftClass}></div>
            <div className = {upperRightClass}></div>
            <div className = {lowerLeftClass}></div>
            <div className = {lowerRightClass}></div>
        </motion.div>

    )
})

