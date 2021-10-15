
export const DYNAMMIC_PROGRAMMING_LESSON_TEXT = 
"::ID_START" +
"dynamicprogramming" +
"::ID_END" +

"::TITLE_START" +
"Dynamic Programming" +
"::TITLE_END" +


"::DESCRIPTION_START" +
"Algorithmic strategy for solving problems by sequentially solving subsets of the problem and using them to improve the efficiency of the solution" +
"::DESCRIPTION_END" +


"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"paragraph" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"Dynamic programming is an algorithm strategy that building solutions to smaller subsets of the problem you are working on, and continues until the final problem is " +
"solved. It is an effective strategy for the coding problems where knowing solutions to subsets of the problem helps finding the answer and where the on a smaller" +
"set (like a single entry) can easily be determined. This strategy is often a useful optimization in problems that can be solved with recursion and memoization." +
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
"A common example of application for dynamic programming can be found by considering the following problem. Jack needs to climb up a set of twenty stairs. He can" +
"do so by moving up 1, 2, or 3 steps at once. How may different ways can Jack get up this set of stairs. The key to solving this problem is realizing that the answer is simple" +
"when knowing the answers to smaller sets of the problem. Jack must finish the climb from either the 17<sup>th</sup>, 18<sup>th</sup>, or 19<sup>th</sup> step, so the answer" + 
"has to be equal to the sum of the answers to those steps." +
"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +
"" +
"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"figure" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"S(20) = S(17) + S(18) + S(19)" +
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
"The other important aspect of this problem is knowing that the number of possible was to get to step one is only one. With that information we can set up a recursive algorithm" +  
"to solve this problem, the solution at each step is equal to the sum of the solutions for the previous three steps and the solution at the first step is one. This strategy is" +
"leads to a simple solution, however it has a problem. The time complexity quickly grows out of control, growing at a rate of 3<sup>n</sup>. This can be improved by memoization," + 
"saving previous solutions in an array and then when subsequent calculations of that step are made they read from the array before recalculating. " +
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
"This can be improved even further by implementing a dynamic programming solution. Create an array with the size of the number of steps you are trying to solve for (in this case 20). Populate" +
"the first entry of the array with a one, then progressively solve for each next entry in the array using the previous information, until you reach the number you are trying to solve for." +
"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +
"" +
"" +
"::CODE_ENTRY" +
"const staircasePaths = (numStairs: int): int => " + "::END_LINE" +
"{" + "::END_LINE" +
"    let dp: int[] = new Array(numStairs).fill(0);" + "::END_LINE" +
"    dp[0] = 1;" + "::END_LINE" +
"    for(let i=1; i<numStairs; i++)" + "::END_LINE" +
"    {" + "::END_LINE" +
"        dp[i] += i - 1;" + "::END_LINE" +
"        if(i - 2>0)//check to make sure taking two steps to that stair is possible" + "::END_LINE" +
"        {" + "::END_LINE" +
"            dp[i] += i - 1;" + "::END_LINE" +
"        }" + "::END_LINE" +
"        if(i - 3>0)//check to make sure taking three steps to that stair is possible" + "::END_LINE" +
"        {" + "::END_LINE" +
"            dp[i] += i - 1;" + "::END_LINE" +
"        }" + "::END_LINE" +
"    }" + "::END_LINE" +
"    return dp[numStairs - 1];" + "::END_LINE" +
"}" + "::END_LINE" +
"::CODE_END";
