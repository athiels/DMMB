import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor() { }

    isUserAvailable() {
        return false;
    }
}