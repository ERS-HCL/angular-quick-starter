/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './app.service';
import { PlanService } from './common/services/plan.service';
import { ADD_PLANS } from './common/reducers/plan';
import { LOAD_FEATURES } from './common/effects/features.effects';
import { AppStore } from './common/models/appstore.model';
import { ShoppingCart } from './common/models/shopping-cart.model';
import { Utils } from './common/utils';
import { Logger } from './common/logging/default-log.service';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState,
    public planService: PlanService,
    private store: Store<AppStore>,
    private logger: Logger
  ) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
    this.loadPlans();
    this.initCart();
  }

  public loadPlans() {
    this.planService.loadPlans('bundle')
      .map((payload) => ({ type: ADD_PLANS, payload }))
      .subscribe(
      (action) => {
        this.store.dispatch(<Action> { type: LOAD_FEATURES });
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

  /*   CART_EVENTS
  *  Create Cart and add it to the user state
  *  Call this when the user state does not have the cart existing
  */
  public initCart(): ShoppingCart {
    let cart: ShoppingCart;
    cart = {
      id: Utils.UUID() + '-' + new Date().getTime(),
      lineItems: []
    };
    this.store.dispatch({ type: 'CREATE_CART', payload: cart });
    // Demonstrate local storage sync
    this.store.dispatch({ type: 'UPDATE_CARTID', payload: cart.id });
    return cart;
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
