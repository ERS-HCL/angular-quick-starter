import { ActionReducer, Action } from '@ngrx/store';
import { Order } from '../models/order.model';
export const orderInitState: Order = {};

export const ADD_ORDER = 'ADD_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const INIT_ORDER = 'INIT_ORDER';
export const UPDATE_ORDERID = 'UPDATE_ORDERID';
export const UPDATE_BILLINGADDRESS = 'UPDATE_BILLINGADDRESS';
export const UPDATE_SHIPPINGADDRESS = 'UPDATE_SHIPPINGADDRESS';

export function orderReducer(state: Order = {}, action: Action): Order {
        switch (action.type) {
            case ADD_ORDER:
                return Object.assign({}, state, action.payload);
            case UPDATE_ORDER:
                return Object.assign({}, state, action.payload);
            case DELETE_ORDER:
                return Object.assign({}, state, orderInitState);
            case INIT_ORDER:
                return orderInitState;
            case UPDATE_ORDERID:
                return Object.assign({}, state, { orderId: action.payload });
            case UPDATE_BILLINGADDRESS:
                return Object.assign({}, state, { billingAddress: action.payload });
            case UPDATE_SHIPPINGADDRESS:
                return Object.assign({}, state, { billingAddress: action.payload });
            default:
                return state;
        }
    };
