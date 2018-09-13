import { Component, OnInit } from '@angular/core';
import { User } from '../../forms/validation/validation.forms.component';
import { Httpservice } from '../http.service';

@Component({
    selector: 'app-http-observable',
    templateUrl: './observable.http.component.html',
    styleUrls: ['../http.component.css']
})
export class ObservableHttpComponent implements OnInit {
    public users: User[];

    constructor(private httpService: Httpservice) {}

    ngOnInit(): void {
        this.httpService.getUsers().subscribe(
            data => this.users = data
        );
    }
}
