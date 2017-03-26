import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingPlansComponent } from './pricing-plans.component';

export const routes: Routes = [
    {
        path: '',
        component: PricingPlansComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
