const getAllTokens = require('../../bloodmoon');
describe('Lexer Tests', () => {
  describe('Single token tests', () => {
    it('<', () => {
      const expectedTokens = [
        {
          "Token": "LT",
          "position": 0,
          "value": "<"
        },
      ]
      expect(getAllTokens('<')).toEqual(expectedTokens);
    });
    it('<=', () => {
      const expectedTokens = [
        {
          "Token": "LTE",
          "position": 1,
          "value": "<="
        },
      ]
      expect(getAllTokens('<=')).toEqual(expectedTokens);
    });
    it('<>', () => {
      const expectedTokens = [
        {
          "Token": "NOT_EQUAL",
          "position": 1,
          "value": "<>"
        },
      ]
      expect(getAllTokens('<>')).toEqual(expectedTokens);
    });
    it('>', () => {
      const expectedTokens = [
        {
          "Token": "GT",
          "position": 0,
          "value": ">"
        },
      ]
      expect(getAllTokens('>')).toEqual(expectedTokens);
    });
    it('>=', () => {
      const expectedTokens = [
        {
          "Token": "GTE",
          "position": 1,
          "value": ">="
        },
      ]
      expect(getAllTokens('>=')).toEqual(expectedTokens);
    });
    it('==', () => {
      const expectedTokens = [
        {
          "Token": "DOUBLE_EQUAL",
          "position": 1,
          "value": "=="
        },
      ]
      expect(getAllTokens('==')).toEqual(expectedTokens);
    });
    it(':', () => {
      const expectedTokens = [
        {
          "Token": "COLON",
          "position": 0,
          "value": ":"
        },
      ]
      expect(getAllTokens(':')).toEqual(expectedTokens);
    });
    it('::', () => {
      const expectedTokens = [
        {
          "Token": "DOUBLE_COLON",
          "position": 1,
          "value": "::"
        },
      ]
      expect(getAllTokens('::')).toEqual(expectedTokens);
    });
    it(';', () => {
      const expectedTokens = [
        {
          "Token": "SEMI_COLON",
          "position": 0,
          "value": ";"
        },
      ]
      expect(getAllTokens(';')).toEqual(expectedTokens);
    });
    it(',', () => {
      const expectedTokens = [
        {
          "Token": "COMMA",
          "position": 0,
          "value": ","
        },
      ]
      expect(getAllTokens(',')).toEqual(expectedTokens);
    });
    it('.', () => {
      const expectedTokens = [
        {
          "Token": "PERIOD",
          "position": 0,
          "value": "."
        },
      ]
      expect(getAllTokens('.')).toEqual(expectedTokens);
    });
    it('(', () => {
      const expectedTokens = [
        {
          "Token": "OPEN_PAR",
          "position": 0,
          "value": "("
        },
      ]
      expect(getAllTokens('(')).toEqual(expectedTokens);
    });
    it(')', () => {
      const expectedTokens = [
        {
          "Token": "CLOSE_PAR",
          "position": 0,
          "value": ")"
        },
      ]
      expect(getAllTokens(')')).toEqual(expectedTokens);
    });
    it('{', () => {
      const expectedTokens = [
        {
          "Token": "OPEN_BRACE",
          "position": 0,
          "value": "{"
        },
      ]
      expect(getAllTokens('{')).toEqual(expectedTokens);
    });
    it('}', () => {
      const expectedTokens = [
        {
          "Token": "CLOSE_BRACE",
          "position": 0,
          "value": "}"
        },
      ]
      expect(getAllTokens('}')).toEqual(expectedTokens);
    });
    it('[', () => {
      const expectedTokens = [
        {
          "Token": "OPEN_BRACKET",
          "position": 0,
          "value": "["
        },
      ]
      expect(getAllTokens('[')).toEqual(expectedTokens);
    });
    it(']', () => {
      const expectedTokens = [
        {
          "Token": "CLOSE_BRACKET",
          "position": 0,
          "value": "]"
        },
      ]
      expect(getAllTokens(']')).toEqual(expectedTokens);
    });
    it('=', () => {
      const expectedTokens = [
        {
          "Token": "EQUAL",
          "position": 0,
          "value": "="
        },
      ]
      expect(getAllTokens('=')).toEqual(expectedTokens);
    });
    it('/*abc*/', () => {
      const expectedTokens = [
        {
          "Token": "MULTI_COMMENT",
          "position": 6,
          "value": "/*abc*/"
        },
      ]
      expect(getAllTokens('/*abc*/')).toEqual(expectedTokens);
    });
    it('//', () => {
      const expectedTokens = [
        {
          "Token": "COMMENT",
          "position": 2,
          "value": "//"
        },
      ]
      expect(getAllTokens('//')).toEqual(expectedTokens);
    });
    it('and', () => {
      const expectedTokens = [
        {
          "Token": "AND",
          "position": 2,
          "value": "and"
        },
      ]
      expect(getAllTokens('and')).toEqual(expectedTokens);
    });
    it('not', () => {
      const expectedTokens = [
        {
          "Token": "NOT",
          "position": 2,
          "value": "not"
        },
      ]
      expect(getAllTokens('not')).toEqual(expectedTokens);
    });
    it('or', () => {
      const expectedTokens = [
        {
          "Token": "OR",
          "position": 1,
          "value": "or"
        },
      ]
      expect(getAllTokens('or')).toEqual(expectedTokens);
    });
    it('if', () => {
      const expectedTokens = [
        {
          "Token": "IF",
          "position": 1,
          "value": "if"
        },
      ]
      expect(getAllTokens('if')).toEqual(expectedTokens);
    });
    it('then', () => {
      const expectedTokens = [
        {
          "Token": "THEN",
          "position": 3,
          "value": "then"
        },
      ]
      expect(getAllTokens('then')).toEqual(expectedTokens);
    });
    it('else', () => {
      const expectedTokens = [
        {
          "Token": "ELSE",
          "position": 3,
          "value": "else"
        },
      ]
      expect(getAllTokens('else')).toEqual(expectedTokens);
    });
    it('for', () => {
      const expectedTokens = [
        {
          "Token": "FOR",
          "position": 2,
          "value": "for"
        },
      ]
      expect(getAllTokens('for')).toEqual(expectedTokens);
    });
    it('class', () => {
      const expectedTokens = [
        {
          "Token": "CLASS",
          "position": 4,
          "value": "class"
        },
      ]
      expect(getAllTokens('class')).toEqual(expectedTokens);
    });
    it('int', () => {
      const expectedTokens = [
        {
          "Token": "INT",
          "position": 2,
          "value": "int"
        },
      ]
      expect(getAllTokens('int')).toEqual(expectedTokens);
    });
    it('float', () => {
      const expectedTokens = [
        {
          "Token": "FLOAT",
          "position": 4,
          "value": "float"
        },
      ]
      expect(getAllTokens('float')).toEqual(expectedTokens);
    });
    it('get', () => {
      const expectedTokens = [
        {
          "Token": "GET",
          "position": 2,
          "value": "get"
        },
      ]
      expect(getAllTokens('get')).toEqual(expectedTokens);
    });
    it('put', () => {
      const expectedTokens = [
        {
          "Token": "PUT",
          "position": 2,
          "value": "put"
        },
      ]
      expect(getAllTokens('put')).toEqual(expectedTokens);
    });
    it('return', () => {
      const expectedTokens = [
        {
          "Token": "RETURN",
          "position": 5,
          "value": "return"
        },
      ]
      expect(getAllTokens('return')).toEqual(expectedTokens);
    });
    it('program', () => {
      const expectedTokens = [
        {
          "Token": "PROGRAM",
          "position": 6,
          "value": "program"
        },
      ]
      expect(getAllTokens('program')).toEqual(expectedTokens);
    });
  });
  describe('Identifier tests', ()=>{
    it('x', () => {
      const expectedTokens = [
        {
          "Token": "ID",
          "position": 0,
          "value": "x"
        },
      ]
      expect(getAllTokens('x')).toEqual(expectedTokens);
    });
    it('x1234', () => {
      const expectedTokens = [
        {
          "Token": "ID",
          "position": 4,
          "value": "x1234"
        },
      ]
      expect(getAllTokens('x1234')).toEqual(expectedTokens);
    });
    it('int__', () => {
      const expectedTokens = [
        {
          "Token": "ID",
          "position": 4,
          "value": "int__"
        },
      ]
      expect(getAllTokens('int__')).toEqual(expectedTokens);
    });
    it('abc_1', () => {
      const expectedTokens = [
        {
          "Token": "ID",
          "position": 4,
          "value": "abc_1"
        },
      ]
      expect(getAllTokens('abc_1')).toEqual(expectedTokens);
    });
    it('1abc', () => {
      const expectedTokens = [
        {
          "Token": "INTEGER_LITERAL",
          "position": 0,
          "value": "1"
        },
        {
          "Token": "ID",
          "position": 3,
          "value": "abc"
        },
      ]
      expect(getAllTokens('1abc')).toEqual(expectedTokens);
    });
    it('_abc', () => {
      const expectedTokens = [
        {
          "Token": "Error",
          "position": 0,
          "value": "_"
        },
        {
          "Token": "ID",
          "position": 3,
          "value": "abc"
        },
      ]
      expect(getAllTokens('_abc')).toEqual(expectedTokens);
    });
  });
  describe('Integer and floats literals', () =>{
    it('12345', () => {
      const expectedTokens = [
        {
          "Token": "INTEGER_LITERAL",
          "position": 4,
          "value": "12345"
        },
      ]
      expect(getAllTokens('12345')).toEqual(expectedTokens);
    });
    it('0', () => {
      const expectedTokens = [
        {
          "Token": "INTEGER_LITERAL",
          "position": 0,
          "value": "0"
        },
      ]
      expect(getAllTokens('0')).toEqual(expectedTokens);
    });
    it('0.0', () => {
      const expectedTokens = [
        {
          "Token": "FLOAT_LITERAL",
          "position": 2,
          "value": "0.0"
        },
      ]
      expect(getAllTokens('0.0')).toEqual(expectedTokens);
    });
    it('1232.23456', () => {
      const expectedTokens = [
        {
          "Token": "FLOAT_LITERAL",
          "position": 9,
          "value": "1232.23456"
        },
      ]
      expect(getAllTokens('1232.23456')).toEqual(expectedTokens);
    });
    it('1232.23456e+123', () => {
      const expectedTokens = [
        {
          "Token": "FLOAT_LITERAL",
          "position": 14,
          "value": "1232.23456e+123"
        },
      ]
      expect(getAllTokens('1232.23456e+123')).toEqual(expectedTokens);
    });
    it('1232.23456e-123', () => {
      const expectedTokens = [
        {
          "Token": "FLOAT_LITERAL",
          "position": 14,
          "value": "1232.23456e-123"
        },
      ]
      expect(getAllTokens('1232.23456e-123')).toEqual(expectedTokens);
    });
    it('12.34e+01', () => {
      const expectedTokens = [
        {
          "Token": "FLOAT_LITERAL",
          "position": 7,
          "value": "12.34e+0"
        },
        {
          "Token": "INTEGER_LITERAL",
          "position": 8,
          "value": "1"
        },
      ]
      expect(getAllTokens('12.34e+01')).toEqual(expectedTokens);
    });
  })
});
