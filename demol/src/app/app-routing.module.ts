import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: ''
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
