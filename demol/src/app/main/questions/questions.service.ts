import * as _ from 'lodash';
import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Question } from './question.model';

@Injectable()
export class QuestionsService {

    private questions: Question[];
    private startTime;

    constructor(private http: Http) { }

    start() {
        this.startTime = moment();
    }

    stop(name, responses) {
        return this.http.get('/api/questionRound').subscribe(
            res => {
                const round = res.json().round;

                const payload = {
                    name: name,
                    time: moment().diff(this.startTime),
                    responses: responses,
                    questionsRound: round
                };

                return this.http.post('/api/responses', payload);
            });
    }

    getQuestions() {
        if (!this.questions) {
            console.log('get questions');
            return this.http.get('/api/questions')
                .map(this.mapQuestions)
        }
    }

    getQuestion(index) {
        console.log('get local question');
        console.log(this.questions);
        return this.questions[index];
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