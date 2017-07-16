import { Route, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

export class LoginRoutes {

    static default: Route = {
        path: 'login',
        component: LoginComponent,
    };

    static routes: Routes = [
        LoginRoutes.default
    ];
}
