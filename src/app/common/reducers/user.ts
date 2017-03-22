import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../models/user.model';
export const userInitState: User = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: ''
};

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const INIT_USER = 'INIT_USER';
export const UPDATE_ORDERID = 'UPDATE_ORDERID';
export const UPDATE_BILLINGADDRESS = 'UPDATE_BILLINGADDRESS';
export const UPDATE_SHIPPINGADDRESS = 'UPDATE_SHIPPINGADDRESS';

export const userReducer: ActionReducer<User>
    = (state: User = {}, action: Action) => {
        switch (action.type) {
            case ADD_USER:
                return Object.assign({}, state, action.payload);
            case UPDATE_USER:
                return Object.assign({}, state, action.payload);
            case DELETE_USER:
                return Object.assign({}, state, userInitState);
            case INIT_USER:
                return userInitState;
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
