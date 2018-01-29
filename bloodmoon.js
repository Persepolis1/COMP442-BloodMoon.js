const LineByLineReader = require('line-by-line');
const lr = new LineByLineReader('input.txt');
const { TRANSITION_TABLE } = require('./constants/transitionTable');
let lineNumber = 0;

lr.on('line', (line) =>{
  lineNumber++;
  console.log(getAllTokens(line));
});

// console.log(getAllTokens('<'));
function nextToken(){
  let state = 1;
  let token;

}

function getAllTokens(input){
  let state = 1;
  const tokens = [];
  let tokenStart;
  let tokenFound = true;
  const inputToBuffer = input.split("");
  inputToBuffer.push('');
  //console.log(inputToBuffer);
  for (let i = 0; i < inputToBuffer.length; i++) {
    let currentChar = inputToBuffer[i];
    if (tokenFound) {
      tokenStart = i;
      tokenFound = false;
    }
    state = TRANSITION_TABLE[state][currentChar];
    if (TRANSITION_TABLE[state].isFinal) {
      tokenFound = true;
      if (TRANSITION_TABLE[state].backtrack) {
        i -= 1;
      }
      tokens.push({Token: TRANSITION_TABLE[state].token, Line: lineNumber, SRC: inputToBuffer.slice(tokenStart, i+1).join("") });
      state = 1;
    }
  }
  return tokens;
}
