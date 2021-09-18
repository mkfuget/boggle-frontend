
import React from 'react'
import { useAppDispatch } from '../../../hooks'
import {toggle} from '../../conceptsSideBar/concepts.slice'

import {useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'
import { AllowedColors, BOARD_WIDTH, getPaintingHousesData, newPuzzle, paintAllHouses } from '../reducers/paintinghouses.slice'



export const PaintingHousesSideBar = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getPaintingHousesData);
    const redColorCosts = data.redColorCosts;
    const blueColorCosts = data.blueColorCosts;
    const greenColorCosts = data.greenColorCosts;
    const numHouses = redColorCosts.length;
    const handlePuzzleSolve = (e: React.FormEvent) => {
        let redHouseEnd: AllowedColors[] = Array(BOARD_WIDTH).fill("white");;
        let blueHouseEnd: AllowedColors[] = Array(BOARD_WIDTH).fill("white");;
        let greenHouseEnd: AllowedColors[] = Array(BOARD_WIDTH).fill("white");;
        let solution: AllowedColors[][] = [];
        let redHouseEndCost = 0;
        let blueHouseEndCost = 0;
        let greenHouseEndCost = 0;

        redHouseEnd[0] = "red";
        redHouseEndCost = redColorCosts[0];
        blueHouseEnd[0] = "blue";
        blueHouseEndCost = blueColorCosts[0];
        greenHouseEnd[0] = "green";
        greenHouseEndCost = greenColorCosts[0];
        
        let minCostHouses = redHouseEnd;
        let minCost = redHouseEndCost;
        if(blueHouseEndCost < minCost)
        {
            minCostHouses = blueHouseEnd;
            minCost = blueHouseEndCost;    
        }
        if(greenHouseEndCost < minCost)
        {
            minCostHouses = greenHouseEnd;
            minCost = greenHouseEndCost;    
        }
        solution.push(minCostHouses);
        for(let i=1; i<numHouses; i++)
        {
            let redHousesCopy = [...redHouseEnd];
            let blueHousesCopy = [...blueHouseEnd];
            let greenHousesCopy = [...greenHouseEnd];
            redHouseEnd = (greenHouseEndCost < blueHouseEndCost) ? [...greenHousesCopy] : [...blueHousesCopy];
            let newRedHouseEndCost = redColorCosts[i] + ((greenHouseEndCost < blueHouseEndCost) ? greenHouseEndCost : blueHouseEndCost)
            redHouseEnd[i] = "red";

            greenHouseEnd = (redHouseEndCost < blueHouseEndCost) ? [...redHousesCopy] : [...blueHousesCopy];
            let newGreenHouseEndCost = greenColorCosts[i] + ((redHouseEndCost < blueHouseEndCost) ? redHouseEndCost : blueHouseEndCost)
            greenHouseEnd[i] = "green";

            blueHouseEnd = (redHouseEndCost < greenHouseEndCost) ? [...redHousesCopy] : [...greenHousesCopy]
            let newBlueHouseEndCost = blueColorCosts[i] + ((redHouseEndCost < greenHouseEndCost) ? redHouseEndCost : greenHouseEndCost);
            blueHouseEnd[i] = "blue";

            redHouseEndCost = newRedHouseEndCost;
            blueHouseEndCost = newBlueHouseEndCost;
            greenHouseEndCost = newGreenHouseEndCost;

            minCostHouses = redHouseEnd;
            minCost = redHouseEndCost;
            if(blueHouseEndCost < minCost)
            {
                minCostHouses = blueHouseEnd;
                minCost = blueHouseEndCost;    
            }
            if(greenHouseEndCost < minCost)
            {
                minCostHouses = greenHouseEnd;
                minCost = greenHouseEndCost;    
            }
            solution.push(minCostHouses);
        }
        let i=0;
        let timer = setInterval(function(){
            dispatch(paintAllHouses(solution[i]));
            i++;
            if(i===solution.length)
            {
                clearInterval(timer);
            }
        }, 500);

        
    }

    const handleNewPuzzle = (e: React.FormEvent) => {
        dispatch(newPuzzle());
    }

    const handleHousesReset = (e: React.FormEvent) => {
        const whiteHouses = new Array(BOARD_WIDTH).fill("white");
        dispatch(paintAllHouses(whiteHouses));
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
                Each color for each location has a different cost to paint. No house can share a color with its neighbor, see if you can minimize the cost.
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
                onClick = {handleHousesReset}
                className = "paintinghouses module sidebarbutton"
            >Reset Houses
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

