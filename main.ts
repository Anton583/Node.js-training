export { }
const { readFile, writeFile } = require("fs");

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
const writeNumSymbolsInFileIntoFile = (readFileName: string, writeFileName: string, symbolToCalc: string, callBack: (err: string) => void) => {
    readFile(readFileName, 'utf8', (err: string, data: string) => {
        if (err) {
            callBack(err)
        } else {
            writeFile(writeFileName, numOfSymbols(symbolToCalc)(data).toString(), callBack)
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





