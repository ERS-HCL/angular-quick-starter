import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './cart-summary.routes';
import { CartSummaryComponent } from './cart-summary.component';

console.log('`Cart Summary` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    CartSummaryComponent
  ],
  exports: [
      CartSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ]
})
export class CartSummaryModule {
}
