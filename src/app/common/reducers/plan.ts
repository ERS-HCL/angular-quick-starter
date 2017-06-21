import { ActionReducer, Action } from '@ngrx/store';
import { Plan } from '../models/catalog.model';

export const ADD_PLANS = 'ADD_PLANS';

export const planInitState: Plan[] = [];

export function planReducer(state: Plan[] = [], action: Action): Plan[] {
  switch (action.type) {
    case ADD_PLANS:
      return action.payload;
    default:
      return state;
  }
};
