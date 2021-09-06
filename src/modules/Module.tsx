import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { BogglePuzzle } from './boggle/components/BogglePuzzle';
import {SudokuPuzzle} from './sudoku/components/SudokuPuzzle';
import ConceptsSideBar from './conceptsSideBar/ConceptsSideBar';
import "./module.css"
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
                </Switch>
            </Router>
            <ConceptsSideBar/>
        </div>
    )
};