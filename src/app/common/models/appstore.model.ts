import { Plan, FeatureMap } from './catalog.model';

/**
 * Application Store for state management
 */
export interface AppStore {
    plans: Plan[]; // Online plans
    features: FeatureMap[]; // Online plan features
    counter: number;
};
