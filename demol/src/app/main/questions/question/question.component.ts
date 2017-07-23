import { Component, OnInit } from '@angular/core';

import { Question } from '../question.model';

@Component({
    selector: 'dmmb-question',
    templateUrl: 'question.component.html'
})

export class QuestionComponent {

    private question: Question;

    constructor() { }
}