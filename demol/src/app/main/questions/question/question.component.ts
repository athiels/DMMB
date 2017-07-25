import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Question } from '../question.model';
import { QuestionsService } from '../questions.service';

@Component({
    selector: 'dmmb-question',
    templateUrl: 'question.component.html',
    styleUrls: ['question.component.scss']
})

export class QuestionComponent {

    question = Question.empty();
    selectedAnswer = -1;
    columnSize = 12;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private questionsService: QuestionsService) {
            this.route.params.subscribe(() => {
                this.question = this.questionsService.getQuestion();
            });
    }

    isSelected(index) {
        return this.selectedAnswer == index;
    }

    get hasSelection() {
        return this.selectedAnswer !== -1;
    }

    select(index) {
        this.selectedAnswer = index;
    }

    next() {
        this.questionsService.answer(this.selectedAnswer);
        const questionIndex = this.questionsService.next();
        if (questionIndex) {
            this.router.navigate([`questions/question/${questionIndex}`]);
        }
        else {
            this.questionsService.stop().subscribe(() => {
                this.router.navigate(['']);
            });
        }
    }
}