import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EliminationService } from './elimination.service';

@Component({
    selector: 'dmmb-elimination',
    templateUrl: 'elimination.component.html'
})

export class EliminationComponent {

    name = '';

    constructor(private eliminationService: EliminationService,
        private router: Router) { }

    onEnterName() {
        this.eliminationService.getIsPlayerEliminated(name).subscribe(
            eliminated => {
                this.router.navigate(['elimination/result', { eliminated: eliminated }]);
            }
        )
    }
}
