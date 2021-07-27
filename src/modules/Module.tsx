import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap'
import { BogglePuzzle } from './boggle/components/BogglePuzzle';
import ConceptsSideBar from './conceptsSideBar/ConceptsSideBar';
type BoardProps = {
    board: string[][];
    dictionary: string[];
}

  
export const Module = () => {
    return (
        <>
            <BogglePuzzle/>
        </>
    )
};