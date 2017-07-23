import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'dmmb-elimination-result',
    templateUrl: 'elimination-result.component.html',
    styleUrls: ['elimination-result.component.scss'],
    animations: [
        trigger('result', [
            state('failed', style({ backgroundColor: 'rgba(255, 0, 0, 0.8)' })),
            state('passed', style({ backgroundColor: 'rgba(102, 255, 102, .8)' })),
            transition('void => failed', animate('.1s ease-in', style({ backgroundColor: 'rgba(255, 0, 0, 0.8)' }))),
            transition('void => passed', animate('.1s ease-in', style({ backgroundColor: 'rgba(102, 255, 102, .8)' })))
        ])
    ]
})

export class EliminationResultComponent implements OnInit {

    result = '';
    
    private goBackTimer = 3000;

    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        const eliminated = JSON.parse(this.route.snapshot.params['eliminated']);
        this.animate(eliminated);
    }

    onAnimationEnd() {
        setTimeout(() => this.router.navigate(['elimination']), this.goBackTimer);
    }

    private animate(eliminated) {
        if (eliminated) {
            this.result = 'failed';
            return;
        }
        this.result = 'passed';
    }
}