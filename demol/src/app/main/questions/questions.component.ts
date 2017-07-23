import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Question } from './question.model';
import { QuestionsService } from './questions.service';

@Component({
    selector: 'dmmb-questions',
    templateUrl: 'questions.component.html'
})

export class QuestionsComponent implements OnInit {
    
    private questionIndex;

    started = false;

    constructor(private router: Router,
        private questionsService: QuestionsService) { }

    ngOnInit() {
        this.questionsService.getQuestions().subscribe();
    }

    start() {
        this.started = true;
        this.questionIndex = 0;
        this.questionsService.start();
        this.showQuestion();
    }

    next(answer) {
        this.questionIndex++;
        this.showQuestion();
    }

    private showQuestion() {
        this.router.navigate([`questions/question/${this.questionIndex}`]);
    }
}