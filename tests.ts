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


    it("Given write number of symbol 'l' in 'data.txt' to 'result.txt', number in result file should be correct", (done) => {

        // read 'data.txt' and calculate number of symbol 'l'
        readFile('data.txt', 'utf8', (err: string, data: string) => {
            if (err) {
                throw err
            }
            else {

                // number of symbol 'l' in 'data.txt' file
                const numOfSymbFromDataFile = numOfSymbols('l')(data)

                // callBack for writeNumSymbolsInFileIntoFile
                const callBackForTestFunct = (err: string, data: string) => {
                    if (err) {
                        done(err)
                    } else {
                        // get data from 'result.txt' and compare to that in 'data.txt'
                        const numOfSymbInResFile = parseInt(data)
                        assert.strictEqual(numOfSymbInResFile, numOfSymbFromDataFile)
                        done()
                    }
                }

                // call test function with callBack after file is read 
                testWriteNumFunct(callBackForTestFunct)
            }
        })

        // test function writeNumSymbolsInFileIntoFile by calling it with callBack
        const testWriteNumFunct = (callBackForTestFunct: (err: string, data: string) => void) => {
            writeNumSymbolsInFileIntoFile('data.txt', 'result.txt', "l", (err: string) => {
                if (err) {
                    throw err
                } else {
                    readFile('result.txt', 'utf8', callBackForTestFunct)
                }
            })
        }
    })

    it("Given empty file writes '0' to 'result.txt'", (done) => {
        // callback for writeNumSymbolsInFileIntoFile
        const callBack = (err: string, data: string) => {
            if (err) {
                done(err)
            } else {
                // get data from 'result.txt' and compare to that in 'data.txt'
                const numOfSymbInResFile = parseInt(data)
                assert.strictEqual(numOfSymbInResFile, 0)
                done()
            }
        }
        writeNumSymbolsInFileIntoFile('empty.txt', 'result.txt', "l", (err: string) => {
            if (err) {
                throw err
            } else {
                readFile('result.txt', 'utf8', callBack)
            }
        })
    })
    it("Given non-existing file, throws error", (done) => {
        // callback for function 
        const callBack = (err: string) => {
            // if error present, test is successful
            if (err) {
                console.log("I see error, test is ok!")
                done()
            }
        }
        writeNumSymbolsInFileIntoFile('doesntExist.txt', 'result.txt', "l", callBack)
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