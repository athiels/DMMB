import { Route, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { UserNotLoggedInGuard } from '../user/user-not-logged-in-guard.service';

export class LoginRoutes {

    static default: Route = {
        path: 'login',
        component: LoginComponent,
        canActivate: [UserNotLoggedInGuard]
    };

    static routes: Routes = [
        LoginRoutes.default
    ];
}
