import { Address } from './address.model';

/**
 * User detail data model
 */
export interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    companyName?: string;
    billingAddress?: Address;
    shippingAddress?: Address;
    orderId?: string;
}


