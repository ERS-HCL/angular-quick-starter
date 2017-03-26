import { NgModule, ApplicationRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent } from '../cart/cart.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule
        ],
    declarations: [
        // ADD YOUR EXPORTED SHARED MODULE COMPONENTS
        CartComponent
    ],
    exports: [
        // ADD YOUR EXPORTED SHARED MODULE COMPONENTS
        CartComponent
    ]
})

/**
 * Shared Module - Used to import reusable component's for different modules
 * So that you do not need to add these separately and just start using them in the templates
 * Just add the reference in the corresponding module being built.
 * eg. BreadcrumbComponent , ATT Shared library components
 * import shared module in corresponding module and use the component
 */
export class SharedModule { }
