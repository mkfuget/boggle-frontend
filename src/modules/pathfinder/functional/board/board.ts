import * as cells from "./cell"
import PriorityQueue from "../PriorityQueue"

import Cursor from "./cursor"
export interface pathToCell {
    xIndex: number,
    yIndex: number,
    bitMask: number,
    startSquare: boolean,
}
export interface pathSolution{
    searchPath: Cursor[],
    foundPath: pathToCell[]
}

class Board {
    height: number;
    width: number;
    boardCells: cells.Cell[][];
    startXIndex: number;
    startYIndex: number;
    finishXIndex: number;
    finishYIndex: number;

    constructor(width:number, height:number)
    {
        this.height = height;
        this.width = width;
        this.boardCells = new Array(height);
        for(let i=0; i<height; i++)
        {
            this.boardCells[i] = new Array(width) as Array<cells.Cell>;
        }
        this.startXIndex = 0;
        this.startYIndex = 0;
        this.finishXIndex = width;
        this.finishYIndex = height;

    }

    static initializeBoard(width: number, height: number, entries: string[][]): Board
    {
        let currentBoard = new Board(width, height);
        for(let i=0; i<height; i++)
        {
            for(let j=0; j<width; j++)
            {
                currentBoard.boardCells[i][j] = cells.Cell.stringToCell(entries[i][j], j, i);
            }
        }
        return currentBoard;
    }

    getBackgroundImages(): string[][]
    {
        let out = [];
        for(let i=0; i<this.height; i++)
        {
            let row = [];
            for(let j=0; j<this.width; j++)
            {
                row.push(this.boardCells[i][j].CELL_IMAGE);
            }
            out.push(row);
        }
        return out;
    }

    getCellTypes(): string[][]
    {
        let out = [];
        for(let i=0; i<this.height; i++)
        {
            let row = [];
            for(let j=0; j<this.width; j++)
            {
                row.push(this.boardCells[i][j].type);
            }
            out.push(row);
        }
        return out;
    }


    solveMaze(cursor: Cursor, solveQueue: PriorityQueue<Cursor>): pathSolution//returns one array of the squares in the path finding algorithm and one for the shortest path solution 
    {
        let pathTravelled: pathToCell[][][] = new Array(this.height);
        for(let i=0; i<this.height; i++)//initialize a 3-d array that corresponding to every square on the board and a third index for the bitmask value
        {
            pathTravelled[i] = new Array(this.width);
        }
        for(let i=0; i<this.height; i++)
        {
            for(let j=0; j<this.width; j++)
            {
                pathTravelled[i][j] = new Array(16).fill(false);
            }
        }
        let solveOrder = [];
        pathTravelled[cursor.yIndex][cursor.xIndex][cursor.bitMask] = {
            xIndex: 0,
            yIndex: 0,
            bitMask: 0,
            startSquare: true,
        
        };
        solveQueue.push(cursor);
        do 
        {
            const firstCursor = solveQueue.pop();
            solveOrder.push(firstCursor);

            const currentXindex = firstCursor.xIndex;
            const currentYindex = firstCursor.yIndex;
            const currentBitMask = firstCursor.bitMask;

            let leftCursor = firstCursor.copyConstructor();
            let rightCursor = firstCursor.copyConstructor();
            let upCursor = firstCursor.copyConstructor();
            let downCursor = firstCursor.copyConstructor();
            const cursors = [rightCursor, downCursor, leftCursor, upCursor];
            const deltaXs = [1, 0, -1, 0];
            const delyaYs = [0, 1, 0, -1];
            for(let i =0; i<4; i++)
            {
                let currentCursor = cursors[i]
                if(currentCursor.move(deltaXs[i], delyaYs[i]).type == "success" && !pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask])
                {
                    solveQueue.push(currentCursor);
                    const lastCell: pathToCell = {
                        xIndex: currentXindex,
                        yIndex: currentYindex,
                        bitMask:  currentBitMask,
                        startSquare: false,

                    }
                    pathTravelled[currentCursor.yIndex][currentCursor.xIndex][currentCursor.bitMask] = lastCell;
                }    
            } 
        } while(!solveOrder[solveOrder.length - 1].puzzleSolved && !solveQueue.empty())
        let finishCursor = solveOrder[solveOrder.length - 1];
        let currentCell = pathTravelled[finishCursor.yIndex][finishCursor.xIndex][finishCursor.bitMask];
        let pathFound = [
            {
                xIndex: finishCursor.xIndex,
                yIndex: finishCursor.yIndex,
                bitMask: finishCursor.bitMask,
                startSquare: false,
            }
        ];
        if(finishCursor.puzzleSolved)
        {
            while(!currentCell.startSquare)
            {
                pathFound.push(currentCell)
                currentCell = pathTravelled[currentCell.yIndex][currentCell.xIndex][currentCell.bitMask];
            }
        }
        return{
            searchPath: solveOrder,
            foundPath: pathFound.reverse()
        } 
    }
    dijsktra(cursor: Cursor)
    {
        function dijkstraComparator(cursorA: Cursor, cursorB: Cursor)
        {
            return cursorA.stepsTaken < cursorB.stepsTaken;
        }
        let dijkstraQueue = new PriorityQueue<Cursor>(dijkstraComparator);
        return this.solveMaze(cursor, dijkstraQueue);
    }
    depthFirstSearch(cursor: Cursor)
    {
        function depthFirstSearchComparator(cursorA: Cursor, cursorB: Cursor)
        {
            return cursorA.stepsTaken > cursorB.stepsTaken;
        }
        let depthFirstSearchQueue = new PriorityQueue<Cursor>(depthFirstSearchComparator);
        return this.solveMaze(cursor, depthFirstSearchQueue);
    }
    manhattanDistanceToFinish(xIndex: number, yIndex: number)
    {
        return (Math.abs(xIndex-this.finishXIndex) + Math.abs(yIndex-this.finishYIndex));
    }

    aStarSearch(cursor: Cursor, weight: number)
    {
        function aStarSearchComparator(cursorA: Cursor, cursorB: Cursor)
        {
            let aStarDistanceA = cursorA.stepsTaken + weight*cursorA.board.manhattanDistanceToFinish(cursorA.xIndex, cursorA.yIndex);
            let aStarDistanceB = cursorB.stepsTaken + weight*cursorB.board.manhattanDistanceToFinish(cursorB.xIndex, cursorB.yIndex);

            return (aStarDistanceA === aStarDistanceB ? (cursorA.stepsTaken < cursorB.stepsTaken) : (aStarDistanceA < aStarDistanceB))
        }
        let aStarSearchQueue = new PriorityQueue<Cursor>(aStarSearchComparator);
        return this.solveMaze(cursor, aStarSearchQueue);
    }



    indexToXIndex(index: number)
    {
        return index%this.width;
    }
    indexToYIndex(index: number)
    {
        return Math.floor(index/this.width);
    }
    toBoardIndex(xIndex: number, yIndex: number)
    {
        return xIndex + this.width*yIndex;
    }
}
export default Board;