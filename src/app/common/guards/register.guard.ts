import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateService } from '../services/app-state.service';
import { AppStore } from '../models/appstore.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RegisterGuard implements CanActivate {

    constructor(
        public store: Store<AppStore>,
        private router: Router,
        private appStateService: AppStateService) { }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // Get the current state of the application store
        let currentStore = this.appStateService.getState();
        // Can activate registration only if the cart has items
        if (currentStore.shoppingCart.lineItems === undefined ||
            (currentStore.shoppingCart.lineItems !== undefined &&
                currentStore.shoppingCart.lineItems.length === 0)) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    }
}
