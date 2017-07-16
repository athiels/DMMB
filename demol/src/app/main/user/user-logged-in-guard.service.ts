import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from "app/main/user/user.service";

@Injectable()
export class UserLoggedInGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate() {
        if (this.userService.isUserAvailable()) {
            return true;
        }

        this.router.navigate(['./login']);
        return false;
    }
}