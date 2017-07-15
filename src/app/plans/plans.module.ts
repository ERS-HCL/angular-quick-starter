import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PricingHomeComponent } from './pricing-home.component';
import { PlanDetailsComponent } from './plan-details.component';
import { PlanService } from '../common/services/plan.service';
import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide.component';

// Import the Froala Editor plugin.
import 'froala-editor/js/froala_editor.pkgd.min.js';
// import 'froala-editor/js/plugins/link.min.js';

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PricingHomeComponent,
    PlanDetailsComponent,
    CarouselComponent,
    SlideComponent
  ],
  exports: [
    PricingHomeComponent,
    PlanDetailsComponent,
    CarouselComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ]
})
export class PlansModule {
}
