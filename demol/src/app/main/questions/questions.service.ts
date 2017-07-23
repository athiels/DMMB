import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Question } from './question.model';

@Injectable()
export class QuestionsService {

    constructor(private http: Http) { }

    getQuestions() {
        return this.http.get('/api/questions')
            .map(this.mapQuestions)
    }

    private mapQuestions = res => {
        const questions = res.json();
        return _.map(questions, question => {
            return Question.fromDto(question);
        });
    }
}