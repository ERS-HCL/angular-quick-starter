import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { PlansModule } from './plans';
import { CoreModule } from './core/core.module.ts';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { localStorageSync } from 'ngrx-store-localstorage';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './common/reducers/counter';
import { planInitState, planReducer } from './common/reducers/plan';
import { featuresInitState, featuresReducer } from './common/reducers/features';
import { orderInitState, orderReducer } from './common/reducers/order';
import { shoppingCartReducer } from './common/reducers/shopping-cart';
import { userInitState, userReducer } from './common/reducers/user';
import { FeaturesEffects } from './common/effects/features.effects';
import { ConsoleLogService } from './common/logging/console-log.service';
import { Logger } from './common/logging/default-log.service';
import { PlanService } from './common/services/plan.service';
import { AppStateService } from './common/services/app-state.service';

import { RegisterGuard } from './common/guards/register.guard';
// import { CookieService } from 'angular2-cookie/services/cookies.service';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AppStateService,
  [
    {
      provide: Logger,
      useClass: ConsoleLogService
    }
  ],
//  PlanService,
//  AppStateService,
 // RegisterGuard,
//  CookieService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: false, position: 'right' })
  };
}

const reducers = {
          plans: planReducer,
          features: featuresReducer,
          user: userReducer,
          order: orderReducer,
          shoppingCart: shoppingCartReducer,
          counter: counterReducer
        };
const initialReducerState = {
        plans: planInitState,
        features: featuresInitState,
        user: userInitState,
        order: orderInitState
      };
const appReducer = compose(localStorageSync(['user'], true), combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  return appReducer(state, action);
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CoreModule,
  //  PlansModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    StoreModule.provideStore(rootReducer, initialReducerState),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule,
 //   EffectsModule.run(FeaturesEffects)
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) { }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues  = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
