import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppStore } from '../common/models/appstore.model';
import { Plan, Feature, FeatureMap, FeatureAvailability } from '../common/models/catalog.model';

@Component({
  selector: 'plan-options',
  templateUrl: './plan-options.component.html',
  styleUrls: ['./plan-options.component.scss']
})
export class PlanOptionsComponent {
  @Input() public plans: Plan[];
  @Output() public selectionEvent = new EventEmitter();

  public selectedPlan(plan: Plan): void {
      this.selectionEvent.emit(plan);
  }
}
