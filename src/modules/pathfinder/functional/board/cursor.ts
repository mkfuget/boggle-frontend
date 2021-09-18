import type Board from './board'
export interface MovementResult {
    type: string;
    movementType: string;
    deltaX: number;
    deltaY: number;
    keysUnlocked: string | number;

}

class Cursor {
    xIndex: number;
    yIndex: number;
    board: Board;
    bitMask: number;
    stepsTaken: number;
    puzzleSolved: boolean;

    constructor(board: Board)
    {
        this.xIndex = board.startXIndex;
        this.yIndex = board.startYIndex;
        this.board = board;
        this.bitMask = 0;
        this.stepsTaken = 0;
        this.puzzleSolved = false;
    }

    boardHeight(){return this.board.height}
    boardWidth(){return this.board.width}

    move(deltaX: number, deltaY: number): MovementResult
    {
        
        const xDestination = this.xIndex + deltaX
        const yDestination = this.yIndex + deltaY
        if(xDestination < 0 || yDestination < 0 || xDestination >= this.boardWidth() || yDestination >= this.boardHeight())
        {
            return {
                type: "failure",
                movementType: "index out of bounds",
                deltaX: 0,
                deltaY: 0,
                keysUnlocked: 0,
            }
        }
        const moveOutcome = this.board.boardCells[yDestination][xDestination].takeCursor(this, deltaX, deltaY)
        if(moveOutcome.type == "success")
        {
            this.stepsTaken++;
        }
        return moveOutcome;
    }

    index()
    {
        return this.xIndex + this.yIndex*this.board.height
    }

    copyConstructor()
    {
        let out = new Cursor(this.board);
        out.bitMask = this.bitMask;
        out.puzzleSolved = this.puzzleSolved;
        out.stepsTaken = this.stepsTaken;
        out.xIndex = this.xIndex;
        out.yIndex = this.yIndex;
        return out;
    }
    boardIndex()
    {
        return this.board.toBoardIndex(this.xIndex, this.yIndex)
    }
    reset()
    {
        this.xIndex = this.board.startXIndex;
        this.yIndex = this.board.startYIndex;

        this.bitMask = 0;
        this.stepsTaken = 0;
        this.puzzleSolved = false;

    }
    cursorColor(){
        let out = "";
        switch(this.bitMask)
        {
            case 0:
                out = `rgb(201, 8, 8)`
                break;
            case 1:
                out = `rgb(8, 198, 201)`
                break;
            case 2:
                out = `rgb(8, 140, 201)`
                break;
            case 3:
                out = `rgb(201, 102, 8)`
                break;
            case 4:
                out = `rgb(8, 95, 201)`
                break;
            case 5:
                out = `rgb(201, 179, 8)`
                break;
            case 6:
                out = `rgb(201, 201, 8)`
                break;
            case 7:
                out = `rgb(53, 8, 201)`
                break;
            case 8:
                out = `rgb(8, 31, 201)`
                break;
            case 9:
                out = `rgb(163, 201, 8)`
                break;
            case 10:
                out = `rgb(124, 201, 8)`
                break;
            case 11:
                out = `rgb(192, 158, 240)`
                break;
            case 12:
                out = `rgb(114, 8, 201)`
                break;
            case 13:
                out = `rgb(176, 8, 201)`
                break;
            case 14:
                out = `rgb(201, 8, 140)`
                break;
            case 15:
                out = `rgb(8, 201, 137)`
                break;
        }
        return out;

    }
    static keysUnlockedColor(bitMask: number)
    {
        let out = "";
        if(bitMask == 0)
        {
            out = `rgb(255, 255, 0)`
        }
        if(bitMask == 1 || bitMask == 2 || bitMask == 4 || bitMask == 8)
        {
            out = `rgb(255, 204, 0)`
        }
        if(bitMask == 3 || bitMask == 5 || bitMask == 9 || bitMask == 6 || bitMask == 10 || bitMask == 12)
        {
            out = `rgb(255, 153, 51)`
        }
        if(bitMask == 7 || bitMask == 11 || bitMask == 13 || bitMask == 14)
        {
            out = `rgb(255, 102, 0)`
        }
        if(bitMask == 15)
        {
            out = `rgb(255, 51, 0)`
        }
        return out;
    }
}
export default Cursor;