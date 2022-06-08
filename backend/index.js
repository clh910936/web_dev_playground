const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    next();
});

app.get('/', (req, res) => {
    const data = {response: "yes"};

    res.send(JSON.stringify(data));
})

app.put('/add', (req, res) => {
    const body = req.body;
    console.log(body);
    const firstNumber = body.firstNumber;
    const secondNumber = body.secondNumber;
    res.send(JSON.stringify({result: firstNumber+secondNumber}));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})