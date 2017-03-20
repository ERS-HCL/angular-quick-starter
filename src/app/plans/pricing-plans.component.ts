import {
  Component,
  OnInit
} from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppStore } from '../common/models/appstore.model';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../common/models/catalog.model';
import { PlanService } from '../common/services/plan.service';
import { Logger } from '../common/logging/default-log.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'pricing-plans',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './pricing-plans.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './pricing-plans.component.html'
})
export class PricingPlansComponent {
   public plans: Observable<Plan[]>;
    constructor(
        private store: Store<AppStore>,
        private logger: Logger,
        private planService: PlanService) {
        this.plans = this.planService.plans;
    }
}
