const fs = require('fs');

const data = fs.readFileSync('./filesToReadFrom/text.txt', 'utf8');

console.log(data);

const wordsArr = ['digital', 'technology', 'agile', 'future'];

function readCurrentFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    console.log('from func : \n' + data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

function findKeyWords(func) {
    const data = func
    let isMatch;

    if (data.contains('digital')) {
        isMatch = true
    } else {
        isMatch = false
    }
    return isMatch
}

readCurrentFile('./newFile/latestInput.txt');
