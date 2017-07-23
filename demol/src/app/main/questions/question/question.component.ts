import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Question } from '../question.model';
import { QuestionsService } from '../questions.service';

@Component({
    selector: 'dmmb-question',
    templateUrl: 'question.component.html'
})

export class QuestionComponent {

    question: Question = Question.empty();

    constructor(private route: ActivatedRoute,
        private questionsService: QuestionsService) {
            this.question = this.questionsService.getQuestion(0);
    }
}