import { Plan, Feature } from './catalog.model';

/**
 * Application Store for state management
 */
export interface AppStore {
    plans: Plan[]; // Online plans
};
