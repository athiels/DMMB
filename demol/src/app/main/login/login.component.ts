import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from 'ng2-webstorage';

import { UserService } from '../user/user.service';

@Component({
    selector: 'dmmb-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {

    constructor(private localStorage: LocalStorageService,
        private router: Router,
        private userService: UserService) { }

    login(name) {
        this.userService.login(name);
        this.localStorage.store('name', name);
        this.router.navigate(['']);
    }
}
