import { Injectable, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';

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

}
