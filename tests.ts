
const functsFromMain = require('./main');
const { readFile } = require('fs')
const assert = require('assert');
const { writeNumSymbolsInFileIntoFile, numOfSymbols, numVowels } = functsFromMain



// test for writeNumSymbolsInFileIntoFile function
describe("writeNumSymbolsInFileIntoFile", () => {
    it("Should work without errors", (done) => {
        // execute function
        writeNumSymbolsInFileIntoFile('data.txt', 'result.txt', "l", (err: string) => {
            if (err) {
                done(err)
            } else {
                done()
            }
        })
    })
})

// test for numVowels function
describe("numVowels", () => {
    it("given a word 'vowel', returns 2", () => {
        assert.strictEqual(numVowels('vowel'), 2);
    });
    it("given a word 'Stas', returns 1", () => {
        assert.strictEqual(numVowels('Stas'), 1);
    });
    it("given a word 'FEdOr', returns 2", () => {
        assert.strictEqual(numVowels('FEdOr'), 2);
    });
    it("given a word 'You', returns 3", () => {
        assert.strictEqual(numVowels('You'), 3);
    });
    it("given a word 'IT', returns 1", () => {
        assert.strictEqual(numVowels('IT'), 1);
    });
    it("given a word 'ubuntu', returns 3", () => {
        assert.strictEqual(numVowels('ubuntu'), 3);
    });
});


// test for numOfSymbols function
describe("numOfSymbols", () => {
    it("Given sentence 'Elephant in the room' and symbol 'e', returns 3", () => {
        const result = numOfSymbols("e")('Elephant in the room');
        assert.strictEqual(result, 3);
    });
    it("Given sentence 'I dont even kno about this' and symbol ' ', returns 5", () => {
        const result = numOfSymbols(" ")('I dont even kno about this');
        assert.strictEqual(result, 5);
    });
});