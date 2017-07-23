import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Question } from './question.model';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions.component';
import { QuestionsService } from './questions.service';
import { StartComponent } from './start/start.component';

@NgModule({
    imports: [
        RouterModule
    ],
    exports: [],
    declarations: [
        QuestionsComponent,
        QuestionComponent,
        StartComponent
    ],
    providers: [QuestionsService],
})
export class QuestionsModule { }
