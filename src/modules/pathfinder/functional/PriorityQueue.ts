class PriorityQueue<T>
{
    heap: T[]
    comparator: (a: T, b: T) => boolean
    constructor(comparator = (a: any, b: any) => {
        return a > b
    })
    {
        this.heap = [];
        this.comparator = comparator
    }
    size(): number
    {
        return this.heap.length;
    }
    empty(): boolean
    {
        return this.heap.length === 0;
    }
    parent(i: number): number
    {
        return Math.floor((i-1)/2);
    }
    left(i: number): number
    {
        return (2*i + 1)
    }
    right(i: number): number
    {
        return 2*(i+ 1)
    }
    peek():T
    {
        return this.heap[0]
    }
    push(value: T)
    {
        this.heap.push(value)
        this.bubbleUp(this.size() - 1)
    }
    pop(): T
    {
        const outValue  = this.peek();
        this.swap(0, this.size() - 1);
        this.heap.pop();
        this.bubbleDown(0);
        return outValue;
    }
    swap(i: number, j: number)
    {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    bubbleUp(i: number)
    {
        while(i > 0 && this.comparator(this.heap[i], this.heap[this.parent(i)]))
        {
            this.swap(i,this.parent(i))
            i = this.parent(i)
        }
    }
    bubbleDown(i: number)
    {
        while (this.left(i) < this.size())
        {
            let child = i;
            if(this.right(i) < this.size() && this.comparator(this.heap[this.right(i)], this.heap[child]))
            {
                child = this.right(i);
            }
            if (this.comparator(this.heap[this.left(i)], this.heap[child]))
            {
                child = this.left(i);
            }
            if(i == child)//heap structure is good stop bubble down
            {
                break;
            }
            this.swap(i, child);
            i = child;
        }
    }
}
export default PriorityQueue;