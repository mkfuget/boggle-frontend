import React from 'react'
import {useSelector} from 'react-redux'
import {getDictionary} from '../reducers/boggle.slice'
import { useSpring, animated } from 'react-spring'
import { motion } from "framer-motion"

import './BoggleBoard.css'

export const BoggleDictionary = () => {
    const dictionary = useSelector(getDictionary);
    return (
        <div className = "dictionary">
            {Object.keys(dictionary).map((entry: string, index: number) => {
                return (
                    <DictionaryEntry 
                        key = {`dictionary_entry_${index}`}
                        value = {entry}
                        found = {dictionary[entry]}
                    />
                )
            })}
        </div>
    )
}
type DictionaryEntryProps = {value: string, found: boolean} 
const DictionaryEntry = ({value, found}:DictionaryEntryProps) =>
{
    let backgroundColor = "";
    let textColor = "";
    if(found)
    {
        backgroundColor = '#0136B7'
        textColor = 'white'
    }
    else 
    {
        backgroundColor = 'white'
        textColor = 'black'
    }

    return (
        <motion.div 
        className = {"dictionaryentry"}
            animate ={{
                backgroundColor: backgroundColor,
                color: textColor,
              
            }}

            >{value}
        </motion.div>
    )
}