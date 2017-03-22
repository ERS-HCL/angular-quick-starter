/**
 * Address information
 * part of the Billing data model
 */
export interface Address {
    addressLine: string;    // Company Address Line 1
    street?: string;        // Address Line 2
    city: string;           // City
    state: string;          // State
    country: string;        // Country
    zipCode: string;        // Postal Code
}
