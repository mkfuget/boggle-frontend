interface Dictionary<T> {
    [K: string]: T
}
export class Trie {
    currentLetter: string;
    currentPrefix: string;
    children: Dictionary<Trie>;
    parent?: Trie;
    size: number;
    isFinishedWord:boolean;
    constructor( currentLetter = "root", currentPrefix =  "", isFinishedWord = false)
    {
        this.currentLetter = currentLetter;
        this.currentPrefix = currentPrefix;
        this.children = {};
        this.size = 0;
        this.isFinishedWord = isFinishedWord;
    }
    addWord(word:string): boolean
    {
        const firstLetter = word[0];
        if(!this.hasChild(firstLetter))
        {
            this.children[firstLetter] = new Trie(firstLetter, this.currentPrefix + firstLetter)
            this.children[firstLetter].parent = this;
        }
        const wordAdded = this.children[firstLetter].addWordInternal(word, 0)
        if(wordAdded)
        {
            this.size++;
            return true;
        }
        else
        {
            return false;
        }
    }
    addWordInternal(word:string, index:number): boolean
    {
        if(word.length - 1 === index)//reached end of the word
        {
            if(this.isFinishedWord)//word is already in trie, indicate it is not added
            {
                return false;
            }
            else 
            {
                this.size++;
                this.isFinishedWord = true;
                return true;
            }
        }
        const nextLetter = word[index + 1];
        if(!this.hasChild(nextLetter))
        {
            this.children[nextLetter] = new Trie(nextLetter, this.currentPrefix + nextLetter)
            this.children[nextLetter].parent = this;
        }
        const wordIsAdded = this.children[nextLetter].addWordInternal(word, index+1)
        if(wordIsAdded)
        {
            this.size++;
            return true;
        }
        else
        {
            return false;
        }
    }
    addDictionary(dictionary: string[]):void
    {
        dictionary.forEach((element:string) => this.addWord(element))
    }
    hasChild(letter: string): boolean
    {
        return this.children[letter]!==undefined;
    }
    removeWord(word: string):void 
    {
        let nextLetter = word[0];
        let nextTrie =  this.children[nextLetter];
        if(nextTrie.removeWordInternal(word, 0) === "DELETE")
        {
            delete this.children[nextLetter];
        }
    }
    removeWordInternal(word: String, index: number): ("DELETE" | "KEEP")
    {
        if(index === word.length - 1)
        {
            this.size--;
            this.isFinishedWord = false;
            return this.size === 0 ? "DELETE": "KEEP";
        }
        else
        {
            let nextLetter = word[index + 1];
            let nextTrie =  this.children[nextLetter];
            if(nextTrie.removeWordInternal(word, index + 1) === "DELETE")
            {
                delete this.children[nextLetter];
            }
            this.size--;
            return this.size === 0 ? "DELETE": "KEEP";
        }

    }
    removeWordFromLeaf(): void
    {
        this.isFinishedWord = false;
        this.size--;
        if(this.parent !== undefined)
        {
            this.parent.removeWordFromLeafInternal(this.size === 0, this.currentLetter);
        }
    }
    removeWordFromLeafInternal(removeLast: boolean, childLetter: string)
    {
        if(removeLast)
        {
            delete this.children[childLetter];
        }
        this.size--;
        if(this.parent !== undefined)
        {
            this.parent.removeWordFromLeafInternal(this.size === 0, this.currentLetter);
        }

    }
}
