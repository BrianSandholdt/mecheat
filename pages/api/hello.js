// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.body);
  res.statusCode = 200;
//  res.json({ name: 'John Doei', inf: JSON.stringify(req.body)});
  res.json({ name: 'John Doei', inf: String(req.body)});
}