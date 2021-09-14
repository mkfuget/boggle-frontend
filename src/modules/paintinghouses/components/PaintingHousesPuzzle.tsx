import React, { Fragment } from 'react';
import {PaintingHousesBoard} from './PaintingHousesBoard'
import { PaintingHousesSideBar } from './PaintingHousesSidebar'
import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../hooks'

import './PaintingHouses.css'

  
export const PaintingHousesPuzzle = () => {
    return (
        <div className = "module" id = "paintinghouses">
            <PaintingHousesBoard/>
            <PaintingHousesSideBar/>
        </div>
    )
};