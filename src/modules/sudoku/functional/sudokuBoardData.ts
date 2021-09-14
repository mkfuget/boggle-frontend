import { string } from "prop-types";
import { randomShuffle } from "../../../utility/UtilityFunctions";
import * as Constants from '../constants'
const SQUARE_WIDTH = Constants.SQUARE_WIDTH;
const BOARD_WIDTH = Constants.BOARD_WIDTH;
const BOARD_SQUARES = Constants.BOARD_SQUARES;


export interface ChangeOutput {
    type: ("Success" | "Failure"),
    index: number,
    number: number,
    blockers: number[], 
}
export interface HeapSolutionIteration {
    type: ("Placement Successful" | "Placement Failed" | "Out of options for current path"),
    index: number,
    boardIndex: number, 
    number: number,
}
export interface HeapEntry {
    numOptions: number
    index: number
}

interface BoardStats {
    board: BoardData
    solution: SolutionOutput
}
interface SolutionOutput {
    steps: SolutionSteps[];
    branches: number;
    solutions: number;
}
export interface SolutionSteps {
    index: number,
    guessIndex: number,
    number: number,
    stepTaken: ("Added"|"Removed"),
    puzzleIsSolved: boolean

}
export interface Choices {
    index: number,
    guessIndex: number
}
export interface BoardObject {
    boardData: number[];
    confirmedSquares: boolean[];
    boardHeapIndex: number[];
    boardBlocks: number[][];
    boardNumOptions: number[];
    solveOrder: HeapEntry[];
    heapSize: number;
}
export default class BoardData{
    boardData: number[];
    confirmedSquares: boolean[];
    boardHeapIndex: number[];
    boardBlocks: number[][];
    boardNumOptions: number[];
    solveOrder: HeapEntry[];
    heapSize: number;
    puzzleRuleSet: string;
    constructor()
    {
        this.boardData = Array(BOARD_SQUARES).fill(-1)
        this.confirmedSquares = Array(BOARD_SQUARES).fill(false)

        this.boardHeapIndex  = Array(4*BOARD_SQUARES);
        this.boardBlocks = Array(BOARD_SQUARES).fill(0).map(row => Array(BOARD_WIDTH).fill(0));
        this.boardNumOptions = Array(4*BOARD_SQUARES).fill(9);
        this.heapSize = 4*BOARD_SQUARES;
        this.solveOrder = Array<HeapEntry>(4*BOARD_SQUARES).fill({numOptions: 9, index: 0})
        this.puzzleRuleSet = "Classic"
        for(let i=0; i<this.boardNumOptions.length; i++)
        {
            this.solveOrder[i] = {
                numOptions: 9,
                index: i,
            }
            this.boardHeapIndex[i] = i;
        }    
    }   
    //takes an array of numbers or empty squares and adds the correct number to the corresponding square
    addData(data: string[])
    {
        for(let i=0; i<BOARD_SQUARES; i++)
        {
            if(data[i]!== ".")
            {
                const number= +data[i]-1;
                const output = this.addEntry(i, number);
                if(output.type === "Success")
                {
                    this.confirmedSquares[i] = true;
                }
            }
        }    
    }

    toDataHash(): BoardObject
    {
        let boardBlocks = Array(BOARD_SQUARES).fill(0).map(row => Array(BOARD_WIDTH).fill(0));
        let solveOrder = Array<HeapEntry>(4*BOARD_SQUARES).fill({numOptions: 9, index: 0})
        for(let i=0; i<BOARD_SQUARES; i++)
        {
            boardBlocks[i] = [...this.boardBlocks[i]];
        }
        for(let i=0; i<this.boardNumOptions.length; i++)
        {
            solveOrder[i] = {
                numOptions: this.solveOrder[i].numOptions,
                index: this.solveOrder[i].index,
            }
        }    

        return {
           boardData: [...this.boardData],
           confirmedSquares: [...this.confirmedSquares],
           boardHeapIndex: [...this.boardHeapIndex],
           boardBlocks: boardBlocks,
           boardNumOptions: [...this.boardNumOptions],
           solveOrder: solveOrder,
           heapSize: this.heapSize,
        }
    }

    addDataHash(boardObject: BoardObject)
    {
        this.boardData = [...boardObject.boardData];
        this.confirmedSquares = [...boardObject.confirmedSquares];
        this.boardHeapIndex  = [...boardObject.boardHeapIndex];
        this.boardNumOptions = [...boardObject.boardNumOptions];
        for(let i=0; i<BOARD_SQUARES; i++)
        {
            this.boardBlocks[i] = [...boardObject.boardBlocks[i]];
        }
        for(let i=0; i<this.boardNumOptions.length; i++)
        {
            this.solveOrder[i] = {
                numOptions: boardObject.solveOrder[i].numOptions,
                index: boardObject.solveOrder[i].index,
            }
        }    
        this.heapSize = boardObject.heapSize;
    }
    
    //getters

    getNumberAtIndex(index: number): number
    {
        return this.boardData[index];
    }

    isPlacableClassicSudoku(currentIndex: number, currentNumber: number, testIndex: number, testNumber: number): boolean
    {
        var currentSquare = this.indexToSquare(currentIndex);
        var currentCol = this.indexToCol(currentIndex);
        var currentRow = this.indexToRow(currentIndex);

        var testSquare = this.indexToSquare(testIndex);
        var testCol = this.indexToCol(testIndex);
        var testtRow = this.indexToRow(testIndex);

        if(currentCol==testCol && currentNumber == testNumber)
        {
            return false;
        }
        if(currentRow==testtRow && currentNumber == testNumber)
        {
            return false;
        }
        if(currentSquare==testSquare && currentNumber == testNumber)
        {
            return false;
        }
        return true;

    }

    isPlaceableCrossSudoku(currentIndex: number, currentNumber: number, testIndex:number, testNumber:number)
    {
        if(!this.isPlacableClassicSudoku(currentIndex, currentNumber, testIndex, testNumber))
        {
            return false;
        }

        if(this.indexToCol(currentIndex)-this.indexToRow(currentIndex)===0 && this.indexToCol(testIndex)-this.indexToRow(testIndex)===0)//determines if both entries are on the up and right diagonal
        {
            return false;
        }
        
        if(this.indexToCol(currentIndex)-this.indexToRow(currentIndex)===0 && this.indexToCol(testIndex)-this.indexToRow(testIndex)===0)//determines if both entries are on the down and right diagonal
        {
            return false;
        }
        return true;

    }
    
    isPlacableMiracleSudoku(currentIndex: number, currentNumber: number, testIndex:number , testNumber:number): boolean
    {
        return false;
    }

    isPlacable(currentIndex: number, currentNumber: number, testIndex: number, testNumber: number)
    {
        switch(this.puzzleRuleSet){
            case "Classic":
                return this.isPlacableClassicSudoku(currentIndex, currentNumber, testIndex, testNumber);
                break;
            case "Cross":
                return this.isPlacableClassicSudoku(currentIndex, currentNumber, testIndex, testNumber);
                break;
            case "Miracle":
                return this.isPlacableClassicSudoku(currentIndex, currentNumber, testIndex, testNumber);
                break;
            default:
                return this.isPlacableClassicSudoku(currentIndex, currentNumber, testIndex, testNumber);
                break;
        }
    }

    //for a given index and number, returns if it conflicts with a given square based on current board state
    conflictOnBoard(index: number, number: number, targetIndex: number): boolean
    {
        return !this.isPlacable(index, number, targetIndex, this.boardData[targetIndex]);

    }

    addEntry(index: number, number: number):ChangeOutput
    {
        if(this.boardBlocks[index][number]>0)//placement not allowed on this square
        {
            let out: ChangeOutput =
            {
                type: "Failure",
                index: index,
                number: number,
                blockers: [],
            }
            for(let i=0; i<BOARD_SQUARES; i++)
            {
                if(this.conflictOnBoard(index, number, i))
                {
                    out.blockers.push(i)
                }

            }
            return out;
        }
        if(this.boardData[index]!==-1)
        {
            this.deleteEntry(index);
        }

        for(let i=0; i<BOARD_SQUARES; i++)
        {
            if(!this.isPlacable(index, number, i, number) && index!=i)
            {
                if(this.boardBlocks[i][number]==0)//we are adding the first blocking square for this index and number
                {
                    this.updateBoardNumOptions(i, -1);

                    let currentSquareIndex = this.getSquareHeapIndex(i, number);
                    let currentColIndex = this.getColHeapIndex(i, number);
                    let currentRowIndex = this.getRowHeapIndex(i, number);

                    this.updateBoardNumOptions(currentSquareIndex, -1);
                    this.updateBoardNumOptions(currentColIndex, -1);
                    this.updateBoardNumOptions(currentRowIndex, -1);
                }
                this.boardBlocks[i][number]++;//indicate new squares that now cannot be placed in
            }
        }

        let addedSquareIndex = this.getSquareHeapIndex(index, number);
        let addedColIndex = this.getColHeapIndex(index, number);
        let addedRowIndex = this.getRowHeapIndex(index, number);

        //remove one from each number that could be placed in the placed square
        for(let i=0; i<BOARD_WIDTH; i++)
        {
            if(this.boardBlocks[index][i]==0 && i!=number)
            {
                this.updateBoardNumOptions(addedSquareIndex-number+i, -1);
                this.updateBoardNumOptions(addedColIndex-number+i, -1);
                this.updateBoardNumOptions(addedRowIndex-number+i, -1);

            }
        }

        for(let i=0; i<BOARD_WIDTH; i++)//indicate that there is a blocker for each number in the square that is being placed in
        {
            this.boardBlocks[index][i]++; 
        }


        this.deleteHeapIndex(this.boardHeapIndex[index]);
        this.deleteHeapIndex(this.boardHeapIndex[addedSquareIndex]);
        this.deleteHeapIndex(this.boardHeapIndex[addedColIndex]);
        this.deleteHeapIndex(this.boardHeapIndex[addedRowIndex]);

        this.boardData[index] = number;    
        this.heapify();
        const out: ChangeOutput =
        {
            type: "Success",
            index: index,
            number: number,
            blockers: [],
        }

        return out;
    }


    deleteEntry(index: number): string
    {
        let number = this.boardData[index];
        if(this.confirmedSquares[index])
        {
            return "Deletion Unsuccessful Confirmed Square"
        }
        if(this.boardData[index]!=-1)
        {
            
            for(let i=0; i<BOARD_SQUARES; i++)
            {
                if(!this.isPlacable(index, number, i, number) && index!=i)
                {
                    if(this.boardBlocks[i][number]==1)// we are removing the only blocking square for this index, 
                    {
                        this.updateBoardNumOptions(i, 1);

                        let currentSquareIndex = this.getSquareHeapIndex(i, number);
                        let currentColIndex = this.getColHeapIndex(i, number);
                        let currentRowIndex = this.getRowHeapIndex(i, number);

                        this.updateBoardNumOptions(currentSquareIndex, 1);
                        this.updateBoardNumOptions(currentColIndex, 1);
                        this.updateBoardNumOptions(currentRowIndex, 1);

                    }        
                    this.boardBlocks[i][number]--;
                }
            }

            for(let i=0; i<BOARD_WIDTH; i++)//indicate that a blocker is removed for each number in the square that is being placed in
            {
                this.boardBlocks[index][i]--;
            }

            let addedSquareIndex = this.getSquareHeapIndex(index, number);
            let addedColIndex = this.getColHeapIndex(index, number);
            let addedRowIndex = this.getRowHeapIndex(index, number);

            for(let i=0; i<BOARD_WIDTH; i++)
            {
                if(this.boardBlocks[index][i]===0 && i!==number)
                {
                    this.updateBoardNumOptions(addedSquareIndex-number+i, 1);
                    this.updateBoardNumOptions(addedColIndex-number+i, 1);
                    this.updateBoardNumOptions(addedRowIndex-number+i, 1);
                }
            }

            this.boardData[index] = -1;   
            this.heapPush(index);
            this.heapPush(addedSquareIndex);
            this.heapPush(addedColIndex);
            this.heapPush(addedRowIndex);

            this.heapify();
        }
        return "Deletion Successful"

    }


    updateBoardNumOptions(index: number, change: number): void
    {
        this.boardNumOptions[index]+=change;
        var heapIndex = this.boardHeapIndex[index];
        this.solveOrder[heapIndex].numOptions = this.boardNumOptions[index];
    }
    solvePuzzle(endAtFirstSolution = false): SolutionOutput
    {
        this.resetPuzzle();
        let choices: Choices[] = [];
        let solutionSteps:  SolutionSteps[] = [];
        let guessIndex = 0;
        let branches = 0;
        let solutions = 0;
        while(solutionSteps.length < 2000)
        {
            let nextStep = this.iterateHeapSolution(guessIndex);
            let index = nextStep.index;
            let boardIndex = nextStep.boardIndex
            let number = nextStep.number;
            let returnType = nextStep.type;
            let addToSolutionSteps: SolutionSteps
            switch(returnType)
            {
                case 'Placement Successful':
                    this.addEntry(boardIndex, number);
                    choices.push({index, guessIndex});
                    addToSolutionSteps = 
                    {
                        index: boardIndex,
                        guessIndex: guessIndex,
                        number: number,
                        stepTaken: 'Added',
                        puzzleIsSolved: false,

                    }
                    guessIndex = 0;
                    if(this.puzzleIsSolved())
                    {
                        solutions++;
                        addToSolutionSteps.puzzleIsSolved = true;
                        solutionSteps.push(addToSolutionSteps);
                        if(endAtFirstSolution)
                        {
                            return {
                                steps:solutionSteps,
                                branches: branches,
                                solutions: solutions,
                            } 
                        }
                        let lastChoice = choices.pop();
                        if(lastChoice!== undefined)
                        {
                            index = lastChoice.index;
                            this.deleteEntry(this.indexToBoardIndex(index, guessIndex));
                            guessIndex = lastChoice.guessIndex+1;  
                            addToSolutionSteps = 
                            {
                                index: boardIndex,
                                guessIndex: guessIndex,
                                number: number,
                                stepTaken: 'Removed',
                                puzzleIsSolved: true
                            }  
                            solutionSteps.push(addToSolutionSteps);
                        }
                    }
                    else
                    {
                        solutionSteps.push(addToSolutionSteps);
                    }
                    break;
                case 'Placement Failed':
                    guessIndex++;
                    break;
                case 'Out of options for current path':
                    branches++;
                    let lastChoice = choices.pop();
                    if(lastChoice === undefined)
                    {
                        return {
                            steps:solutionSteps,
                            branches: branches,
                            solutions: solutions,
                        }                     
                    }
                    index = lastChoice.index;
                    guessIndex = lastChoice.guessIndex;
                    this.deleteEntry(this.indexToBoardIndex(index, guessIndex));
                    addToSolutionSteps = 
                    {
                        index: this.indexToBoardIndex(index, guessIndex),
                        guessIndex: guessIndex,
                        number: 0,
                        stepTaken: 'Removed',
                        puzzleIsSolved: false
                    }

                    solutionSteps.push(addToSolutionSteps);
                    guessIndex = lastChoice.guessIndex + 1;
                    if(choices.length === 0)
                    {
                        return {
                            steps:solutionSteps,
                            branches: branches,
                            solutions: solutions,
                        }                     
                    }
                    break;
            }
        }
        return {
            steps:solutionSteps,
            branches: branches,
            solutions: solutions,
        }                     
    }
    indexToBoardIndex(index: number, guessIndex: number):number 
    {
        let boardIndex = index;
        if(index>=3*BOARD_SQUARES)//choosing from the row with the fewest options for a given number
        {
            let rowNumber = Math.floor((index%BOARD_SQUARES)/BOARD_WIDTH);
            boardIndex = rowNumber*BOARD_WIDTH+guessIndex;
        }
        else if(index>=2*BOARD_SQUARES)//choosing from the col with the fewest options for a given number
        {
            let colNumber = Math.floor((index%BOARD_SQUARES)/BOARD_WIDTH);
            boardIndex = colNumber + BOARD_WIDTH*guessIndex;
        } 
        else if(index>=BOARD_SQUARES)//choosing from the square with the fewest options for a given number
        {
            let squareNumber = Math.floor((index%BOARD_SQUARES)/BOARD_WIDTH);
            let squareIndex = SQUARE_WIDTH*(squareNumber%SQUARE_WIDTH) + BOARD_WIDTH*SQUARE_WIDTH*Math.floor(squareNumber/SQUARE_WIDTH);//index corresponding to first entry of that square
            let downIndex = Math.floor(guessIndex/SQUARE_WIDTH);//determines which column the square is in
            let rightIndex = guessIndex%SQUARE_WIDTH;

            boardIndex = squareIndex + rightIndex + downIndex*BOARD_WIDTH;
        }
        return boardIndex;

    }
    iterateHeapSolution(guessIndex: number): HeapSolutionIteration
    {
        let index = this.heapTop();
        let number = guessIndex;
        index>=BOARD_SQUARES ? number=index%BOARD_WIDTH: number = guessIndex;
        let boardIndex = this.indexToBoardIndex(index, guessIndex);
        if(guessIndex>=BOARD_WIDTH)   
        {
            let out: HeapSolutionIteration = 
            {
                type: 'Out of options for current path',
                index: index,
                boardIndex: boardIndex,
                number: number
            }
            return out;
        }
        else if(this.boardBlocks[boardIndex][number]==0)//placement is allowed
        {
            let out: HeapSolutionIteration  = 
            {
                type: 'Placement Successful',
                index: index,
                boardIndex: boardIndex,
                number: number
            }
            return out;
        }
        else
        {
            let out: HeapSolutionIteration  = 
            {
                type: 'Placement Failed',
                index: index,
                boardIndex: boardIndex,
                number: number
            }
            return out;
        }
    }
    //Assumes given empty board and returns a pseudo random solved sudoku puzzle
    static generateRandomSolution():BoardData
    {
        const firstEntries = randomShuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        let firstCol = [];
        let firstRow = [];
        for(let i=0; i<BOARD_WIDTH; i++)
        {
            if(i!==firstEntries[0] && i!==firstEntries[1] && i!==firstEntries[2])
            {
                firstRow.push(i);
            }
            if(i!==firstEntries[0] && i!==firstEntries[3] && i!==firstEntries[4])
            {
                firstCol.push(i);
            }

        }
        firstCol = randomShuffle(firstCol);
        firstRow = randomShuffle(firstRow);
        let currentBoard = new BoardData();
        currentBoard.addEntry(0, firstEntries[0]);
        currentBoard.addEntry(1, firstEntries[1]);
        currentBoard.addEntry(2, firstEntries[2]);
        currentBoard.addEntry(BOARD_WIDTH, firstEntries[3]);
        currentBoard.addEntry(2*BOARD_WIDTH, firstEntries[4]);

        for(let i=3; i<BOARD_WIDTH; i++)
        {
            currentBoard.addEntry(i, firstRow[i - 3]);
            currentBoard.addEntry(i*BOARD_WIDTH, firstCol[i - 3])
        }
        currentBoard.confirmCurrentEntries();
        currentBoard.solvePuzzle(true);
        return currentBoard;
    }
    branchLengthPercentage(solutionLength: number): number
    {
        return solutionLength/(this.heapSize/4);
    }
    static generateNewPuzzle(): BoardStats
    {
        let finalBoard = BoardData.generateRandomSolution();
        const finalBoardSolution = [...finalBoard.boardData];
        let indexOrder = [];
        for(let i=0; i<BOARD_SQUARES; i++)
        {
            indexOrder.push(i);
        }
        indexOrder = randomShuffle(indexOrder);
        while(true)
        {
            let high = indexOrder.length;
            let low = 0;
            let mid = Math.floor((high+low)/2);    
            while(high > low)
            {
                let testBoard = new BoardData();
                for(let i=0; i<mid; i++)
                {
                    let nextIndex = 0;
                    const number = indexOrder[i]%BOARD_WIDTH;
                    const rowNumber = Math.floor(indexOrder[i]/BOARD_WIDTH);
                    for(let j=rowNumber*BOARD_WIDTH; j<rowNumber*BOARD_WIDTH+BOARD_WIDTH; j++)
                    {
                        if(finalBoardSolution[j] === number)
                        {
                            nextIndex = j;
                        }
                    }
                    testBoard.addEntry(nextIndex, finalBoardSolution[nextIndex]);
                    testBoard.confirmedSquares[nextIndex] = true;    
                }
                let firstSolution = testBoard.solvePuzzle();
                if(testBoard.branchLengthPercentage(firstSolution.steps.length) <= 2)//too high
                {
                    high = mid - 1;
                    mid = Math.floor((high+low)/2);
                }
                else if(firstSolution.solutions > 1)
                {
                    low = mid+1;
                    mid = Math.floor((high+low)/2);
                }
                if(high <= low )
                {
                    return {
                        board: testBoard,
                        solution: firstSolution
                    }
                }
            } 
        }
    }
    static generatePuzzleMatchingParameters(solutionsNumber:number, emptySquares:number, maxTries: number):BoardData
    {
        let tries = 0;
        let outBoard = BoardData.generateNewPuzzle();
        while(tries < maxTries)
        {
            let testBoard = BoardData.generateNewPuzzle();
            if(testBoard.solution.solutions === solutionsNumber)
            {
                if(testBoard.board.heapSize > outBoard.board.heapSize)
                {
                    outBoard = testBoard;
                }
            }
            tries++;
        }
        return outBoard.board;
    }
    resetPuzzle(): void
    {
        for(let i =0; i<BOARD_SQUARES; i++)
        {
            if(!this.confirmedSquares[i])
            {
                this.deleteEntry(i);
            }
        }
    }
    confirmCurrentEntries(): void
    {
        for(let i=0; i<BOARD_SQUARES; i++)
        {
            if(this.boardData[i] !== -1)
            {
                this.confirmedSquares[i] = true;
            }
        }
    }
    puzzleIsSolved():boolean
    {
        return this.heapSize === 0;
    }
    getSquareHeapIndex(index: number, number: number): number
    {
        return (BOARD_SQUARES+this.indexToSquare(index)*BOARD_WIDTH+number);
    }
    getColHeapIndex(index: number, number: number): number
    {
        return (2*BOARD_SQUARES+this.indexToCol(index)*BOARD_WIDTH+number);
    }
    getRowHeapIndex(index: number, number: number): number
    {
        return (3*BOARD_SQUARES+this.indexToRow(index)*BOARD_WIDTH+number);
    }

    indexToRow(index: number): number
    {
        return Math.floor(index/9);
    }

    indexToCol(index: number): number
    {
        return Math.floor(index%9);
    }

    indexToSquare(index: number): number
    {
        return Math.floor(index/(SQUARE_WIDTH)%SQUARE_WIDTH)+Math.floor(index/(BOARD_WIDTH*SQUARE_WIDTH))*SQUARE_WIDTH;
    }
    right(index: number): number
    {
        return 2*index+2;
    }

    left(index: number): number
    {
        return 2*index+1;
    }

    parent(index: number): number
    {
        return Math.floor((index-1)/2);
    }

    heapPush(index: number): void
    {
        this.heapSize++;
        var heapIndex = this.heapSize-1;
        this.solveOrder[heapIndex].numOptions = this.boardNumOptions[index];
        this.solveOrder[heapIndex].index = index;

        this.boardHeapIndex[index] = heapIndex;
        this.bubbleUp(heapIndex);
    }

    heapTop(): number
    {
        if(this.heapSize<=0)
        {
            return -1;
        }
        return this.solveOrder[0].index;
    }

    heapPop(): number
    {
        if(this.heapSize<=0)
        {
            var out = -1;
            return out;
        }
        if(this.heapSize ==1)
        {
            this.heapSize--;
            return this.solveOrder[0].index;
        }
        var out = this.solveOrder[0].index;
        this.heapSwap(0, this.heapSize-1);
        this.heapSize--;
        this.bubbleDown(0);
        return out;

    }

    deleteHeapIndex(index: number): void
    {
        this.heapSwap(index, this.heapSize-1);
        this.heapSize--;
        this.bubbleDown(index);
    }

    bubbleDown(heapIndex: number): void
    {
        let leftIndex = this.left(heapIndex);
        let rightIndex = this.right(heapIndex);
        let child = heapIndex;

        let childValue = this.solveOrder[child].numOptions;
        let childBoardIndex = this.solveOrder[child].index;
        if(leftIndex < this.heapSize)
        {
            var leftValue = this.solveOrder[leftIndex].numOptions;
            var leftBoardIndex = this.solveOrder[leftIndex].index;
    
            if(leftValue < childValue)
            {
                child = leftIndex;
                childValue = leftValue;
                childBoardIndex = leftBoardIndex;
            } 
            else if(leftValue === childValue && leftBoardIndex < childBoardIndex)
            {
                child = leftIndex;
                childValue = leftValue;
                childBoardIndex = leftBoardIndex;    
            }
        }
        if(rightIndex < this.heapSize)
        {
            let rightValue = this.solveOrder[rightIndex].numOptions;
            let rightBoardIndex = this.solveOrder[rightIndex].index;
    
            if(rightValue < childValue)
            {
                child = rightIndex;
                childValue = rightValue;
                childBoardIndex = rightBoardIndex;
            } 
            else if(rightBoardIndex < childBoardIndex && rightValue === childValue)
            {
                child = rightIndex;
                childValue = rightValue;
                childBoardIndex = rightBoardIndex;    
            }
        }
        if(child!=heapIndex)
        {
            this.heapSwap(heapIndex, child);
            this.bubbleDown(child);
        }
    }

    bubbleUp(heapIndex: number): void// cal on index in heap
    {
        while(heapIndex!=0 && this.solveOrder[this.parent(heapIndex)].numOptions>this.solveOrder[heapIndex].index)
        {
            this.heapSwap(this.parent(heapIndex), heapIndex);
            heapIndex=this.parent(heapIndex);
        }
    }

    heapSwap(parentHeapIndex: number, childHeapIndex: number): void
    {
        let parentboardIndex = this.solveOrder[parentHeapIndex].index;
        let childboardIndex = this.solveOrder[childHeapIndex].index;

        let temp = this.solveOrder[parentHeapIndex];
        this.solveOrder[parentHeapIndex] = this.solveOrder[childHeapIndex];
        this.solveOrder[childHeapIndex] = temp;

        this.boardHeapIndex[parentboardIndex] = childHeapIndex;
        this.boardHeapIndex[childboardIndex] = parentHeapIndex;

    }

    heapify(): void
    {

        for(let i=this.heapSize - 1; i>=0; i--)
        {
            this.bubbleDown(i);
        }
    }
}

let SUDOKU_ALPHA_ARRAY = [
    0, 1, 2, 3, 4, 5, 6, 7, 8,
    3, 4, 5, 6, 7, 8, 0, 1, 2,
    6, 7, 8, 0, 1, 2, 3, 4, 5, 
    1, 2, 3, 4, 5, 6, 7, 8, 0,
    4, 5, 6, 7, 8, 0, 1, 2, 3, 
    7, 8, 0, 1, 2, 3, 4, 5, 6, 
    2, 3, 4, 5, 6, 7, 8, 0, 1,
    5, 6, 7, 8, 0, 1, 2, 3, 4, 
    8, 0, 1, 2, 3, 4, 5, 6, 7,
]

const swapRows = (array: number[], row1: number, row2: number) =>
{
    let r1 = row1*BOARD_WIDTH;
    let r2 = row2*BOARD_WIDTH;
    for(let i=0; i<BOARD_WIDTH; i++)
    {
        let temp = array[r1];
        array[r1] = array[r2];
        array[r2] = temp;
        r1++;
        r2++;
    }
}

const swapCols = (array: number[], col1: number, col2: number) =>
{
    let c1 = col1;
    let c2 = col2;
    for(let i=0; i<BOARD_WIDTH; i++)
    {
        let temp = array[c1];
        array[c1] = array[c2];
        array[c2] = temp;
        c1+=BOARD_WIDTH;
        c2+=BOARD_WIDTH;
    }
}