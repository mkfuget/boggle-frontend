import BoardData from "../functional/sudokuBoardData"
const testBoardAlpha = () =>{
    let currentBoard = new BoardData();
    currentBoard.addEntry(5, 6 - 1)
    currentBoard.addEntry(6, 8 - 1)
    currentBoard.addEntry(10, 6 - 1)
    currentBoard.addEntry(16, 4 - 1)
    currentBoard.addEntry(18, 8 - 1)
    currentBoard.addEntry(20, 9 - 1)
    currentBoard.addEntry(25, 5 - 1)
    currentBoard.addEntry(30, 8 - 1)
    currentBoard.addEntry(35, 2- 1)
    currentBoard.addEntry(36, 1 - 1)
    currentBoard.addEntry(38, 6 - 1)
    currentBoard.addEntry(39, 3 - 1)
    currentBoard.addEntry(49, 2 - 1)
    currentBoard.addEntry(51, 7- 1)
    currentBoard.addEntry(51, 7- 1)
    currentBoard.addEntry(56, 8- 1)
    currentBoard.addEntry(61, 1- 1)
    currentBoard.addEntry(63, 9- 1)
    currentBoard.addEntry(71, 7- 1)
    currentBoard.addEntry(73, 4- 1)
    currentBoard.addEntry(74, 5- 1)
    currentBoard.addEntry(75, 9- 1)
    currentBoard.addEntry(79, 8- 1)
    return currentBoard;
}
describe("test BoardData initialization", () =>
    it("should show the board being initialized and empty", () => {
        let currentBoard = new BoardData();
        expect(currentBoard.boardData[0]).toBe(-1)
    }),

)

describe("test Add non-conflicting Entry", () =>
    it("show all entries are added to the correct location", () => {
        let currentBoard = testBoardAlpha();

        expect(currentBoard.boardData[5]).toBe(6 - 1)
        expect(currentBoard.boardData[6]).toBe(8 - 1)
        expect(currentBoard.boardData[10]).toBe(6 - 1)
        expect(currentBoard.boardData[16]).toBe(4 - 1)
        expect(currentBoard.boardData[18]).toBe(8 - 1)
        expect(currentBoard.boardData[20]).toBe(9 - 1)
        expect(currentBoard.boardData[25]).toBe(5 - 1)
        expect(currentBoard.boardData[30]).toBe(8 - 1)
        expect(currentBoard.boardData[35]).toBe(2 - 1)
        expect(currentBoard.boardData[36]).toBe(1 - 1)
        expect(currentBoard.boardData[38]).toBe(6 - 1)
        expect(currentBoard.boardData[39]).toBe(3 - 1)
        expect(currentBoard.boardData[49]).toBe(2 - 1)
        expect(currentBoard.boardData[51]).toBe(7 - 1)
        expect(currentBoard.boardData[56]).toBe(8 - 1)
        expect(currentBoard.boardData[61]).toBe(1 - 1)
        expect(currentBoard.boardData[63]).toBe(9 - 1)
        expect(currentBoard.boardData[71]).toBe(7 - 1)
        expect(currentBoard.boardData[73]).toBe(4 - 1)
        expect(currentBoard.boardData[74]).toBe(5 - 1)
        expect(currentBoard.boardData[75]).toBe(9 - 1)
        expect(currentBoard.boardData[79]).toBe(8 - 1)


    }),

)

describe("test Add conflicting Entry", () =>
    it("should show farm as being added to the board", () => {
        let currentBoard = testBoardAlpha();
        let output = currentBoard.addEntry(72, 7);
        expect(output.type).toBe("Failure");
        expect(output.blockers[0]).toBe(18);
        expect(output.blockers[1]).toBe(56);
        expect(output.blockers[2]).toBe(79);
        expect(currentBoard.boardData[72]).toBe(-1);

    }),

)

describe("test Delete Entry", () =>
    it("should show successful deletes", () => {
        let currentBoard = testBoardAlpha();
        currentBoard.deleteEntry(5);
        expect(currentBoard.boardData[5]).toBe(-1);
        expect(currentBoard.addEntry(2, 5).type).toBe("Failure")
        let output = currentBoard.addEntry(72, 7);
        expect(output.type).toBe("Failure");
        expect(output.blockers[0]).toBe(18);
        expect(output.blockers[1]).toBe(56);
        expect(output.blockers[2]).toBe(79);
        expect(currentBoard.boardData[72]).toBe(-1);

    }),


)
const checkHeapIntegrity = (board:BoardData): boolean =>{
    
    for(let i=1; i<board.heapSize; i++)
    {
        if(board.solveOrder[i].numOptions < board.solveOrder[board.parent(i)].numOptions)
        {
            return false;
        }
    }
    return true;
}
describe("test heap integration ", () =>
    it("shows the heap is maintained atfer additions", () => {
        let currentBoard = testBoardAlpha();
        expect(checkHeapIntegrity(currentBoard)).toBe(true);

    }),
)

describe("board numoptions ", () =>
    it("shows the number of options for entries is correct after additions", () => {
        let currentBoard = testBoardAlpha();
        expect(currentBoard.boardNumOptions[0]).toBe(5);
        expect(currentBoard.boardNumOptions[17]).toBe(3);
        expect(currentBoard.boardNumOptions[81]).toBe(4);

    }),
)

describe("board numoptions ", () =>
    it("shows the number of options for entries is correct after deletions", () => {
        let currentBoard = testBoardAlpha();
        currentBoard.addEntry(0, 2);
        expect(currentBoard.boardNumOptions[0]).toBe(5);
        expect(currentBoard.boardNumOptions[81]).toBe(4);
        expect(currentBoard.boardNumOptions[83]).toBe(1);
        currentBoard.deleteEntry(2);
        expect(currentBoard.boardNumOptions[0]).toBe(5);
        expect(currentBoard.boardNumOptions[17]).toBe(3);
        expect(currentBoard.boardNumOptions[81]).toBe(4);

    }),
)

/*
describe("Solve Puzzle ", () =>
    it("shows puzzle solution steps", () => {
        let currentBoard = testBoardAlpha();
        currentBoard.confirmCurrentEntries();
        console.log(currentBoard.solveOrder)
        console.log(currentBoard.solvePuzzle())


    }),
)
*/
