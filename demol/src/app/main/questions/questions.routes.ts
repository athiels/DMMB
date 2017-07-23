import { Route, Routes } from '@angular/router';

import { QuestionsComponent } from './questions.component';
import { UserLoggedInGuard } from '../user/user-logged-in-guard.service';

export class QuestionsRoutes {

    static redirect: Route = {
        path: '',
        redirectTo: 'questions',
        pathMatch: 'full'
    };

    static default: Route = {
        path: 'questions',
        component: QuestionsComponent,
        canActivate: [UserLoggedInGuard]
    };

    static routes: Routes = [
        QuestionsRoutes.redirect,
        QuestionsRoutes.default
    ];
}
