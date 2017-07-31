import {
    Component,
    OnInit
} from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { INCREMENT, DECREMENT, RESET } from '../common/reducers/counter';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

import { ADD_PLANS } from '../common/reducers/plan';
import { LOAD_FEATURES } from '../common/effects/features.effects';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../common/models/catalog.model';
import { AppStore } from '../common/models/appstore.model';
import { SlideContent } from '../common/models/slide.model';
import { User } from '../common/models/user.model';
import { PlanService } from '../common/services/plan.service';
import { AppStateService } from '../common/services/app-state.service';
import { Logger } from '../common/logging/default-log.service';

// import { CookieService } from 'angular2-cookie/core';
import * as _ from 'lodash';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'pricing-home',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './pricing-home.component.html'
})
export class PricingHomeComponent implements OnInit {
    public counter: Observable<number>;
    public user: Observable<User>;
    public plans: Observable<Plan[]>;
    public features: Observable<FeatureMap[]>;
    public timeout: number;
    public showCarousel = true;
    public message: string;
    // public expiryDate: Date;
    public cookies: Object;
    public keys: string[];
    public cName: string;
    public cValue: string;
    public cValue2: string;
    public rName: string;
    public checkName: string;

    public options: Object = {
        charCounterCount: false,
        initOnClick: true,
    //    linkEditButtons: ['linkEdit', 'linkRemove'],
        events: {
            'froalaEditor.click': function (e, editor) {
                //    editor.edit.on();
                //     editor.selection.restore();
                //      editor.position.refresh();
         //       editor.edit.on();
                console.log(editor.selection.get());
            },
            'froalaEditor.focus': function (e, editor) {
                //    editor.selection.restore();
                //     editor.position.refresh();
                console.log(editor.selection.get());
            },
            'froalaEditor.blur': function (e, editor) {
                //  editor.popups.hide(editor.id);

                //  editor.popups.hideAll();
                //     editor.undo.reset();
                //  editor.edit.off();
                //    editor.selection.clear();
            //    editor.destroy();
                console.log('blur called');
                //      editor.selection.clear();
            }
        }
    };

    public currentSelection: any;


    public linkInitControls: any;
    //The time to show the next photo
    private NextPhotoInterval: number = 5000;
    //Looping or not
    private noLoopSlides: boolean = true;
    //Photos
    private slides: Array<Object> = [];

    constructor(
        private store: Store<AppStore>,
        private logger: Logger,
        private planService: PlanService,
        private appStateService: AppStateService,
        private router: Router,
        // private cookieService: CookieService
    ) {
        this.counter = store.select('counter');
        this.user = store.select('user');
        this.plans = this.planService.plans;
        this.features = this.planService.features;
        this.timeout = 5000;
        this.cValue2 = '';
        this.addNewSlide();
        this.currentSelection = this.slides[0];
        //    this.update();
        /*    this.user
                // filter only the situation where the UUID has been set in the store
                .filter((user: User) => user.UUID !== '')
                .map((user: User) => Observable.timer(user.expiry))
                .do((x: any) => { this.message = 'UUID changed! Timer has been reset .. '; })
                // Ignore earlier timers and switch to the new timer
                .switch()
                // Timeout has expired so reset the UUID and logout the user
                .subscribe((x) => {
                    this.message = 'UUID has now expired! Dispatching UUID reset event';
                    this.appStateService.resetUUID();
                    alert('UUID has now expired! please login');
                });

                */
    }

    public initControls: Array<any>=[];
    public deleteAll: Array<any>=[];

    public initialize(initControls,i) {
        this.initControls[i] = initControls;
        this.initControls[i].initialize();
        this.deleteAll[i] = function () {
            this.initControls.getEditor()('html.set', '');
        };
    }

  /*  public resetControls() {
        this.initControls.forEach( (control) => {
            control.initialize();
        });
    }
*/
    public increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    public decrement() {
        this.store.dispatch({ type: DECREMENT });
    }

    public reset() {
        this.store.dispatch({ type: RESET });
    }

    public ngOnInit() {
        //   this.loadPlans();
    }

    public onSelectionEvent($event): void {
        let plan: Plan = $event;
        console.log(plan);
        this.router.navigate(['/plans']);
    }

    public onChange($event) {
        console.log($event);
        let id: number =$event.id;
        let innerHTML: string = $event.innerHTML;
        let url: string = $event.href;
        console.log(url);
        (<SlideContent>this.slides[id]).href = url;
        (<SlideContent>this.slides[id]).text = innerHTML;


    }

 /*   public onClick(i: number) {
        console.log(i);
      console.log(this.initControls[i]);
      this.initControls[i].initialize();
   //   this.initControls[i].getEditor().toolbar.enable();
    }
*/
    public onClose($event) {
        console.log($event);
    }

    public startTimer() {
        this.setUUID(this.timeout);
    }

    public setUUID(timer: number) {
        this.appStateService.initUUID(timer);
    }

    public getSlide(no: number): any {
        return Object.assign({}, JSON.parse(JSON.stringify(this.slides[no])));
    }

    public getOptions(no: number): any {
        return Object.assign({}, this.options, { id: 'linkEditor_' + no });
    }

    public getSlides(): string {
        // let hRefArray = _.map(this.slides, (slide) => { return '<a href=' + slide.href + '>' + slide.text + '</a>'; });
        // console.log(JSON.stringify(hRefArray));
        // return JSON.stringify(hRefArray);
        return JSON.stringify(this.slides);
    }

    private addNewSlide() {
        this.slides.push(
            { href: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', title: 'BMW 1', target: '_blank' },
            { href: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', title: 'BMW 2', target: '_blank' },
            { href: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', title: 'BMW 3', target: '_blank' },
            { href: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', title: 'BMW 4', target: '_blank' },
            { href: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', title: 'BMW 5', target: '_blank' },
            { href: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', title: 'BMW 6', target: '_blank' }
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }

    /* Disabling CookieService as it is incompatible with the new Angular 2 updates
        public update() {
            this.cookies = this.cookieService.getAll();
            this.keys = Object.keys(this.cookies);
        }
        public addCookie(cName: string, cValue: string) {
            console.log('Adding: ', cName, cValue);
            this.cookieService.put(cName, cValue);
            this.update();
        }
        public removeCookie(rName: string) {
            console.log('Removing: ', rName);
            this.cookieService.remove(rName);
            this.update();
        }
        public removeAll() {
            console.log('Removing all cookies');
            this.cookieService.removeAll();
            this.update();
        }

        public checkCookie(checkName: string) {
            console.log('Checking: ', checkName);
            this.cValue2 = '';
            let result: any = this.cookieService.get(checkName);
          //  console.log(result);
            if (result !== undefined) {
                this.cValue2 = 'Value: ' + result;
            } else {
                this.cValue2 = 'Cookie with name: ' + checkName + ' not found';
            }
        }
        */
}
