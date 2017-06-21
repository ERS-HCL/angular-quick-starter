import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

export const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
