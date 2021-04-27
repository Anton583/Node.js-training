const functsFromMain = require('./main');
const assert = require('assert');

// test for formReadRes function
describe("formReadRes", () => {
    // execute function
    functsFromMain.formReadRes('data.txt')('result.txt')("l")
    it("given 'data.txt' contains the same number of symbol 'l' as written in the final file", () => {
        // read original file 
        functsFromMain.readFile('data.txt', 'utf8', (err: string, data: string) => {
            if (err) {
                throw err
            } else {
                // calculate number of symbol 'l' in text of the original file 
                const resNumOfSymbs = functsFromMain.numOfSymbols("l")(data)
                // read file with result of calculations 
                functsFromMain.readFile('result.txt', 'utf8', (err: string, data: string) => {
                    if (err) {
                        throw err
                    } else {
                        // number of symbols to integer 
                        const numOfSymbEInFile = parseInt(data)
                        // check if number of 'l' symbol 
                        // is the same as written in the result file
                        assert.strictEqual(resNumOfSymbs, numOfSymbEInFile)
                    }
                })
            }
        })
    })
})


// test for numVowels function
describe("numVowels", () => {
    it("given a word 'vowel', returns 2", () => {
        assert.strictEqual(functsFromMain.numVowels('vowel'), 2);
    });
    it("given a word 'Stas', returns 1", () => {
        assert.strictEqual(functsFromMain.numVowels('Stas'), 1);
    });
    it("given a word 'FEdOr', returns 2", () => {
        assert.strictEqual(functsFromMain.numVowels('FEdOr'), 2);
    });
    it("given a word 'You', returns 3", () => {
        assert.strictEqual(functsFromMain.numVowels('You'), 3);
    });
    it("given a word 'IT', returns 1", () => {
        assert.strictEqual(functsFromMain.numVowels('IT'), 1);
    });
    it("given a word 'ubuntu', returns 3", () => {
        assert.strictEqual(functsFromMain.numVowels('ubuntu'), 3);
    });
});


// test for numOfSymbols function
describe("numOfSymbols", () => {
    it("Given sentence 'Elephant in the room' and symbol 'e', returns 3", () => {
        const result = functsFromMain.numOfSymbols("e")('Elephant in the room');
        assert.strictEqual(result, 3);
    });
    it("Given sentence 'I dont even kno about this' and symbol ' ', returns 5", () => {
        const result = functsFromMain.numOfSymbols(" ")('I dont even kno about this');
        assert.strictEqual(result, 5);
    });
});