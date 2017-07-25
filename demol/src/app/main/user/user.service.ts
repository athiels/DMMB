import { Injectable } from '@angular/core';

import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class UserService {

    private username;

    constructor(private localStorage: LocalStorageService) { }

    login(name) {
        this.username = name;
    }

    isUserAvailable() {
        if (!!!this.username) {
            const name = this.localStorage.retrieve('name');
            if (name) {
                this.login(name);
            }
        }
        return Boolean(this.username);
    }

    isAdmin() {
        return this.username === 'Arne';
    }

    getUsername() {
        return this.username;
    }
}