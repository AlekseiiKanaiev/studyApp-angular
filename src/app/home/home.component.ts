import { Component, OnInit } from '@angular/core';
import { User } from '../authorization/_models/user';
import { UserService } from '../authorization/_services/user.service';
import { first } from 'rxjs/operators';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
        li {
            padding-right: 10px;
        }
    `]
})
export class HomeComponent implements OnInit {
    private currentUser: User;
    private users: User[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(
            () => this.loadAllUsers()
        );
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(
            users => this.users = users
        );
    }
}
