// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { FixedWidthParser } = require("fixed-width-parser");

const fixedWidthParser = new FixedWidthParser([
  {
    type: 'string',
    name: 'selskab',
    start: 0,
    width: 4,
  },
  {
    type: 'string',
    name: 'ejendom',
    start: 4,
    width: 6,
  },
  {
    type: 'string',
    name: 'lejemaal',
    start: 10,
    width: 6,
  },
  {
    type: 'string',
    name: 'lejer',
    start: 16,
    width: 3,
  },
  {
    name: 'filler0',
    start: 19,
    width: 2
  },
  {
    name: 'amount',
    start: 21,
    width: 10
  },
  {
    name: 'fortegn',
    start: 31,
    width: 1,
  },
  {
    name: 'filler1',
    start: 32,
    width: 18,
  },
  {
    name: 'ctype',
    start: 50,
    width: 3,
  },
  {
    name: 'debetcredit',
    start: 53,
    width: 1,
  },
  {
    name: 'filler2',
    start: 54,
    width: 11,
  },
]);
// hack
/*const input = `1234567894     0100          50                   C&1                           
0143000036000001002  0000393687-                  C&3-           
0143000036000002002  0000016041-                  C&3-           
0143000036000003004  0000437215-                  C&3-           
0143000036000004002  0000058481                   C&30           
0143000036000005008  0000730943-                  C&3-           
0143000036000006006  0000311433-                  C&3-           
0143000036000007006  0000269142-                  C&3-           
0143000036000008006  0000224407-                  C&3-           
0143000036000009002  0000453614-                  C&3-           
0143000036000003004  0000022182                   C&30           
0143000036000003004  0000033272                   C&30           
9999999998           0002722547-                  RC`;*/




export default (req, res) => {
    console.log(req.body);
    const input = req.body;
    const result = fixedWidthParser.parse(input);
    // todo: make sure to test for empty
    res.statusCode = 200;
  //  res.json({ name: 'John Doei', inf: JSON.stringify(req.body)});
    res.json({ consumptionStatements: result});
  }