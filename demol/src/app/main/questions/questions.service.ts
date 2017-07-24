import * as _ from 'lodash';
import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Question } from './question.model';

@Injectable()
export class QuestionsService {

    private questions = new Array<Question>();
    private answers = new Array<Number>();
    private startTime;
    private questionIndex;

    constructor(private http: Http) { }

    start() {
        this.questionIndex = 0;
        this.startTime = moment();
    }

    hasStarted() {
        return Boolean(this.startTime);
    }

    next() {
        this.questionIndex++;
        if (!this.isValidQuestion()) {
            return null;
        }
        return this.questionIndex;
    }

    answer(answer) {
        this.answers.push(answer);
    }

    stop() {
        return this.http.get('/api/questionRound').flatMap(
            res => {
                const name = "Xavier";
                const round = res.json().round;

                const payload = {
                    name: name,
                    time: moment().diff(this.startTime),
                    responses: this.answers,
                    questionsRound: round
                };

                return this.http.post('/api/responses', payload);
            });
    }

    private isValidQuestion() {
        return this.questionIndex <= this.questions.length - 1;
    }

    getQuestions() {
        return this.http.get('/api/questions')
            .map(this.mapQuestions);
    }

    getQuestion() {
        console.log(this.questionIndex);
        console.log(this.questions[this.questionIndex]);
        return this.questions[this.questionIndex];
    }

    private mapQuestions = res => {
        const questions = res.json();
        this.questions =  _.map(questions, question => {
            return Question.fromDto(question);
        });
    }

    private mapRound = res => {
        return res.json().round;
    }
}