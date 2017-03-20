import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { Plan, Feature, FeatureMap } from '../models/catalog.model';

/**
 * PricingService for
 *     getting the price list for online services
 */
@Injectable()
export class PlanService {
    public plans: Observable<Plan[]>;
    public features: Observable<FeatureMap[]>;

     constructor(
        private http: Http,
        public store: Store<AppStore>
    ) {
        this.plans = <Observable<Plan[]>> store.select('plans');
        this.features = <Observable<FeatureMap[]>> store.select('features');
    }

     public loadPlans(): Observable<Plan[]> {
       return this.http.get(BASE_URL_PLANS)
            .map((res) => res.json())
            .catch(this.handleError);
    }

     public loadFeatures(): Observable<FeatureMap[]> {
       return this.http.get(BASE_URL_FEATURES)
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
