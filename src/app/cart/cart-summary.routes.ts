import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartSummaryComponent } from './cart-summary.component';

export const routes: Routes = [
    {
        path: '',
        component: CartSummaryComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
