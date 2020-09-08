import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Pet from '../data-model/entities/Pet';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private url2api = 'http://localhost:5000/api';

    constructor(
        private http: HttpClient
    ){}

    getPet():Observable<any> {
        return this.http.get(`${this.url2api}/pet/getPet`);
    }
}