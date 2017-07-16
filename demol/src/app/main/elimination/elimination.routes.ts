import { Route, Routes } from '@angular/router';

import { EliminationComponent } from "app/main/elimination/elimination.component";
import { EliminationResultComponent } from "app/main/elimination/elimination-result/elimination-result.component";
import { UserLoggedInGuard } from "app/main/user/user-logged-in-guard.service";

export class EliminationRoutes {

    static default1: Route = {
        path: '',
        redirectTo: 'elimination',
        pathMatch: 'full'
    };

    static default: Route = {
        path: 'elimination',
        component: EliminationComponent,
        canActivate: [UserLoggedInGuard]
    };

    static result: Route = {
        path: 'elimination/result',
        component: EliminationResultComponent,
        canActivate: [UserLoggedInGuard]
    };

    static routes: Routes = [
        EliminationRoutes.default1,
        EliminationRoutes.default,
        EliminationRoutes.result
    ];
}
