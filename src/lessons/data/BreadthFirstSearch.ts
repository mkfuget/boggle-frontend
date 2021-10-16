
export const BREADTH_FIRST_SEARCH_LESSON_TEXT = 
"::ID_START" +
"breadthhfirstsearch" +
"::ID_END" +

"::TITLE_START" +
"Breadth First Search" +
"::TITLE_END" +


"::DESCRIPTION_START" +
"Search algorithm that searches a tree by starting at a node and searches nodes in the order of the distance from the root node." +
"::DESCRIPTION_END" +


"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"paragraph" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"Depth first search is an algorithm that searches through a graph by starting with a root node and coninuing to search nodes in the order of their distance to the root node. " +
"The algorithm continues until the desired note or path is reached or the whole search tree is exhausted and the target is not found. This approach is ideal in cases " +
"where the total distance from the root to the target node needs to be minimized, as it searches paths in order of their length the first path found is guaranteed to be the shortest." +
"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +
"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"image" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"breadthfirstsearchphoto1.JPG" +
"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +

"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"figure" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"Typical path for a breadth first search algorithm starting from the root node of a tree" +
"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +


"" +
"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"paragraph" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"Breadth first search is typiocally implemented using a queue data structure. The first in first out design of the queue ensures that the first node added " +
"onto the queue from the search will be the next node chosen to search. This is opossed to a depth first search which would utilize a stack in the same way. " +
"Breadth first search is ideal in a lot of pathfinding algorithms because usually the goal is to minimize the length of the path between initial node and the final node. " +
"It is also common in these situations to store the locations you have already searched and prevent additional paths from being searched from that node. " +
"This is often necessary when working on cyclical graphs to prevent the algorithm searching a huge number of unnecessary paths." +

"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +
"" +
"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"paragraph" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"A common implementation of a problem that could be solved with a breadth first search algorithm would be a basic maze game. The goal would be to find the path that reaches " +
"one of the exits in the lowest number of steps. This can be implemented by taking an array with entries that represent if movement is allowed or not, gives one entry to represent " +
"the start location and one or more entries to represent exits to the maze. This can be solved by implementing a queue and adding the first location. Then " +
"until a solution is found or the queue is empty, continuing to add all the neighbors where movement is allowed to the queue. It is important to keep track of " +
"searched locations and prevent additional searches on them both to optimize the algorithm and to prevent infintie loops where no solution is possible." +

"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +
"" +
"" +
"::CODE_ENTRY" +
"const shortestPath = (arr: int[][], startX: int, startY: int, finalValue: int): int => //returns shortest path length to solution" + "::END_LINE" +
"{" + "::END_LINE" +
"    let queue = new Queue<int>(); //typescript implementation of a queue" + "::END_LINE" +
"    const maxX = arr.length;" + "::END_LINE" +
"    const maxY = arr[0].length;" + "::END_LINE" +
"    let travelled = Array(maxX).fill(false).map(x => Array(maxY).fill(false));" + + "::END_LINE" +
"    queue.push({" + "::END_LINE" +
"        x: targetX," + "::END_LINE" +
"        y: targetY," + "::END_LINE" +
"        stepsTaken: 0," + "::END_LINE" +
"    });" + "::END_LINE" +
"    while(queue.length !== 0)" + "::END_LINE" +
"    {" + "::END_LINE" +
"        let currentEntry = queue.pop();" + "::END_LINE" +
"        let currentX = currentEntry.x;" + "::END_LINE" +
"        let currentY = currentEntry.y;" + "::END_LINE" +
"        let currentSteps = currentEntry.steps;" + "::END_LINE" +
"        if(!(currentX < 0 || currentY < 0 || currentX >= maxX || currentY >= maxY))//dont consider entries that are out of bounds" + "::END_LINE" +
"        {" + "::END_LINE" +
'            if(arr[currentX][currentY] === \\"FINISH\\")' + "::END_LINE" +
"            {" + "::END_LINE" +
"                return currentSteps" + "::END_LINE" +
"            }" + "::END_LINE" +
"            arr[currentX][currentY] = finalValue;" + "::END_LINE" +
"            queue.push({" + "::END_LINE" +
"                x: targetX + 1," + "::END_LINE" +
"                y: targetY," + "::END_LINE" +
"            });" + "::END_LINE" +
"            queue.push({" + "::END_LINE" +
"                x: targetX - 1," + "::END_LINE" +
"                y: targetY," + "::END_LINE" +
"            });" + "::END_LINE" +
"            queue.push({" + "::END_LINE" +
"                x: targetX," + "::END_LINE" +
"                y: targetY + 1," + "::END_LINE" +
"            });" + "::END_LINE" +
"            queue.push({" + "::END_LINE" +
"                x: targetX," + "::END_LINE" +
"                y: targetY - 1," + "::END_LINE" +
"            });                        " + "::END_LINE" +
"        }" + "::END_LINE" +
"    }" + "::END_LINE" +
"    return -1;" + "::END_LINE" +
"}" + "::END_LINE" +
"::CODE_END";
