import * as testBoggle from '../functional/BoggleBoardData'
const BOARD_HEIGHT = 8;
const BOARD_WIDTH = 8;


describe("test addword function", () =>
    it("should show farm as being added to the board", () => {
        let testBoard:string[][] = Array(BOARD_HEIGHT).fill("0").map(x => Array(BOARD_WIDTH).fill("0"))
        let currentPoint = {xIndex: 6, yIndex: 6}
        let added = testBoggle.addWord(testBoard, currentPoint, "farm")
        expect(added).toBe(true)
    }),

)
describe("test addword function", () =>
    it("should not reuse indices on the same word", () => {
        let testBoard:string[][] = Array(BOARD_HEIGHT).fill("0").map(x => Array(BOARD_WIDTH).fill("0"))

        let currentPoint = {xIndex: 2, yIndex: 2}
        let added = testBoggle.addWord(testBoard, currentPoint, "tttttttttttttttttttt")
        expect(added).toBe(true)
    }),

)

describe("test dictionaryToCharCounts addword function", () =>
    it("should show a=4 ...", () => {
        let testDictionary:string[] = ['alpha', 'bat', 'camel', 'mango', 'wolf']
        let out = dictionaryToCharCounts(testDictionary);
        expect(out.get('a')).toBe(5);
        expect(out.get('l')).toBe(3);
        expect(out.get('p')).toBe(1);
        expect(out.get('m')).toBe(2);

    }),

)

describe("test addDictionary", () =>
    it("should return true and match the charcounts of the dictionary ...", () => {
        let testDictionary:string[] = ['alpha', 'bat', 'camel', 'mango', 'wolf', 'golf', 'foxtrot']
        let testBoard:string[][] = Array(BOARD_HEIGHT).fill("0").map(x => Array(BOARD_WIDTH).fill("0"))
        expect(testBoggle.addDictionary(testBoard, testDictionary)).toBe(true);
        expect(matchCharCounts(dictionaryToCharCounts(testDictionary), boardToCharCounts(testBoard))).toBe(true)


    }),

)

describe("test Generate Board", () =>
    it("should return true and match the charcounts of the dictionary ...", () => {
        let boardData = testBoggle.generateBoard();
        expect(matchCharCounts(dictionaryToCharCounts(boardData.dictionary), boardToCharCounts(boardData.board))).toBe(true)
    }),

)

describe("test Generate finished Board", () =>
    it("should return a board with no 0", () => {
        let boardData = testBoggle.generateFinishedBoard();
        expect(matchCharCounts(dictionaryToCharCounts(boardData.dictionary), boardToCharCounts(boardData.board))).toBe(true)
    }),

)

const printBoard = (board:string[][]): void =>
{
    let print = "";
    for(let i=0; i<BOARD_HEIGHT; i++)
    {
        for(let j=0; j<BOARD_WIDTH; j++)
        {
            print+=" " + board[i][j];
        }
        print += "\n";
    }
    console.log(print)
}

const dictionaryToCharCounts = (dictionary: string[]): Map<string, number> =>
{
    let charMap = new Map<string, number>();
    for(let i=0; i<dictionary.length; i++)
    {
        let currentWord = dictionary[i];
        for(let j=0; j<currentWord.length; j++)
        {
            let currentLetter = currentWord[j];
            let currentCount = charMap.get(currentLetter);
            if(currentCount!==undefined)
            {
                charMap.set(currentLetter, currentCount+1)
            }
            else
            {
                charMap.set(currentLetter, 1)
            }

        }
    }
    return charMap;
}

const boardToCharCounts = (board: string[][]): Map<string, number> =>
{
    let charMap = new Map<string, number>();
    for(let i=0; i<board.length; i++)
    {
        let currentRow = board[i];
        for(let j=0; j<currentRow.length; j++)
        {
            let currentLetter = currentRow[j];
            let currentCount = charMap.get(currentLetter);
            if(currentCount!==undefined)
            {
                charMap.set(currentLetter, currentCount+1)
            }
            else
            {
                charMap.set(currentLetter, 1)
            }

        }
    }
    return charMap;
}

const matchCharCounts = (boardCharCounts:Map<string, number>, dictionaryCharCounts:Map<string, number>):boolean =>
{
    dictionaryCharCounts.forEach(function(value, key, map){
            if(dictionaryCharCounts.get(key) !== value)
            {
                return false;
            }
        }
    )
    return true;
}