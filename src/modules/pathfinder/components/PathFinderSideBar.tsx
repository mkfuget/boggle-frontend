
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'

import {Button} from 'react-bootstrap'



export const PathFinderSideBar = () => {
    const dispatch = useAppDispatch();

    
    const handlePuzzleSolve = (e: React.FormEvent) => {

        let i=0;
        let timer = setInterval(function(){

        }, 125);

        

    }

    const handleNewPuzzle = (e: React.FormEvent) => {
    
    }

    const handleWordReset = (e: React.FormEvent) => {
    }

    const handleConceptsSidebarToggle = (e: React.FormEvent) => {
        dispatch(toggle());
    }
    
    return (
        
        <div className = "pathfinder modulesidebar">
            <div className = "pathfinder modulesidebartitle">
                Boggle
            </div>
            <div className = "pathfinder modulesidebardescription">
                Words can be connected up, down, left, right, or diagonally. Re-click on a letter to return the string to that point. See if you can find all the words. 
            </div>
            <Button 
                variant="outline-primary" 
                onClick = {handlePuzzleSolve}
                className = "pathfinder module sidebarbutton"
            >Solve Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleNewPuzzle}
                className = "pathfinder module sidebarbutton"
            >New Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleWordReset}
                className = "pathfinder module sidebarbutton"
            >Reset Word
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleConceptsSidebarToggle}
                className = "pathfinder module sidebarbutton"
                
            >Explore Concepts
            </Button>

        </div>
    )
}

