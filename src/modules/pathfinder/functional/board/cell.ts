import Cursor from './cursor'
import {MovementResult} from './cursor'

const redKeyImage = require('../../assets/images/red_key.png') as string;
const blueKeyImage = require('../../assets/images/blue_key.png') as string;
const greenKeyImage = require('../../assets/images/green_key.png') as string;
const yellowKeyImage = require('../../assets/images/yellow_key.png') as string;
const redLockImage = require('../../assets/images/red_lock.png') as string;
const blueLockImage = require('../../assets/images/blue_lock.png') as string;
const greenLockImage = require('../../assets/images/green_lock.png') as string;
const yellowLockImage = require('../../assets/images/yellow_lock.png') as string;
const iceCellImage = require('../../assets/images/ice_cell.png') as string;
const wallCellImage = require('../../assets/images/wall_cell.png') as string;
const emptyCellImage = require('../../assets/images/empty_cell.png') as string;
const startCellImage = require('../../assets/images/start_cell.png') as string;
const finishCellImage = require('../../assets/images/finish_cell.png') as string;

export abstract class Cell
{
    xIndex: number;
    yIndex: number;
    type: string;
    abstract readonly CELL_COLOR: string
    abstract readonly CELL_IMAGE: string
    constructor(xIndex:number, yIndex:number, type:string)
    {
        this.xIndex = xIndex
        this.yIndex = yIndex
        this.type = type
    }
    public abstract takeCursor(cursor: Cursor, deltaX?: number, deltaY?: number): MovementResult
    static stringToCell(type: string, xIndex: number, yIndex: number): Cell
    {
        switch(type)
        {
            case "E":
                return new EmptyCell(xIndex, yIndex, "E");
                break;
            case "W":
                return new WallCell(xIndex, yIndex, "W");
                break;
            case "r":
                return new RedLockCell(xIndex, yIndex, "r");
                break;
            case "g":
                return new GreenLockCell(xIndex, yIndex, "g");
                break;
            case "b":
                return new BlueLockCell(xIndex, yIndex, "b");
                break;
            case "y":
                return new YellowLockCell(xIndex, yIndex, "y");
                break;
            case "R":
                return new RedKeyCell(xIndex, yIndex, "R");
                break;
            case "G":
                return new GreenKeyCell(xIndex, yIndex, "G");
                break;
            case "B":
                return new BlueKeyCell(xIndex, yIndex, "B");
                break;
            case "Y":
                return new YellowKeyCell(xIndex, yIndex, "Y");
                break;
            case "I":
                return new IceCell(xIndex, yIndex, "I");
                break;
            case "S":
                return new StartCell(xIndex, yIndex, "S");
                break;
            case "F":
                return new FinishCell(xIndex, yIndex, "F");
                break;
        }
        return new EmptyCell(xIndex, yIndex, "E");
    }
    
}
export class EmptyCell extends Cell
{
    
    readonly CELL_COLOR: string = "#FFFFFF";
    readonly CELL_IMAGE: string = `url(${emptyCellImage})`

    movementAllowed(cursor: Cursor): boolean
    {
        return true;
    }

    takeCursor(cursor: Cursor): MovementResult
    {
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: 'none'
        }
    }
}

export class WallCell extends Cell
{
    readonly CELL_COLOR: string = "#000000";
    readonly CELL_IMAGE: string = `url(${wallCellImage})`
    movementAllowed(cursor: Cursor): boolean
    {
        return false;
    }
    takeCursor(cursor: Cursor): MovementResult
    {
        return {
            type: "failure",
            movementType: "wall",
            deltaX: 0,
            deltaY: 0,
            keysUnlocked: 'none'

        }
    }
}


export abstract class LockCell extends Cell
{
    readonly abstract BIT_VALUE: number;
    movementAllowed(cursor: Cursor)
    {
        return ((cursor.bitMask & this.BIT_VALUE) == this.BIT_VALUE);
    }
    takeCursor(cursor: Cursor): MovementResult
    {
        if(!this.movementAllowed(cursor))
        {
            return {
                type: "failure",
                movementType: "key not unlocked",
                deltaX: 0,
                deltaY: 0,
                keysUnlocked: 'none'    
            }    
        }
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: 'none'
        }
    }
}

export abstract class KeyCell extends Cell
{
    readonly abstract BIT_VALUE: number;
    movementAllowed(cursor: Cursor): boolean
    {
        return true;
    }
    takeCursor(cursor: Cursor): MovementResult
    {
        cursor.bitMask |= this.BIT_VALUE
        let xStart = cursor.xIndex
        let yStart = cursor.yIndex
        cursor.xIndex = this.xIndex
        cursor.yIndex = this.yIndex
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: this.BIT_VALUE
        }
    }
}
export class RedLockCell extends LockCell
{
    readonly CELL_COLOR: string = "#FFFFFF";
    readonly CELL_IMAGE: string = `url(${redLockImage})`;
    readonly BIT_VALUE: number =  1;
}
export class RedKeyCell extends KeyCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${redKeyImage})`;
    readonly BIT_VALUE: number = 1;
}
export class BlueLockCell extends LockCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${blueLockImage})`;
    readonly BIT_VALUE: number = 2;
}
export class BlueKeyCell extends KeyCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${blueKeyImage})`
    readonly BIT_VALUE: number = 2
}
export class GreenLockCell extends LockCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${greenLockImage})`
    readonly BIT_VALUE: number = 4
}
export class GreenKeyCell extends KeyCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${greenKeyImage})`
    readonly BIT_VALUE: number = 4
}
export class YellowLockCell extends LockCell
{
    readonly CELL_COLOR: string ="#FFFFFF";
    readonly CELL_IMAGE: string =`url(${yellowLockImage})`
    readonly BIT_VALUE: number = 8
}
export class YellowKeyCell extends KeyCell
{
    readonly CELL_COLOR: string = "#FFFFFF";
    readonly CELL_IMAGE: string = `url(${yellowKeyImage})`
    readonly BIT_VALUE: number = 8
}



export class IceCell extends Cell
{
    readonly CELL_COLOR = "#E0FFFF";
    readonly CELL_IMAGE = `url(${iceCellImage})`

    movementAllowed(cursor: Cursor) : boolean
    {
        return true;
    }
    takeCursor(cursor: Cursor, deltaX: number, deltaY: number): MovementResult
    {
        let xStart = cursor.xIndex;
        let yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        let result = cursor.move(deltaX, deltaY);
        return {
            type: "success",
            movementType: "slide",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: result.keysUnlocked

        }
    }
}
export class StartCell extends Cell
{
    readonly CELL_COLOR = "#FFFFFF"
    readonly CELL_IMAGE = `url(${startCellImage}`

    movementAllowed(cursor: Cursor): boolean
    {
        return true;
    }
    takeCursor(cursor: Cursor): MovementResult
    {
        let xStart = cursor.xIndex;
        let yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: "none"
        }    
    }

}

export class FinishCell extends Cell
{
    readonly CELL_COLOR = "#FFFFFF";
    readonly CELL_IMAGE = `url(${finishCellImage}`

    movementAllowed(cursor: Cursor): boolean
    {
        return true;
    }
    takeCursor(cursor: Cursor): MovementResult
    {
        cursor.puzzleSolved = true;
        let xStart = cursor.xIndex;
        let yStart = cursor.yIndex;
        cursor.xIndex = this.xIndex;
        cursor.yIndex = this.yIndex;
        return {
            type: "success",
            movementType: "normal",
            deltaX: cursor.xIndex - xStart,
            deltaY: cursor.yIndex - yStart,
            keysUnlocked: "none"
        }    
    }
}
