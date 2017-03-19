/**
 * Sample Online Subscription Plans
 */
export interface Plan {
    id: string;
    name: string;
    description: string;
    offer: string;
    pricing: string;
    billing: string;
    features: Feature[];
}

export interface Feature {
    id: string;
    description: string;
    available: number;
    value: string;
}

export interface Plans {
    plans: Plan[];
}
