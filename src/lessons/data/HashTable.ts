
export const HASH_TABLE_LESSON_TEXT = 
"::ID_START" +
"hashtable" +
"::ID_END" +

"::TITLE_START" +
"Hash Tables" +
"::TITLE_END" +


"::DESCRIPTION_START" +
"Data structure designed for optimization of efficently adding, updating and retrieving elements" +
"::DESCRIPTION_END" +


"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"paragraph" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"A Hash Table is a container data structure designed for optimizing of addition, retrieval, update, and deletion of elements. " +
"While this is an extremely valuable tool in storing data, it is important to note that the order of entry of the data is lost during addition," +
"and that iterating through the data structure will not return its entries in any kind of sorted order. For problems that require either of those features " +
"other data structures will need to be used. " +

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
"A basic implemtation of a hash table is to use an array roughly the size of the data set you will be storing and storing your data in that array. " +
"Then develop an algoithm to produce a integer value (hashcode) for each entry in your data set. It is important to try and develop a hashing algorithm " +
"that prevents different values from having the same hash value. When two different values in a data set would hash to the same value this is referred " +
"to as a hash collision and having two many can ruin the efficiency of your hash set. When adding a new entry to your hash set, the added value will be added " +
"to the index of the array equal to the values hashvalue mod with the size of the array. If existing entries already exist at that location of the array " +
"that are not equal to what you are adding, the new value will either be added to a linked list stored at that location in the array, or to one of the neighboring " +
"indices. " +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +
"::DIV_ENTRY_START" +
"::DIV_ENTRY_TYPE" +
"image" +
"::DIV_ENTRY_TYPE_END" +
"" +
"::DIV_ENTRY_CONTENT" +
"" +
"hashtablephoto1.JPG" +
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
"Hash set implemented with overlapping entries stored as a liked list at the matching index." +
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
"A classic coding problem that can be solved using hashtables is a two sum problem. Given an array of integers and a target sum, find the number of unique combinations " +
"of integers in the array that add up to the target sum. A naive approach to this problem would be to test every combination of integers in the array and count the number of working pairs. " +
"This is not an ideal solution because the time complexity is too poor at O(n<sup>2</sup>). There are other possible optimizations, for example sorting the array and then for each entry " +
"performing a binary search for its matching pair will produce  a O(n log n) solution. " +


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
"The ideal solution involves progressing through the array while storing each entry in a hash set. Then for every new entry, if its matching pair already exists in the has set, add one to the number of combinations." +
"This produces an O(n) solution as each read and addition of the hash table is O(1) and that needs to be done for every entry in the array." +
"" +
"::DIV_ENTRY_CONTENT_END" +
"::DIV_ENTRY_END" +
"" +
"" +
"::CODE_ENTRY" +
"const twoSum = (arr: number[], target: number): number => " + "::END_LINE" +
"{" + "::END_LINE" +
"    let setStore = new HashSet();" + "::END_LINE" +
"    let numSolutions = 0;;" + "::END_LINE" +
"    for(let i=0; i<arr.length; i++)" + "::END_LINE" +
"    {" + "::END_LINE" +
"        if(!setStore.has(arr[i]))//only using the first unique entry ensures only unique combinations are found"  + "::END_LINE" +
"        {" + "::END_LINE" +
"            const matchingValue = target - arr[i];"  + "::END_LINE" +
"            if(setStore.has(matchingValue))" + "::END_LINE" +
"            {" + "::END_LINE" +
"                numSolutions++;" + "::END_LINE" +
"            }" + "::END_LINE" +
"        }" + "::END_LINE" +
"    }" + "::END_LINE" +
"    return numSolutions;" +"::END_LINE" +
"}" + "::END_LINE" +
"::CODE_END";
