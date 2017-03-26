import { ActionReducer, Action } from '@ngrx/store';
import { ShoppingCart } from '../models/shopping-cart.model';

export const CREATE_CART = 'CREATE_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const shoppingCartReducer: ActionReducer<ShoppingCart>
    = (state: ShoppingCart = {}, action: Action) => {
        switch (action.type) {
            case CREATE_CART:
                return Object.assign({}, state, action.payload);
            case ADD_ITEM:
                let add = true;
                state = Object.assign({}, state, {
                    lineItems: (state.lineItems !== undefined) ? state.lineItems.map((lineItem) => {
                        if (lineItem.productId === action.payload.productId) {
                            add = false; // This is already present
                        }
                        return lineItem;
                    }) : Object.assign({}, state.lineItems, action.payload)
                });
                if (add) { // new line item to be added
                    if (state.lineItems === undefined) {
                        return Object.assign({}, state, { lineItems: [...action.payload] });
                    }
                    return Object.assign({}, state, {
                        lineItems: [...state.lineItems, ...action.payload]
                    });
                }
                return state;
            case UPDATE_ITEM:
                state = Object.assign({}, state, {
                    lineItems: (state.lineItems !== undefined) ? state.lineItems.map((lineItem) => {
                        return (lineItem.productId === action.payload.productId) ?
                            Object.assign({}, lineItem, action.payload) : lineItem;
                    }) : state
                });
                return state;
            case DELETE_ITEM:
                state = Object.assign({}, state, {
                    lineItems: (state.lineItems !== undefined) ?
                        state.lineItems.filter((lineItem) => {
                            return (lineItem.productId !== action.payload.productId);
                        }) : state
                });
                return state;
            default:
                return state;
        }
    };
