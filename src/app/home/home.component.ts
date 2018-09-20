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
        a {
            cursor: poiner;
        }
    `]
})
export class HomeComponent implements OnInit {
    private currentUser: User;
    private users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loadAllUsers();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    deleteUser(id: number) {
        console.log('delete');
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
