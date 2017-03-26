import {
    Component,
    OnInit,
    Input
} from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { LineItem } from '../common/models/shopping-cart.model';
import { Logger } from '../common/logging/default-log.service';
import * as _ from 'lodash';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'cart-total',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    styleUrls: ['./cart-total.component.scss'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './cart-total.component.html'
})
export class CartTotalComponent {
    @Input() public items: LineItem[];

    public getTotal() {
        let price = 0;
        price += _.reduce(this.items, (sum, v) => sum + Number(v.unitPrice), 0);
        return price;
    }
}
