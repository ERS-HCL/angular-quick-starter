import {
  Component,
  OnInit
} from '@angular/core';

import { ShoppingCart, LineItem } from '../common/models/shopping-cart.model';
import { Store, Action } from '@ngrx/store';
import { AppStore } from '../common/models/appstore.model';
import { Observable } from 'rxjs/Rx';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'nav-bar',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './nav-bar.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  public shoppingCart: Observable<ShoppingCart>;

  constructor(
    private store: Store<AppStore>) {
    this.shoppingCart = store.select('shoppingCart');
  }
}
