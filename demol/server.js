var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('dist'));
app.use(bodyParser.json());
//
//
//
app.get('/questions', function (req, res) {
    var fs = require('fs');
    var obj;
    fs.readFile('QuestionFile/QuestionFile.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        //console.log(obj);
        res.setHeader('Content-Type', 'application/json');
        res.send(obj);
    });
});
app.post('/responses', function (req, res) {
    //console.log(req.body);
    var resp = req.body;
    console.log(resp);
    var name = resp.name;
    var time = resp.time;
    var responses = resp.responses;
    var questionsRound = resp.questionsRound;
    var responsesFile = {
        "name": name
        , "questionsRound": questionsRound
        , "time": time
        , "responses": responses
    }
    var json = JSON.stringify(responsesFile);
    var fs = require('fs');
    fs.writeFile("ResponseFiles/" + name + questionsRound + '.json', json, 'utf8');
    res.status(200).send();
});
app.get('/elimination', function (req, res) {
    var fs = require('fs');
    var obj;
    fs.readFile('Elimination/EliminationFile.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(obj);
        res.setHeader('Content-Type', 'application/json');
        res.send(obj);
    });
});
//
//
var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("De Mol app listening at http://%s:%s", host, port)
})