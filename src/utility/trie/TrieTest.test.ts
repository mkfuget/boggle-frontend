import {Trie}  from './Trie'


describe("constructor", () =>
    it("should initialiaze a root Trie with no children, size 0 ", () => {
        let testTrie = new Trie();
        expect(testTrie.currentLetter).toBe("root");
        expect(testTrie.size).toBe(0);
        expect(testTrie.isFinishedWord).toBe(false);

    }),

)

describe("addWord", () =>
    it("add a word to the trie and the size should be one, size 0 ", () => {
        let currentTrie = new Trie();
        currentTrie.addWord("apple")
        expect(currentTrie.currentLetter).toBe("root");
        expect(currentTrie.size).toBe(1);
        expect(currentTrie.isFinishedWord).toBe(false);
        currentTrie = currentTrie.children['a'];
        expect(currentTrie.currentLetter).toBe("a");
        expect(currentTrie.size).toBe(1);
        currentTrie = currentTrie.children['p'];
        currentTrie = currentTrie.children['p'];
        currentTrie = currentTrie.children['l'];

        currentTrie = currentTrie.children['e'];
        expect(currentTrie.isFinishedWord).toBe(true);
        expect(currentTrie.currentLetter).toBe("e");
        expect(currentTrie.size).toBe(1);

    }),

)

describe("addDictionary", () =>
    it("adds a list of words ", () => {
        let currentTrie = new Trie();
        currentTrie.addDictionary(["apple", "apples", "corn", "pear"])
        expect(currentTrie.currentLetter).toBe("root");
        expect(currentTrie.size).toBe(4);
        expect(currentTrie.isFinishedWord).toBe(false);
        currentTrie = currentTrie.children['a'];
        expect(currentTrie.currentLetter).toBe("a");
        expect(currentTrie.size).toBe(2);
        currentTrie = currentTrie.children['p'];
        currentTrie = currentTrie.children['p'];
        currentTrie = currentTrie.children['l'];

        currentTrie = currentTrie.children['e'];
        expect(currentTrie.isFinishedWord).toBe(true);
        expect(currentTrie.currentLetter).toBe("e");
        expect(currentTrie.size).toBe(2);

    }),
    
)
describe("removeWord", () =>
    it("Removes a word ", () => {
        let currentTrie = new Trie();
        let rootTrie = currentTrie;

        currentTrie.addDictionary(["apple", "apples", "corn", "pear"])
        expect(currentTrie.currentLetter).toBe("root");
        expect(currentTrie.size).toBe(4);
        expect(currentTrie.isFinishedWord).toBe(false);
        currentTrie = currentTrie.children['a'];
        expect(currentTrie.currentLetter).toBe("a");
        expect(currentTrie.size).toBe(2);
        currentTrie = currentTrie.children['p'];
        currentTrie = currentTrie.children['p'];
        currentTrie = currentTrie.children['l'];

        currentTrie = currentTrie.children['e'];
        expect(currentTrie.isFinishedWord).toBe(true);
        expect(currentTrie.currentLetter).toBe("e");
        expect(currentTrie.size).toBe(2);
        let nextTrie = currentTrie.children['s'];
        nextTrie.removeWordFromLeaf();
        expect(currentTrie.isFinishedWord).toBe(true);
        expect(currentTrie.currentLetter).toBe("e");
        expect(currentTrie.size).toBe(1);
        expect(currentTrie.hasChild('s')).toBe(false);




    }),
    
)
