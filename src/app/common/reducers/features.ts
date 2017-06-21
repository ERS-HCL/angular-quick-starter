import { ActionReducer, Action } from '@ngrx/store';
import { Plan, FeatureMap } from '../models/catalog.model';

export const ADD_FEATURES = 'ADD_FEATURES';

export const featuresInitState: FeatureMap[] = [];

export function featuresReducer(state: FeatureMap[] = [], action: Action): FeatureMap {
    switch (action.type) {
      case ADD_FEATURES:
        return action.payload;
      default:
        return state;
    }
  };
