export interface ShoppingCart {
    id?: string;            // cart id
    lineItems?: LineItem[]; // cart line items
}

/**
 * cart line item details
 */
export interface LineItem {
    id?: string;                        // line item id
    productName: string;                // product name 
    productId: string;                  // product id
    unitPrice?: number;                 // product variant unit price
}
