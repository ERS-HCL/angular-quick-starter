import {
    Component,
    OnInit
} from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { INCREMENT, DECREMENT, RESET } from '../common/reducers/counter';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { ADD_PLANS } from '../common/reducers/plan';
import { LOAD_FEATURES } from '../common/effects/features.effects';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../common/models/catalog.model';
import { AppStore } from '../common/models/appstore.model';
import { User } from '../common/models/user.model';
import { PlanService } from '../common/services/plan.service';
import { AppStateService } from '../common/services/app-state.service';
import { Logger } from '../common/logging/default-log.service';
import { CookieService } from 'ngx-cookie';
import * as _ from 'lodash';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'pricing-home',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './pricing-home.component.html'
})
export class PricingHomeComponent implements OnInit {
    public counter: Observable<number>;
    public user: Observable<User>;
    public plans: Observable<Plan[]>;
    public features: Observable<FeatureMap[]>;
    public timeout: number;
    public message: string;
    // public expiryDate: Date;
    public cookies: Object;
    public keys: string[];
    public cName: string;
    public cValue: string;
    public cValue2: string;
    public rName: string;
    public checkName: string;

    constructor(
        private store: Store<AppStore>,
        private logger: Logger,
        private planService: PlanService,
        private appStateService: AppStateService,
        private router: Router,
        private cookieService: CookieService
        ) {
        this.counter = store.select('counter');
        this.user = store.select('user');
        this.plans = this.planService.plans;
        this.features = this.planService.features;
        this.timeout = 5000;
        this.cValue2 = '';
    //    this.update();
        this.user
            // filter only the situation where the UUID has been set in the store
            .filter((user: User) => user.UUID !== '')
            .map((user: User) => Observable.timer(user.expiry))
            .do((x: any) => { this.message = 'UUID changed! Timer has been reset .. '; })
            // Ignore earlier timers and switch to the new timer
            .switch()
            // Timeout has expired so reset the UUID and logout the user
            .subscribe((x) => {
                this.message = 'UUID has now expired! Dispatching UUID reset event';
                this.appStateService.resetUUID();
                alert('UUID has now expired! please login');
            });
    }

    public increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    public decrement() {
        this.store.dispatch({ type: DECREMENT });
    }

    public reset() {
        this.store.dispatch({ type: RESET });
    }

    public ngOnInit() {
        //   this.loadPlans();
        this.update();
    }

    public onSelectionEvent($event): void {
        let plan: Plan = $event;
        console.log(plan);
        this.router.navigate(['/plans']);
    }

    public startTimer() {
        this.setUUID(this.timeout);
    }

    public setUUID(timer: number) {
        this.appStateService.initUUID(timer);
    }
/* Disabling CookieService as it is incompatible with the new Angular 2 updates */
    public update() {
        this.cookies = this.cookieService.getAll();
        this.keys = Object.keys(this.cookies);
    }
    public addCookie(cName: string, cValue: string) {
        console.log('Adding: ', cName, cValue);
        this.cookieService.put(cName, cValue);
        this.update();
    }
    public removeCookie(rName: string) {
        console.log('Removing: ', rName);
        this.cookieService.remove(rName);
        this.update();
    }
    public removeAll() {
        console.log('Removing all cookies');
        this.cookieService.removeAll();
        this.update();
    }

    public checkCookie(checkName: string) {
        console.log('Checking: ', checkName);
        this.cValue2 = '';
        let result: any = this.cookieService.get(checkName);
      //  console.log(result);
        if (result !== undefined) {
            this.cValue2 = 'Value: ' + result;
        } else {
            this.cValue2 = 'Cookie with name: ' + checkName + ' not found';
        }
    }
}
