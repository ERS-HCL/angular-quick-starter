import { ActionReducer, Action } from '@ngrx/store';
import { ShoppingCart } from '../models/shopping-cart.model';

export const shoppingCartReducer: ActionReducer<ShoppingCart>
    = (state: ShoppingCart = {}, action: Action) => {
        switch (action.type) {
            case 'CREATE_CART':
                return Object.assign({}, state, action.payload);
            case 'ADD_ITEM':
                if (state.lineItems === undefined) {
                    return Object.assign({}, state, { lineItems: [...action.payload] });
                }
                return Object.assign({}, state, {
                    lineItems: [...state.lineItems, ...action.payload]
                });
            case 'UPDATE_ITEM':
                state = Object.assign({}, state, {
                    lineItems: (state.lineItems !== undefined) ? state.lineItems.map((lineItem) => {
                        return (lineItem.productId === action.payload.productId) ?
                            Object.assign({}, lineItem, action.payload) : lineItem;
                    }) : state
                });
                return state;
            case 'DELETE_ITEM':
                state = Object.assign({}, state, {
                    lineItems: (state.lineItems !== undefined) ?
                        state.lineItems.filter((lineItem) => {
                            return (lineItem.productId === action.payload.productId);
                        }) : state
                });
                return state;
            default:
                return state;
        }
    };
