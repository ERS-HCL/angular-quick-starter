import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { Plan } from '../models/catalog.model';



/**
 * PricingService for
 *     getting the price list for online services
 */
@Injectable()
export class PlanService {
    public plans: Observable<Plan[]>;

     constructor(
        private http: Http,
        public store: Store<AppStore>
    ) {
        this.plans = <Observable<Plan[]>> store.select('plans');
    }

     public loadPlans(): Observable<Plan[]> {
       return this.http.get(BASE_URL_PLANS)
            .map((res) => res.json())
            .catch(this.handleError);
    }

        // this could also be a private method of the component class
    private handleError(error: any) {
        // log error
        // could be something more sofisticated
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        // throw an application level error
        return Observable.throw(errMsg);
    }

}
