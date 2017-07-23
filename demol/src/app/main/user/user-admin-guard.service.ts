import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from "app/main/user/user.service";

@Injectable()
export class UserAdminGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate() {
        if (this.userService.isAdmin()) {
            return true;
        }

        this.router.navigate(['']);
        return false;
    }
}