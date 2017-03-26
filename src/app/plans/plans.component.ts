import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppStore } from '../common/models/appstore.model';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../common/models/catalog.model';

@Component({
  selector: 'plan-details',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  @Input() public plans: Plan[];
  @Input() public features: FeatureMap[];
  @Output() public selectionEvent = new EventEmitter();

  public selectedPlan(plan: Plan): void {
      this.selectionEvent.emit(plan);
  }
}
