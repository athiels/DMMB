import { Route, Routes } from '@angular/router';

import { EliminationComponent } from "app/main/elimination/elimination.component";
import { EliminationResultComponent } from "app/main/elimination/elimination-result/elimination-result.component";
import { UserAdminGuard } from '../user/user-admin-guard.service';
import { UserLoggedInGuard } from "app/main/user/user-logged-in-guard.service";

export class EliminationRoutes {

    static default: Route = {
        path: 'elimination',
        component: EliminationComponent,
        canActivate: [UserLoggedInGuard, UserAdminGuard]
    };

    static result: Route = {
        path: 'elimination/result',
        component: EliminationResultComponent,
        canActivate: [UserLoggedInGuard, UserAdminGuard]
    };

    static routes: Routes = [
        EliminationRoutes.default,
        EliminationRoutes.result
    ];
}
