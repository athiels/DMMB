const express = require('express');
const router = express.Router();
var questionRound;
getQuestionRound();

function getQuestionRound() {
    var fs = require('fs');
    var obj;
    fs.readFile('QuestionFile/QuestionRound.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log('Started server for questionroud ' + obj.round);
        questionRound = obj;
    });
}

function handleError(res, err) {
	res.status(500).send(err);
}

router.get('/questionRound', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(questionRound);
});
router.get('/questions', function (req, res) {
    var fs = require('fs');
    var obj;
    fs.readFile('QuestionFile/QuestionFile' + questionRound.round + '.json', 'utf8', function (err, data) {
        if (err) {
			handleError(res, err);
		}
		else {
			obj = JSON.parse(data);
			//console.log(obj);
			res.setHeader('Content-Type', 'application/json');
			res.send(obj);
		}
    });
});
router.get('/questionrounddone', function (req, res) {
    var resp = req.query;
    console.log(resp);
    var fs = require('fs');
    var file = "./ResponseFiles/" + resp.name + questionRound.round + ".json";
    console.log(file);
    if (!fs.existsSync(file)) {
        res.status(200).send();
    }
    else {
        handleError(res, null);
    }
});
router.post('/responses', function (req, res) {
    //console.log(req.body);
    var resp = req.body;
    console.log(resp);
    var name = resp.name;
    var time = resp.time;
    var responses = resp.responses;
    var questionsRound = resp.questionsRound;
    var responsesFile = {
        "name": name,
		"questionsRound": questionsRound,
		"time": time,
		"responses": responses
    }
    var json = JSON.stringify(responsesFile);
    var fs = require('fs');
    var dir = './ResponseFiles';
    if (!fs.existsSync(dir)) {
        console.log("Creating ResponseFiles dir...");
        fs.mkdirSync(dir);
    }
    fs.writeFile("ResponseFiles/" + name + questionsRound + '.json', json, 'utf8', function(err) {
 		if (err) {
 			handleError(res, err);
 		}
 		else {
 			console.log('The file has been saved!');
 			res.status(200).send();
 		}
	});
});
router.get('/elimination', function (req, res) {
    var fs = require('fs');
    var obj;
    fs.readFile('Elimination/EliminationFile.json', 'utf8', function (err, data) {
        if (err) {
			handleError(res, err);
		}
		else {
			obj = JSON.parse(data);
			console.log(obj);
			res.setHeader('Content-Type', 'application/json');
			res.send(obj);
		}
    });
});
module.exports = router;