import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { UserService } from './user/user.service';
import { UserLoggedInGuard } from "app/main/user/user-logged-in-guard.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        UserService,
        UserLoggedInGuard
    ]
})
export class MainModule { }
