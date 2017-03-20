import { ActionReducer, Action } from '@ngrx/store';
import { Plan } from '../models/catalog.model';

export const ADD_PLANS = 'ADD_PLANS';

export const planInitState: Plan[] = [];

export const planReducer: ActionReducer<Plan>
              = (state: any = [], action: Action) => {
  switch (action.type) {
    case ADD_PLANS:
      return action.payload;
    default:
      return state;
  }
};
