import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EndComponent } from './end/end.component';
import { Question } from './question.model';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions.component';
import { QuestionsService } from './questions.service';
import { StartComponent } from './start/start.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        EndComponent,
        QuestionsComponent,
        QuestionComponent,
        StartComponent
    ]
})
export class QuestionsModule { }
