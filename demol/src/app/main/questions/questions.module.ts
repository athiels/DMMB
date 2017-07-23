import { NgModule } from '@angular/core';

import { Question } from './question.model';
import { QuestionsComponent } from './questions.component';
import { QuestionsService } from './questions.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        QuestionsComponent
    ],
    providers: [QuestionsService],
})
export class QuestionsModule { }
