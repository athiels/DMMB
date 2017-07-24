import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { QuestionsService } from './questions.service';

@Injectable()
export class QuestionsStartedGuard implements CanActivate {

    constructor(private router: Router, private questionsService: QuestionsService) { }

    canActivate() {
        if (this.questionsService.hasStarted()) {
            return true;
        }

        this.router.navigate(['questions/start']);
        return false;
    }
}