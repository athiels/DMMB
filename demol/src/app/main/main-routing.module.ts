import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from 'app/main/main.component';
import { EliminationRoutes } from 'app/main/elimination/elimination.routes';
import { LoginRoutes } from "app/main/login/login.routes";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent,
                children: [
                    ...EliminationRoutes.routes,
                    ...LoginRoutes.routes,
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }
