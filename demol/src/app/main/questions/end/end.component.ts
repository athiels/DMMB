import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dmmb-end',
    templateUrl: 'end.component.html',
    styleUrls: ['end.component.scss']
})

export class EndComponent implements OnInit {

    done = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        const param = this.route.snapshot.params['done'];
        if (param) {
            this.done = JSON.parse(param);
        }
    }

}