var questionRound;
getQuestionRound();
var pasvragen = [];
getPasvragen();
var correctAnswers;
getCorrectAnswers();
scores = [];
allScores = [];
allScoreFiles = [];

function getQuestionRound() {
    var fs = require('fs');
    var data = fs.readFileSync('QuestionFile/QuestionRound.json', 'utf8');
    var obj = JSON.parse(data);
    console.log('Questionroud = ' + obj.round);
    questionRound = obj.round;
}

function getCorrectAnswers() {
    var fs = require('fs');
    var obj;
    var data = fs.readFileSync('AnswerFile/Answers1.json', 'utf8');
    obj = JSON.parse(data);
    //console.log('Answers = ' + obj.answers);
    correctAnswers = obj.answers;
    openFiles();
}

function getPasvragen() {
    var fs = require('fs');
    var obj;
    var data = fs.readFileSync('./pasvragen.json', 'utf8');
    obj = JSON.parse(data);
    //console.log('Pasvragen = ' + obj);
    pasvragen = obj;
}

function openFiles() {
    var glob = require("glob");
    glob("./ResponseFiles/*" + questionRound + ".json", function (err, files) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("\r\n");
        for (f = 0; f < files.length; f++) {
            console.log("Handling file " + files[f]);
            var fs = require('fs');
            var obj;
            var data = fs.readFileSync(files[f], 'utf8');
            obj = JSON.parse(data);
            //console.log(obj);
            calculateScores(obj);
        }
        writeScoresToFile();
    })
}

function calculateScores(obj) {
    i = 0;
    score = 0;
    for (i = 0; i < obj.responses.length; i++) {
        if (obj.responses[i] === correctAnswers[i]) {
            score++;
        }
    }
    for (i = 0; i < pasvragen.length; i++) {
        if (obj.name === pasvragen[i].name) {
            score += pasvragen[i].pasvragen;
            if (pasvragen[i].pasvragen > 0) {
                console.log(pasvragen[i].pasvragen + " punten toegevoegd bij " + obj.name);
            }
        }
    }
    if (score > correctAnswers.length) {
        score = correctAnswers.length;
    }
    //console.log(obj.name + ' scored ' + score + '/' + correctAnswers.length);
    var s = {
        "name": obj.name
        , "time": obj.time
        , "score": score
    }
    scores.push(s);
}

function writeScoresToFile() {
    scores.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.firstname) return 1;
        return 0;
    });
    //console.log(scores);
    var json = JSON.stringify(scores);
    var fs = require('fs');
    var dir = './Scores';
    if (!fs.existsSync(dir)) {
        console.log("Creating ResponseFiles dir...");
        fs.mkdirSync(dir);
    }
    fs.writeFile("Scores/ScoresRound" + questionRound + '.json', json, 'utf8', function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log('The file has been saved! \r\n');
            createTotalFile();
        }
    });
}

function createTotalFile() {
    var allsc = [];
    for (i = 0; i < questionRound; i++) {
        var fs = require('fs');
        var obj;
        var data = fs.readFileSync('./Scores/ScoresRound' + (i + 1) + '.json', 'utf8');
        obj = JSON.parse(data);
        allScoreFiles.push(obj);
    }
    for (i = 0; i < allScoreFiles[0].length; i++) {
        var name;
        var totalScore = 0;
        var totalTime = 0;
        for (j = 0; j < questionRound; j++) {
            name = allScoreFiles[j][i].name;
            totalScore += allScoreFiles[j][i].score;
            totalTime += allScoreFiles[j][i].time;
        }
        var t = {
                "name": name
                , "time": totalTime
                , "score": totalScore
            }
            //console.log(t);
        allsc.push(t);
    }
    allsc.sort(function (a, b) {
        return b.score - a.score || a.time - b.time;
    });
    var fs = require('fs');
    var json = JSON.stringify(allsc);
    fs.writeFile("Scores/TotalScores.json", json, 'utf8', function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log('Total scores file has been saved! \r\n');
        }
    });
    var eliminated = [];
    for (i = 1; i < 5; i++) {
        eliminated.push(allsc[allsc.length - i].name);
    }
    writeEliminationFile(eliminated);
}

function writeEliminationFile(eliminated) {
    var fs = require('fs');
    var json = JSON.stringify(eliminated);
    fs.writeFile("Elimination/EliminationFile.json", json, 'utf8', function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log('Elimination file has been saved! \r\n');
        }
    });
}