export { }
const { readFile, writeFile } = require("fs");


// Creates clojure
// Curried version:
// calculate number of particular symbol in string
const numOfSymbols = (symbol: string) => (str: string) => Array
    // array from a given string
    .from(str)
    // if element in array equals given symbol - increase number
    .reduce((acc, curr) => curr.toLowerCase() === symbol
        ? (acc + 1)
        : acc,
        0
    );


// read file, calculate number of appearences of particular symbol,
// create new file, put the number there
const writeNumSymbolsInFileIntoFile = (readFileName: string, writeFileName: string, symbolToCalc: string) => {
    readFile(readFileName, 'utf8', (err: string, data: string) => {
        if (err) {
            throw err
        } else {
            writeFile(writeFileName, numOfSymbols(symbolToCalc)(data).toString(), (err: string) => {
                if (err) {
                    throw err
                }
            })
        }
    })
}

// calculate number of vowels in string
const numVowels = (str: string) => {
    let res = 0;
    for (let ch of str.toLowerCase()) {
        if (ch === "a" || ch === "e" || ch === "o" || ch === "y" || ch === "i" || ch === "u") {
            res += 1;
        }
    }
    return res;
}

exports.writeNumSymbolsInFileIntoFile = writeNumSymbolsInFileIntoFile;
exports.numOfSymbols = numOfSymbols;
exports.numVowels = numVowels;





