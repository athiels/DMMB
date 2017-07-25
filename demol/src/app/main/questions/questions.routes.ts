import { Route, Routes } from '@angular/router';

import { EndComponent } from './end/end.component';
import { QuestionsComponent } from './questions.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsStartedGuard } from './questions-started-guard.service';
import { StartComponent } from './start/start.component';
import { UserLoggedInGuard } from '../user/user-logged-in-guard.service';

export class QuestionsRoutes {

    static redirect: Route = {
        path: '',
        redirectTo: 'questions/start',
        pathMatch: 'full'
    };

    static default: Route = {
        path: 'questions',
        component: QuestionsComponent,
        children: [
            {
                path: '',
                redirectTo: 'start',
                pathMatch: 'full'
            },
            {
                path: 'start',
                component: StartComponent
            },
            {
                path: 'question/:id',
                component: QuestionComponent,
                canActivate: [QuestionsStartedGuard]
            },
            {
                path: 'end',
                component: EndComponent
            },
        ],
        canActivate: [UserLoggedInGuard]
    };

    static routes: Routes = [
        QuestionsRoutes.redirect,
        QuestionsRoutes.default
    ];
}
