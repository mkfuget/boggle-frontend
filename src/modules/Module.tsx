import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap'
import { BogglePuzzle } from './boggle/components/BogglePuzzle';
import ConceptsSideBar from './conceptsSideBar/ConceptsSideBar';
import "./module.css"
type BoardProps = {
    board: string[][];
    dictionary: string[];
}

  
export const Module = () => {
    return (
        <div id = "module">
            <BogglePuzzle/>
            <ConceptsSideBar/>
        </div>
    )
};