import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../questions.service';

@Component({
    selector: 'dmmb-start',
    templateUrl: 'start.component.html'
})

export class StartComponent {
    constructor(private questionsService: QuestionsService,
        private router: Router) { }

    start() {
        this.questionsService.hasCompleted()
            .subscribe(() => {
                this.questionsService.start();
                this.router.navigate(['/questions/question/0']);
            },
            () => {
                this.router.navigate(['/questions/end', { done: true }]);
            });
    }
}