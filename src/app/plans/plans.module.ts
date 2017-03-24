import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './plans.routes';
import { PricingPlansComponent } from './pricing-plans.component';
import { PlanService } from '../common/services/plan.service';

console.log('`Plans` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PricingPlansComponent
  ],
  exports: [
      PricingPlansComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [PlanService]
})
export class PlansModule {
  public static routes = routes;
}
