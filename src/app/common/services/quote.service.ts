import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Quote } from '../models/quote.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {

    constructor(
        private http: Http
    ) {
    }

    public getQuotes(): Observable<Quote[]> {
        // ... Set content type to JSON
        let headers      = new Headers({ Accept: 'application/json' });
        let options       = new RequestOptions({ headers }); // Crea
        return this.http.get(BASE_URL_QUOTES + '?size=5', options)
            .map((res) => res.json());
    }

}
