import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EliminationComponent } from './elimination.component';
import { EliminationService } from "app/main/elimination/elimination.service";
import { EliminationResultComponent } from "app/main/elimination/elimination-result/elimination-result.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        EliminationComponent,
        EliminationResultComponent
    ],
    providers: [
        EliminationService
    ]
})
export class EliminationModule { }