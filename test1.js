const { readFile, writeFile } = require("fs");
const assert = require('assert');

// Creates clojure
// Curried version:
const numOfSymbols = symbol => str => Array
    .from(str)
    .reduce((acc, curr) => curr.toLowerCase() === symbol
        ? (acc + 1)
        : acc,
        0
    );

const formReadRes = (readFileName) => (writeFileName) => (symbolToCalc) => {
    readFile(readFileName, 'utf8', (err, data) => {
        if (err)
            throw err
        else
            writeFile(writeFileName, numOfSymbols(symbolToCalc)(data).toString(), (err) => {
                if (err)
                    throw err
            })
    })
}


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





// TDD = Test-Driven Development

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

const numVowels = str => {
    let res = 0;

    for (let ch of str.toLowerCase()) {
        if (ch === "a" || ch === "e" || ch === "o" || ch === "y" || ch === "i" || ch === "u") {
            res += 1;
        }
    }

    return res;
}


const formReadResultTest = () => {
    formReadRes('data.txt')('result.txt')("l")
    describe("formReadRes", () => {
        it("given 'data.txt' contains the same number of symbol 'l' as written in the final file", () => {
            readFile('data.txt', 'utf8', (err, data) => {
                if (err)
                    throw err
                else {
                    const resNumOfSymbs = numOfSymbols("l")(data)
                    readFile('result.txt', 'utf8', (err, data) => {
                        if (err)
                            throw err
                        else {
                            const numOfSymbEInFile = parseInt(data)
                            assert.strictEqual(resNumOfSymbs, numOfSymbEInFile)
                        }
                    })
                }
            })
        })
    })
}
formReadResultTest()






