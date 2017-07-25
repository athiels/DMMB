import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Question } from './question.model';

@Injectable()
export class QuestionsService {

    private questions = new Array<Question>();
    private answers;
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
        this.questionIndex = Math.min(this.questions.length - 1, this.questionIndex + 1);
        return this.questionIndex;
    }

    isLast() {
        return this.questionIndex === this.questions.length - 1;
    }

    answer(answer) {
        this.answers[this.questionIndex] = answer;
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

    getQuestions() {
        return this.http.get('/api/questions')
            .map(this.mapQuestions);
    }

    getQuestion() {
        return this.questions[this.questionIndex];
    }

    hasCompleted() {
        const params = new URLSearchParams();
        params.append('name', 'Xavier');

        return this.http.get('/api/questionrounddone', { search: params })
            .map(this.mapRoundComplete)
            .catch(() => Observable.throw('error'))
    }

    private mapQuestions = res => {
        const questions = res.json();
        this.questions = _.map(questions, question => {
            return Question.fromDto(question);
        });
        this.answers = new Array<Number>(this.questions.length);
    }

    private mapRoundComplete = res => {
        return res.json();
    }

    private mapRound = res => {
        return res.json().round;
    }
}