import React from 'react';
import { useState } from 'react'
import {useSelector} from 'react-redux'

import './PaintingHouses.css'
import { PaintingHousesCell } from './PaintingHousesCell';
import { getPaintingHousesData } from '../reducers/paintinghouses.slice';
import { useAppDispatch } from '../../../hooks';
export const PaintingHousesBoard = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getPaintingHousesData);
    const redColorCosts = data.redColorCosts;
    const blueColorCosts = data.blueColorCosts;
    const greenColorCosts = data.greenColorCosts;

    const boardColors = data.boardColors;
    const selected = data.selectedColor;
    return (
        <div id = "paintinghousespuzzle" className = "paintinghouses moduleboard">
            <div className = "puzzle">
                <div className = "paintinghousespuzzle">
                    {boardColors.map((color: string, i:number) => (
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

            </div>

        </div>
    )
};