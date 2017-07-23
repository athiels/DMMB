import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EliminationService } from './elimination.service';

@Component({
    selector: 'dmmb-elimination',
    templateUrl: 'elimination.component.html'
})

export class EliminationComponent {

    constructor(private eliminationService: EliminationService,
        private router: Router) { }

    onEnterName(name) {
        this.eliminationService.getIsPlayerEliminated(name).subscribe(
            (eliminated) => {
                this.router.navigate(['elimination/result', { eliminated: eliminated }]);
            }
        )
    }
}
