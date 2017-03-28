import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PricingHomeComponent } from './pricing-home.component';
import { PlanDetailsComponent } from './plan-details.component';
import { PlanService } from '../common/services/plan.service';
import { CarouselModule } from 'ng2-bootstrap/carousel';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PricingHomeComponent,
    PlanDetailsComponent
  ],
  exports: [
      PricingHomeComponent,
      PlanDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CarouselModule.forRoot()
  ]
})
export class PlansModule {
}
