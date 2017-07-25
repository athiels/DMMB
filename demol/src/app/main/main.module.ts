import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { QuestionsStartedGuard } from './questions/questions-started-guard.service';
import { UserService } from './user/user.service';
import { UserAdminGuard } from './user/user-admin-guard.service';
import { UserNoAdminGuard } from './user/user-no-admin-guard.service';
import { UserLoggedInGuard } from './user/user-logged-in-guard.service';
import { UserNotLoggedInGuard } from './user/user-not-logged-in-guard.service';

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
        UserAdminGuard,
        UserNoAdminGuard,
        UserLoggedInGuard,
        UserNotLoggedInGuard,
        QuestionsStartedGuard
    ]
})
export class MainModule { }
