import {
    Component,
    OnInit
} from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { DELETE_ITEM } from '../common/reducers/shopping-cart';

import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { User } from '../common/models/user.model';
import { ShoppingCart, LineItem } from '../common/models/shopping-cart.model';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../common/models/catalog.model';
import { AppStore } from '../common/models/appstore.model';
import { PlanService } from '../common/services/plan.service';
import { AppStateService } from '../common/services/app-state.service';
import { Logger } from '../common/logging/default-log.service';
import * as _ from 'lodash';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'cart-summary',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    styleUrls: ['./cart-summary.component.scss'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent implements OnInit {
    public shoppingCart: Observable<ShoppingCart>;
    public user: Observable<User>;
    public total: number;
    public today: number = Date.now();

    constructor(
        private store: Store<AppStore>,
        private logger: Logger,
        private router: Router,
        private appStateService: AppStateService) {
        this.shoppingCart = store.select('shoppingCart');
        this.user = store.select('user');
    }

    public ngOnInit() {
        let currentStore = this.appStateService.getState();
        this.total = 0;
        if (currentStore.shoppingCart.lineItems !== undefined &&
                currentStore.shoppingCart.lineItems.length > 0) {
            this.getTotal(currentStore.shoppingCart.lineItems);
        }
    }

    public getTotal(items: LineItem[]) {
        this.total = 0;
        this.total += _.reduce(items, (sum, v) => sum + Number(v.unitPrice), 0);
    }

}
