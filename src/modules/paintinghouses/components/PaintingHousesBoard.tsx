import React from 'react';
import { useState } from 'react'
import {useSelector} from 'react-redux'

import './PaintingHouses.css'
import { PaintingHousesCell } from './PaintingHousesCell';
import { AllowedColors, getPaintingHousesData } from '../reducers/paintinghouses.slice';
import { useAppDispatch } from '../../../hooks';
import { PaintingHousesSelectionCell } from './PaintingHousesSelectionCell';
export const PaintingHousesBoard = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getPaintingHousesData);
    const redColorCosts = data.redColorCosts;
    const blueColorCosts = data.blueColorCosts;
    const greenColorCosts = data.greenColorCosts;
    const boardColors = data.boardColors;
    let totalCost = 0;
    for(let i=0; i<boardColors.length; i++)
    {
        switch(boardColors[i])
        {
            case "red":
                totalCost+=redColorCosts[i];
                break;
            case "green":
                totalCost+=greenColorCosts[i];
                break;
            case "blue":
                totalCost+=blueColorCosts[i];
                break;
        }
    }
    const selected = data.selectedColor;
    return (
        <div id = "paintinghousespuzzle" className = "paintinghouses moduleboard">
            <div className = "puzzle">
                <div className = "paintinghousespuzzle">
                    {boardColors.map((color: AllowedColors, i:number) => (
                        <PaintingHousesCell 
                            key = {`cell_${i}`}
                            color = {color}
                            index={i}
                            value = {""}
                        />)
                    )}
                </div>
                <div className = "paintinghousescosts">
                    {boardColors.map((color: string, i:number) => (
                        <PaintingHousesCell 
                            key = {`cell_${i}`}
                            color = {"red"}
                            index={i}
                            value = {redColorCosts[i]}
                        />)
                    )}
                </div>
                <div className = "paintinghousescosts">
                    {boardColors.map((color: string, i:number) => (
                        <PaintingHousesCell 
                            key = {`cell_${i}`}
                            color = {"green"}
                            index={i}
                            value = {greenColorCosts[i]}
                        />)
                    )}
                </div>
                <div className = "paintinghousescosts">
                    {boardColors.map((color: string, i:number) => (
                        <PaintingHousesCell 
                            key = {`cell_${i}`}
                            color = {"blue"}
                            index={i}
                            value = {blueColorCosts[i]}
                        />)
                    )}
                </div>
                <div className = "paintinghousesselectors">
                    <PaintingHousesSelectionCell
                        color = "red"
                        selected = {"red" === selected}
                    />
                    <PaintingHousesSelectionCell
                        color = "green"
                        selected = {"green" === selected}
                    />
                    <PaintingHousesSelectionCell
                        color = "blue"
                        selected = {"blue" === selected}
                    />
                    <PaintingHousesSelectionCell
                        color = "white"
                        selected = {"white" === selected}
                    />
                    <div id= "paintinghousestotalcost">
                        Total Cost: {totalCost}
                    </div>

                </div>

            </div>

        </div>
    )
};