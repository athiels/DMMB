import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EliminationService {

    constructor(private http: Http) { }

    getIsPlayerEliminated(name) {
        return this.http.get('/api/elimination')
            .map(res => res.json())
            .map(eliminated => eliminated.indexOf(name) !== -1);
    }
}
