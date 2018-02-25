const LineByLineReader = require('line-by-line');
const jsonfile = require('jsonfile');
const lr = new LineByLineReader('input.txt');
const outputFile = 'output.txt';
const { TRANSITION_TABLE } = require('./constants/transitionTable');
let lineNumber = 0;
let currentCharacter = -1;

//SET TO TRUE IF UNIT TESTING
const unitTest = false;
//empty the file
jsonfile.writeFile(outputFile,'Every [ ] is one line', function(err) {});
lr.on('line', (line) =>{
  lineNumber++;
  // console.log(getAllTokens(line));
  jsonfile.writeFile(outputFile, getAllTokens(line), {spaces: 2, flag: 'a'}, function(err) {})
});


function getAllTokens(input){
  let state = 1;
  const tokens = [];
  let tokenStart;
  let tokenFound = true;
  const inputToBuffer = input.split("");
  inputToBuffer.push('');
  for (let i = 0; i < inputToBuffer.length; i++) {
    currentCharacter++;
    let currentChar = inputToBuffer[i];
    if (tokenFound) {
      tokenStart = i;
      tokenFound = false;
    }
    state = TRANSITION_TABLE[state][currentChar];
    //Invalid token
    if (state === undefined) {
      tokens.push({Token: 'Error', position: currentCharacter, value: inputToBuffer.slice(tokenStart, i+1).join("").trim() });
      state = 1;
      tokenFound = true;
      continue;
    }
    if (TRANSITION_TABLE[state].isFinal) {
      tokenFound = true;
      if (TRANSITION_TABLE[state].backtrack) {
        i -= 1;
        currentCharacter--;
      }
      tokens.push({Token: TRANSITION_TABLE[state].token, position: currentCharacter, value: inputToBuffer.slice(tokenStart, i+1).join("").trim() });
      state = 1;
    }
  }
  if( unitTest ){
    currentCharacter = -1;
  }
  return tokens;
}

module.exports = getAllTokens;
