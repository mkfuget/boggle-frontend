
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'



export const PaintingHousesSideBar = () => {
    const dispatch = useAppDispatch();

    
    const handlePuzzleSolve = (e: React.FormEvent) => {

        

    }

    const handleNewPuzzle = (e: React.FormEvent) => {
    
    }

    const handleWordReset = (e: React.FormEvent) => {
    }

    const handleConceptsSidebarToggle = (e: React.FormEvent) => {
        dispatch(toggle());
    }
    
    return (
        
        <div className = "paintinghouses modulesidebar">
            <div className = "paintinghouses modulesidebartitle">
                Painting Houses
            </div>
            <div className = "paintinghouses modulesidebardescription">
                Each color for each location has a different cost to paint. To add flair to the neighborhood no house can share a color with its neighbor.
            </div>
            <Button 
                variant="outline-primary" 
                onClick = {handlePuzzleSolve}
                className = "paintinghouses module sidebarbutton"
            >Solve Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleNewPuzzle}
                className = "paintinghouses module sidebarbutton"
            >New Puzzle
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleWordReset}
                className = "paintinghouses module sidebarbutton"
            >Reset Word
            </Button>
            <Button 
                variant="outline-primary" 
                onClick = {handleConceptsSidebarToggle}
                className = "paintinghouses module sidebarbutton"
                
            >Explore Concepts
            </Button>

        </div>
    )
}

