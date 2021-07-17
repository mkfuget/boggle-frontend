import {Trie} from '../../../utility/trie/Trie'
import * as Constants from '../constants'

let randomWords = require('random-words')
const BOARD_HEIGHT = Constants.BOARD_HEIGHT;
const BOARD_WIDTH = Constants.BOARD_WIDTH;
export interface BoardData {
    board: string[][],
    dictionary: string[]
}

export const generateFinishedBoard = ():BoardData =>
{
    let boardData = generateBoard();
    for(let i=0; i<BOARD_HEIGHT; i++)
    {
        for(let j=0; j<BOARD_WIDTH; j++)
        {
            if(boardData.board[i][j]=== '0')
            {
                boardData.board[i][j] = randomLetter().toUpperCase();
            }
        }
    }
    return boardData;
}

export const generateBoard = ():BoardData =>
{
    let board: string[][] = Array(BOARD_HEIGHT).fill("0").map(x => Array(BOARD_WIDTH).fill("0"))
    let dictionary: string[] = randomWords({exactly: 8, minLength: 4, maxLength: 7}).map((word:string) => word.toUpperCase())
    addDictionary(board, dictionary);
    return {
        board:board,
        dictionary: dictionary
    }
}

export interface Point {
    xIndex: number
    yIndex: number
}

interface Direction {
    deltaX: number
    deltaY: number
}

export const addDictionary = (board: string[][], dictionary:string[]):boolean =>
{
    let i=0;
    let tries=0;
    while(i<dictionary.length && tries<10*dictionary.length)
    {
        let currentWord = dictionary[i];
        let currentPoint:Point = {
            xIndex: Math.floor(Math.random()*BOARD_WIDTH),
            yIndex: Math.floor(Math.random()*BOARD_HEIGHT),

        }
        if(addWord(board, currentPoint, currentWord))
        {
            i++;
        }
        tries++;
    }
    return i===dictionary.length;
}

export const addWord = (board: string[][], currentPoint:Point, word:string):boolean =>
{
    let pointSet = new Set<number>();
    return addWordInternal(board, currentPoint, word , 0, pointSet)
}
export const addWordInternal = (board: string[][], currentPoint:Point, word:string, wordIndex:number, pastPoints:Set<number>):boolean =>
{
    let boardXIndex = currentPoint.xIndex;
    let boardYIndex = currentPoint.yIndex;

    if(boardYIndex>=BOARD_HEIGHT || boardXIndex>=BOARD_WIDTH || boardYIndex<0 ||boardXIndex<0)//placement out of bounds
    {
        return false;
    }
    let currentEntry = board[boardYIndex][boardXIndex];
    let currentLetter = word[wordIndex];

    if(currentEntry !== currentLetter && currentEntry !== "0")//placement already taken
    {
        return false;
    }
    if(pastPoints.has(pointToBoardIndex(currentPoint)))//index already taken for this word
    {
        return false;
    }
    if(wordIndex === word.length - 1)
    {
        board[boardYIndex][boardXIndex] = currentLetter;
        return true;
    }
    const directions = randomDirectionArray();
    for(let i=0; i<directions.length; i++)
    {
        const nextBoardXIndex = boardXIndex + directions[i].deltaX;
        const nextBoardYIndex = boardYIndex + directions[i].deltaY;
        let nextPoint:Point = {xIndex: nextBoardXIndex, yIndex:nextBoardYIndex}
        pastPoints.add(pointToBoardIndex(currentPoint));
        if(addWordInternal(board, nextPoint, word, wordIndex + 1, pastPoints))
        {
            board[boardYIndex][boardXIndex] = currentLetter;
            return true;    
        }
    }
    return false;
}
const randomDirectionArray = ():Direction[] =>
{
    let directionArray = [
        {deltaX: 1, deltaY: 1},
        {deltaX: 1, deltaY: 0},
        {deltaX: 1, deltaY: -1},
        {deltaX: 0, deltaY: -1},
        {deltaX: -1, deltaY: -1},
        {deltaX: -1, deltaY: 0},
        {deltaX: -1, deltaY: 1},
        {deltaX: 0, deltaY: 1},
    ]
    return randomShuffle(directionArray)
}

const randomShuffle = (array: any[]): any[] =>
{
    let currentIndex = array.length;
    let randomIndex;
    
    while(currentIndex > 0)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];//swap
      
    }
    return array;
}


const pointToBoardIndex = (currentPoint: Point):number =>
{
    return currentPoint.xIndex + BOARD_WIDTH*currentPoint.yIndex;
}

const randomLetter = ():string =>
{
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let weights = [8, 2, 2, 4, 10, 2, 3, 2, 8, 1, 1, 5, 2, 7, 7, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1];
    let totalWeight = weights.reduce((accumulator:number, currentValue:number) => currentValue + accumulator)
    let randomResult = Math.floor(Math.random() * totalWeight);
    let count = 0;
    for(let i=0; i<letters.length; i++)
    {
        count+=weights[i];
        if(count > randomResult)
        {
            return letters[i];
        }
    }
    return 'a';

}
interface BoggleSolutionStep {
    xIndex: number;
    yIndex: number;
    type: ("added" | "removed");
}
export const generateSolution = (boardData: BoardData):BoggleSolutionStep[]=>
{
    let currentTrie = new Trie();
    currentTrie.addDictionary(boardData.dictionary);
    let travelled: boolean[][] = Array(BOARD_HEIGHT).fill(false).map(x => Array(BOARD_WIDTH).fill(false))
    let currentSteps: BoggleSolutionStep[] = [];
    for(let i=0; i<BOARD_HEIGHT; i++)
    {
        for(let j=0; j<BOARD_WIDTH; j++)
        {
            solutionSearchInternal(currentTrie, j, i, currentSteps, boardData, travelled);
        }
    }
    return currentSteps;
}

const solutionSearchInternal = (currentTrie: Trie, xIndex: number, yIndex:number, currentSteps: BoggleSolutionStep[], boardData: BoardData, travelled: boolean[][]):void =>
{
    const deltaX = [1, 1, 0, -1, -1, -1, 0, 1];
    const deltaY = [0, -1, -1, -1, 0, 1, 1, 1];
    if(currentTrie.isFinishedWord)
    {
        currentTrie.removeWordFromLeaf();
        if(currentTrie === undefined)
        {
            return;
        }
    }
    if(!(xIndex < 0 || yIndex < 0 || xIndex>= BOARD_HEIGHT || yIndex>= BOARD_WIDTH || travelled[xIndex][yIndex]))//out of bounds or already travelled to
    {
        const currentLetter = boardData.board[yIndex][xIndex];
        if(currentTrie.hasChild(currentLetter))
        {
            travelled[xIndex][yIndex] = true;
            let nextTrie = currentTrie.children[currentLetter];
            currentSteps.push({
                xIndex: xIndex, 
                yIndex: yIndex, 
                type: "added",
            })
            for(let i=0; i<deltaX.length; i++)
            {
                if(currentTrie === undefined)
                {
                    break;
                }
                solutionSearchInternal(nextTrie, xIndex + deltaX[i], yIndex + deltaY[i], currentSteps, boardData, travelled)
            }
            travelled[xIndex][yIndex] = false;
            currentSteps.push({
                xIndex: xIndex, 
                yIndex: yIndex, 
                type: "removed",
            })
        }
        else
        {
            /*
            currentSteps.push({
                xIndex: xIndex, 
                yIndex: yIndex, 
                type: "no matching trie node",
            })
            */
        }
    }
}