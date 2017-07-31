import { Component, OnInit } from '@angular/core';

import { Question } from './question.model';
import { QuestionsService } from './questions.service';

@Component({
    selector: 'dmmb-questions',
    templateUrl: 'questions.component.html'
})

export class QuestionsComponent implements OnInit {

    constructor(private questionsService: QuestionsService) { }

    ngOnInit() {
        this.questionsService.getQuestions().subscribe();
    }

    hasStarted() {
        return this.questionsService.hasStarted();
    }

    hasStopped() {
        return this.questionsService.hasStopped();
    }
}