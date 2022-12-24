const express = require("express");

const app = express();
const port = 5000;

// ---> http://localhost:5000/isprime?number=7
app.get("/isprime", (req, res) => {
  const jsonResponse = isPrime(parseInt(req.query.number));
  res.status(200).json(jsonResponse);
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}🤖`);
});

function isPrime(number) {
  let startTime = new Date();
  let endTime = new Date();
  let isPrime = true;
  for (let i = 3; i < number; i++) {
    if (number % i === 0) {
      endTime = new Date();
      isPrime = false;
      break;
    }
  }
  if (isPrime) endTime = new Date();

  return{
    "number": number,
    "isPrime": isPrime,
    "time": endTime.getTime() - startTime.getTime()
  }
}
