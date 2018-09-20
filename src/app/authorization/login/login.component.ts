/**The login component uses the authentication service
 * to login and logout of the application.
 * It automatically logs the user out when it initializes
 * (ngOnInit) so the login page can also be used to logout. */

/**The loginForm: FormGroup object defines the form controls
 * and validators, and is used to access data entered into
 * the form.
 * The FormGroup is part of the Angular Reactive Forms module
 * and is bound to the login template above with the
 * [formGroup]="loginForm" directive. */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alertService.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login-comp',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public loading = false;
    public submitted = false;
    public returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authService.logout();

        // get returned url from route parametres or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnedUrl'] || '/';
    }

    // convinience getter to easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login(this.f.userName.value, this.f.password.value)
            .pipe(first()).subscribe(
                data => this.router.navigate([this.returnUrl]),
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            );
    }
}
