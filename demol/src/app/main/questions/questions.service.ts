import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Question } from './question.model';
import { UserService } from '../user/user.service';

@Injectable()
export class QuestionsService {

    private questions = new Array<Question>();
    private answers;
    private startTime;
    private questionIndex;

    constructor(private http: Http,
        private userService: UserService) { }

    start() {
        this.questionIndex = 0;
        this.startTime = moment();
        return this.questionIndex;
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
        const name = this.userService.getUsername();

        const payload = {
            name: name,
            time: moment().diff(this.startTime),
            responses: this.answers
        };

        return this.http.post('/api/responses', payload);
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
        params.append('name', this.userService.getUsername());

        return this.http.get('/api/questionrounddone', { search: params });
    }

    private mapQuestions = res => {
        const questions = res.json();
        this.questions = _.map(questions, question => {
            return Question.fromDto(question);
        });
        this.answers = new Array<Number>(this.questions.length);
    }

    private mapRound = res => {
        return res.json().round;
    }
}