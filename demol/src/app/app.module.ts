import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './main/login/login.module';
import { MainModule } from 'app/main/main.module';
import { EliminationModule } from 'app/main/elimination/elimination.module';
import { QuestionsModule } from './main/questions/questions.module';
import { QuestionsService } from './main/questions/questions.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MainModule,
        EliminationModule,
        LoginModule,
        QuestionsModule,
        AppRoutingModule
    ],
    providers: [QuestionsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
