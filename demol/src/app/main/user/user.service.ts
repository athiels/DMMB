import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private username;

    constructor() { }

    isUserAvailable() {
        return true; //Boolean(this.username);
    }

    isAdmin() {
        return true; //this.username === 'Arne';
    }
}