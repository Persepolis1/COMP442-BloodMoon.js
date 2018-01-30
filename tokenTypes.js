// Arithmetic operators

const TokenType = {
  // Arithmetic Operators
  PLUS: 'PLUS', // +
  MINUS: 'MINUS', // -
  DIVIDE: 'DIVIDE', // /
  MULT: 'MULT', // *
  // Comparision Operators
  LT: 'LT', // <
  LTE: 'LTE', // <=
  NOT_EQUAL: 'NOT_EQUAL', // <>
  GT: 'GT', // >
  GTE: 'GTE', // >=
  DOUBLE_EQUAL: 'DOUBLE_EQUAL', // ==
  // Punctuation Operators
  COLON: 'COLON', // :
  DOUBLE_COLON: 'DOUBLE_COLON', // ::
  SEMI_COLON: 'SEMI_COLON', // ;
  COMMA: 'COMMA', // ,
  PERIOD: 'PERIOD', //.
  OPEN_PAR: 'OPEN_PAR', // (
  CLOSE_PAR: 'CLOSE_PAR', // )
  OPEN_BRACE: 'OPEN_BRACE', // {
  CLOSE_BRACE: 'CLOSE_BRACE', // }
  OPEN_BRACKET: 'OPEN_BRACKET', // [
  CLOSE_BRACKET: 'CLOSE_BRACKET', // ]
  // Assignment Operators
  EQUAL: 'EQUAL', // =
  // Comment Operators
  MULTI_COMMENT: 'MULTI_COMMENT', //  /* */
  COMMENT: 'COMMENT', // //
  // Reserved Keywords
  AND: 'AND',
  NOT: 'NOT',
  OR: 'OR',
  IF: 'IF',
  THEN: 'THEN',
  ELSE: 'ELSE',
  FOR: 'FOR',
  CLASS: 'CLASS',
  INT: 'INT',
  FLOAT: 'FLOAT',
  GET: 'GET',
  PUT: 'PUT',
  RETURN: 'RETURN',
  PROGRAM: 'PROGRAM',
  // Literals
  INTEGER_LITERAL: 'INTEGER_LITERAL',
  FLOAT_LITERAL: 'FLOAT_LITERAL',
  // Identifier
  ID: 'ID',
};


module.exports = {
  TokenType
};
