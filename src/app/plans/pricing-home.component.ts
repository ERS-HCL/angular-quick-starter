import {
    Component,
    OnInit
} from '@angular/core';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../common/reducers/counter';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { ADD_PLANS } from '../common/reducers/plan';
import { Plan, Feature } from '../common/models/catalog.model';
import { AppStore } from '../common/models/appstore.model';
import { PlanService } from '../common/services/plan.service';
import { Logger } from '../common/logging/default-log.service';


@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'pricing-home',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ['./pricing-home.component.scss'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './pricing-home.component.html'
})
export class PricingHomeComponent implements OnInit {
    public counter: Observable<number>;
    public plans: Observable<Array<Plan>>;

    constructor(
        private store: Store<AppStore>,
        private logger: Logger,
        private planService: PlanService) {
        this.counter = store.select('counter');
        this.plans = this.planService.plans;
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
        this.loadPlans();
    }

    public loadPlans() {
        this.planService.loadPlans()
            .map((payload) => ({ type: ADD_PLANS, payload }))
            .subscribe(
            (action) => {
                this.store.dispatch(action);
            },
            (error) => {
                this.logger.error('Unable to load plans: ' + error.message);
            },
            () => {
                // called after success or error callback
            }
            );
    }
}
