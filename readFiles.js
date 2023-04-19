const fs = require('fs');

const data = fs.readFileSync('./filesToReadFrom/text.txt', 'utf8');

console.log(data);

const wordsArr = ['digital', 'technology', 'agile', 'future'];

const isMatch = (search, content) => {
  // Lowarize the search term and the content.
  search = search.toLowerCase();
  content = content.toLowerCase();

  // Remove all inner spaces and keep only one space between two words.
  search = search.replace(/\s\s+/g, ' ').trim();

  // Add the pipe operator to match any single word.
  search = search.replace(' ', '|');

  // Match any word in the content.
  if (content.match(new RegExp(search, 'g'))) {
    /* console.log(`the word ${search} exists in the file`); */
    return true;
  }
  /* console.log(`Could not find the word ${search} in this file`); */
  return false;
};

function readCurrentFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    console.log('from func : \n' + data.toString());

    /* if (data.toString().includes('digital')) {
      console.log('found the word');
    } */
    // function isMatch to find specific word in text
    if (
      isMatch('html', data.toString()) == true ||
      isMatch('css', data.toString()) == true ||
      isMatch('javascript', data.toString()) == true ||
      isMatch('react', data.toString()) == true ||
      isMatch('node.js', data.toString()) == true
    ) {
      console.log('You should apply for a developer job');
    }
    // isMatch('javascript', data.toString());
    // isMatch('react', data.toString());
    // isMatch('node.js', data.toString());
    // isMatch('next.js', data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

readCurrentFile('./newFile/latestInput.txt');
