export const randomShuffle = (array: any[]): any[] =>
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
