import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppStore } from '../common/models/appstore.model';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../common/models/catalog.model';

@Component({
  selector: 'plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent {
  @Input() public plans: Plan[];
  @Input() public features: FeatureMap[];
  @Output() public selectionEvent = new EventEmitter();

  public isEditable: boolean = true;

  public toggle() {
    this.isEditable = !this.isEditable;
  }

  public buttonModel: Object = {
    innerHTML: 'Buy'
  };
  public selectedPlan(plan: Plan): void {
    this.selectionEvent.emit(plan);
  }
  public onChange($event) {
    console.log($event.innerHTML);
  }
}
