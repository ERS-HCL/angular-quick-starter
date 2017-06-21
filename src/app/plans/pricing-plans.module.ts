import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { routing } from './pricing-plans.routes';
import { PricingPlansComponent } from './pricing-plans.component';
import { PlanOptionsComponent } from './plan-options.component';
import { PlanService } from '../common/services/plan.service';
import { CartModule } from '../cart/cart.module';

console.log('`Plans` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PricingPlansComponent,
    PlanOptionsComponent
  ],
  exports: [
      PricingPlansComponent,
      PlanOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CartModule,
    routing
  ]
})
export class PricingPlansModule {
}
