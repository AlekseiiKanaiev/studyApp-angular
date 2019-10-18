import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Video } from '../_models/video';

@Injectable()
export class GetDataFromAnotherServerService {
    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get<Video[]>(`http://olcvideo.pythonanywhere.com/getData`);
    }
}
