import * as _ from 'lodash';

import { Observable } from 'rxjs/Rx';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EliminationService {

    constructor(private http: Http) { }

    getIsPlayerEliminated(name) {
        return this.http.get('./assets/data/eliminated.json')
            .map(res => res.json())
    }
}
