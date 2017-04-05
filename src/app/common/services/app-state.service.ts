import { Injectable, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { Utils } from '../utils';
import { UPDATE_UUID,RESET_UUID } from '../reducers/user';

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
  public initUUID(): void {
    let UUID = Utils.UUID() + '-' + new Date().getTime();
    this.store.dispatch({ type: UPDATE_UUID, payload: UUID });
  }

  public resetUUID(): void {
    this.store.dispatch({ type: RESET_UUID });
  }

}
