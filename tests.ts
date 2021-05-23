const functsFromMain = require('./main');
const { readFile } = require('fs')
const assert = require('assert');
const { writeNumSymbolsInFileIntoFile, numOfSymbols, numVowels } = functsFromMain

// read data.txt file
readFile('data.txt', 'utf8', (err: string, data: string) => {
    if (err) {
        throw err
    } else {
        // find number of symbol 'l' in data.txt and pass value to function
        getNumOfSymbInDataFile(numOfSymbols("l")(data))
    }
})

// number of symbol in data.txt file
let numOfSymbInDataFile: number

// get number of symbol in data.txt and assign to variable 
const getNumOfSymbInDataFile = (numOfSymb: number) => {
    numOfSymbInDataFile = numOfSymb
}


// test for writeNumSymbolsInFileIntoFile function
describe("formReadRes", () => {
    it("Given number of 'l' symbol in data.txt file, outputs 569984 in the result.txt file", () => {
        // execute function
        writeNumSymbolsInFileIntoFile('data.txt', 'result.txt', "l")
        // wait 1 sec for result.txt file to be created
        setTimeout(function () {
            // read result.txt file
            readFile('result.txt', 'utf8', (err: string, data: string) => {
                if (err) {
                    throw err
                } else {
                    // number of symbols to integer 
                    const numOfSymbInResFile = parseInt(data)
                    // check if number of symbol 'l' in result.txt file 
                    // is equal to number of 'l' symbol in data.txt
                    assert.strictEqual(numOfSymbInResFile, numOfSymbInDataFile)
                }
            })
        }, 1000)
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