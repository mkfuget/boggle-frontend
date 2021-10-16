
export const DEPTH_FIRST_SEARCH_LESSON_TEXT = 
"::ID_START" +
"depthfirstsearch" +
"::ID_END" +

"::TITLE_START" +
"Depth First Search" +
"::TITLE_END" +


"::DESCRIPTION_START" +
"Search algorithm that searches a tree by starting at a node and following down a path as far as it goes. Continues that pattern until the whole tree is searched." +
"::DESCRIPTION_END" +


"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"paragraph" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"Depth first search is an algorith that searches through a graph by starting with a root node and continueing along a path until the end of the path or until " +
"there are no more neighbors that have not been travelled to yet. This is useful for situations when a certain path is needed to be found and the length " +
"travelled to the finish is not as important." +
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
"depthfirstsearchphoto1.JPG" +
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
"Typical path for a depth first search algorith starting from the root node of a tree" +
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
"Depth first search is typically implemented using a stack data structure. The first in last out approach for adding elements to the stack ensures that " +
"when future nodes are searched, the last node added to the stack will be the first searched when a new node is ready to be taken off. This is opposite " +
"approach of a breadth first search algorithm that would implement a queue to search nodes in order of their depth from the first node. You can also utilize " +
"recursion to solve a problem this way and this is often the approach favored when traversing a tree. However there is an issue when dealing with data sets " +
"that are very deep, it is possible to run into a stack overflow exception. Those cases should favor the stack approach." +

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
"A common problem that can be sovled utilizing depth first search is a flood fill algorithm. This is often a need in image editing, the idea is to take an array " +
" and a point on the array, and replace it and all the surrounding elements with the same value with a new one. The approach would be to add the first entry to " +
"and then until the stack is empty, remove the top entry change its value to the final value, and add any neighbors that match the original value. This will ensure " +
"that all the connected elements are changed correctly to the final value." +
"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +
"" +
"" +
"::CODE_ENTRY" +
"const floodFill = (arr: int[][], targetX: int, targetY: int, finalValue: int): void => " + "::END_LINE" +
"{" + "::END_LINE" +
"    const currentValue: int = arr[targetX][targetY];" + "::END_LINE" +
"    if(currentValue === finalValue)//skips algorithm if values already match" + "::END_LINE" +
"    {" + "::END_LINE" +
"        return;" + "::END_LINE" +
"    }" + "::END_LINE" +
"    let stack = []; //typescript implementation of a stack will use push and pop on array" + "::END_LINE" +
"    const maxX = arr.length;" + "::END_LINE" +
"    const maxY = arr[0].length;" + "::END_LINE" +
"    stack.push({" + "::END_LINE" +
"        x: targetX," + "::END_LINE" +
"        y: targetY," + "::END_LINE" +
"    });" + "::END_LINE" +
"    while(stack.length !== 0)" + "::END_LINE" +
"    {" + "::END_LINE" +
"        let currentEntry = stack.pop();" + "::END_LINE" +
"        let currentX = currentEntry.x;" + "::END_LINE" +
"        let currentY = currentEntry.y;" + "::END_LINE" +
"        if(!(currentX < 0 || currentY < 0 || currentX >= maxX || currentY >= maxY))//dont consider entries that are out of bounds" + "::END_LINE" +
"        {" + "::END_LINE" +
"            if(arr[currentX][currentY] === currentValue)" + "::END_LINE" +
"            {" + "::END_LINE" +
"                arr[currentX][currentY] = finalValue;" + "::END_LINE" +
"                stack.push({" + "::END_LINE" +
"                    x: targetX + 1," + "::END_LINE" +
"                    y: targetY," + "::END_LINE" +
"                });" + "::END_LINE" +
"                stack.push({" + "::END_LINE" +
"                    x: targetX - 1," + "::END_LINE" +
"                    y: targetY," + "::END_LINE" +
"                });" + "::END_LINE" +
"                stack.push({" + "::END_LINE" +
"                    x: targetX," + "::END_LINE" +
"                    y: targetY + 1," + "::END_LINE" +
"                });" + "::END_LINE" +
"                stack.push({" + "::END_LINE" +
"                    x: targetX," + "::END_LINE" +
"                    y: targetY - 1," + "::END_LINE" +
"                });                        " + "::END_LINE" +
"            }" + "::END_LINE" +
"        }" + "::END_LINE" +
"    }" + "::END_LINE" +
"}" + "::END_LINE" +
"::CODE_END";
