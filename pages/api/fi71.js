// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    console.log(req.body);
    const identNumber = Number(12345678901234);
    const creditorNumber = Number(12345678);
    //const FI71 = "+71<"+identNumber+" +"+creditorNumber+"<";
    const FI71 = `+71<${identNumber} +${creditorNumber}<`;

    const identArr = Array.from(String(identNumber), Number);

    /*const identSums = numArr.map((curElement, index) => {
        return ((index % 2) == 2 ? (curElement * 2) : curElement
    });*/

    const identSums = identArr.map((curElement, index) => {
        return ((index % 2) == 0) ? (curElement * 2) : curElement});


    res.statusCode = 200;
    res.json({ fi71: String(identSums)});
  }