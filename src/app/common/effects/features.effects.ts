import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { PlanService } from '../services/plan.service';
import { ADD_FEATURES } from '../reducers/features';

export const LOAD_FEATURES = 'LOAD_FEATURES';

@Injectable()
export class FeaturesEffects {

    @Effect() public loadFeatures$ = this.actions$
        // Listen for the 'LOAD_FEATURES' action
        .ofType(LOAD_FEATURES)
        .switchMap(() => this.planService.loadFeatures()
            // If successful, dispatch success action with result
            .map((payload) => ({ type: ADD_FEATURES, payload }))
         //   .catch(() => Observable.of({ type: 'LOAD_FEATURES_FAILED' }))
        );

    constructor(
        private http: Http,
        private planService: PlanService,
        private actions$: Actions
    ) { }

}
