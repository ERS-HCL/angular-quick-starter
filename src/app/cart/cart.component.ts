import {
    Component,
    OnInit
} from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { DELETE_ITEM } from '../common/reducers/shopping-cart';

import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { ShoppingCart, LineItem } from '../common/models/shopping-cart.model';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../common/models/catalog.model';
import { AppStore } from '../common/models/appstore.model';
import { PlanService } from '../common/services/plan.service';
import { Logger } from '../common/logging/default-log.service';
import * as _ from 'lodash';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'shopping-cart',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    styleUrls: ['./cart.component.scss'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './cart.component.html'
})
export class CartComponent {
    public shoppingCart: Observable<ShoppingCart>;

    constructor(
        private store: Store<AppStore>,
        private logger: Logger,
        private router: Router) {
        this.shoppingCart = store.select('shoppingCart');
    }

    public deleteItem(lineItem: LineItem) {
       console.log(lineItem);
       this.store.dispatch(<Action> { type: DELETE_ITEM, payload: lineItem });
    }
}
