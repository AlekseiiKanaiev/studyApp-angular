/**The fake backend provider enables the example to run without
 * a backend / backendless, it uses HTML5 local storage for
 * storing registered user data and provides fake
 * implementations for authentication and CRUD methods,
 * these would be handled by a real api and database in
 * a production application. */

/**It's implemented using the HttpInterceptor class that was
 * introduced in Angular 4.3 as part of the new HttpClientModule.
 * By extending the HttpInterceptor class you can create
 * a custom interceptor to modify http requests before they
 * get sent to the server.
 * In this case the FakeBackendInterceptor intercepts certain
 * requests based on their URL and provides a fake response
 * instead of going to the server. */

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(requests: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // get array from local storage for registred users
        const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(
            mergeMap(() => {

                // authenticate
                if (requests.url.endsWith('users/authenticate') && requests.method === 'POST') {
                    const filtredUsers = users.filter( user => {
                        return user.userName === requests.body.userName && user.password === requests.body.password;
                    });
                    if (filtredUsers.length) {
                        // if login details are valid returns 200 OK with user details and fake JWT token
                        const user = filtredUsers[0];
                        const body = {
                            id: user.id,
                            userName: user.userName,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        return of(new HttpResponse({status: 200, body: body}));
                    } else {
                        return throwError({error: {message: 'Username or password incorrect!'}});
                    }
                }

                // get users
                if (requests.url.endsWith('/users') && requests.method === 'GET') {
                    /**check for fake auth token in header and
                     * return users if valid
                     * (this security is implemented server side
                     * in real application) */
                    if (requests.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        return of(new HttpResponse({status: 200, body: users}));
                    } else {
                        // return 401 not authorized if token is null or invalid
                        return throwError({status: 401, error: {message: 'Unauthorized'}});
                    }
                }

                // get user by id
                if (requests.url.match(/\/users\/\d+$/) && requests.method === 'GET') {
                    /**check for fake auth token in header and
                     * return users if valid
                     * (this security is implemented server side
                     * in real application) */
                    if (requests.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        const urlParts = requests.url.split('/');
                        const id = parseInt(urlParts[urlParts.length - 1], 0);
                        // tslint:disable-next-line:no-shadowed-variable
                        const matchedUsers = users.filter((user) => {
                            return user.id === id;
                        });
                        const user = matchedUsers.length ? matchedUsers[0] : null;
                        return of(new HttpResponse({status: 200, body: user}));
                    } else {
                        // return 401 not authorized if token is null or invalid
                        return throwError({status: 401, error: {message: 'Unauthorized'}});
                    }
                }

                // register user
                if (requests.url.endsWith('/user/register') && requests.method === 'POST') {
                    // get new user object from post body
                    const newUser = requests.body;

                    // validation
                    const duplicate = users.filter(user => {
                        return user.userName === newUser.userName;
                    }).length;
                    if (duplicate) {
                        return throwError({error: {message: `Username ${newUser.userName} is already teken!`}});
                    }

                    // save new user
                    newUser.id = users.length + 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // response 200
                    return of(new HttpResponse({status: 200}));
                }

                // delete user
                if (requests.url.match(/\/users\/\d+$/) && requests.method === 'DELETE') {
                    /**check for fake auth token in header and
                     * return users if valid
                     * (this security is implemented server side
                     * in real application) */
                    if (requests.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        const urlParts = requests.url.split('/');
                        const id = parseInt(urlParts[urlParts.length - 1], 0);
                        for (let i = 0; i < users.length; i++) {
                            const user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.slice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }
                        // response 200
                        return of(new HttpResponse({status: 200}));
                    } else {
                        // return 401 not authorized if token is null or invalid
                        return throwError({status: 401, error: {message: 'Unauthorized'}});
                    }
                }

                // pass throught all requests not handle above
                return next.handle(requests);
            })
        )

        /**call materialize and dematerialize to ensure delay
         * even if an error is thrown
         * (https://github.com/Reactive-Extensions/RxJS/issues/648) */
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export const fakeBackendProvider = {
    // use fakeBackendProvider in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
