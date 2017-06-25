import { Injectable, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { Utils } from '../utils';
import { User } from '../models/user.model';
import { UPDATE_UUID, RESET_UUID } from '../reducers/user';
import 'rxjs/add/operator/take';

@Injectable()
export class AppStateService {

    constructor(
        public store: Store<AppStore>) {
    }

    public getState(): AppStore {
        let state: AppStore;
        this.store.take(1).subscribe((s) => {state = s; });
        return state;
    }

  /**
   * Initialize UUID
   */
  public initUUID(timer: number): void {
    let uuid = Utils.UUID() + '-' + new Date().getTime();
    let expiryDate: Date = new Date(new Date().getTime() + (timer));
    let userPayload = <User> { UUID: uuid, expiry: expiryDate};
    console.log(userPayload);
    this.store.dispatch({ type: UPDATE_UUID, payload: userPayload});
  }

  public resetUUID(): void {
    this.store.dispatch({ type: RESET_UUID });
  }

}
