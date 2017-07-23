import { Component, OnInit } from '@angular/core';

import { Question } from './question.model';
import { QuestionsService } from './questions.service';

@Component({
    selector: 'dmmb-questions',
    templateUrl: 'questions.component.html'
})

export class QuestionsComponent implements OnInit {

    private questions: Question[];

    constructor(private questionsService: QuestionsService) { }

    public ngOnInit() {
        this.questionsService.getQuestions().subscribe(
            (questions) => {
                this.questions = questions;
            }
        )
    }
}