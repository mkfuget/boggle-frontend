import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { BogglePuzzle } from './boggle/components/BogglePuzzle';
import {SudokuPuzzle} from './sudoku/components/SudokuPuzzle';
import ConceptsSideBar from './conceptsSideBar/ConceptsSideBar';
import "./module.css"
import { SudokuPuzzleEdit } from './sudoku/components/SudokuPuzzleEdit';
import { PaintingHousesPuzzle } from './paintinghouses/components/PaintingHousesPuzzle';
import { PathFinderPuzzle } from './pathfinder/components/PathFinderPuzzle';
type BoardProps = {
    board: string[][];
    dictionary: string[];
}

  
export const Module = () => {
    return (
        <div id = "module">
            <Router>
                <Switch>
                    <Route exact path = "/modules/boggle" component = {BogglePuzzle}></Route>
                    <Route exact path = "/modules/sudoku" component = {SudokuPuzzle}></Route>
                    <Route exact path = "/modules/sudoku/edit" component = {SudokuPuzzleEdit}></Route>
                    <Route exact path = "/modules/paintinghouses" component = {PaintingHousesPuzzle}></Route>
                    <Route exact path = "/modules/pathfinder" component = {PathFinderPuzzle}></Route>

                </Switch>
            </Router>
            <ConceptsSideBar/>
        </div>
    )
};