import { Plan, FeatureMap } from './catalog.model';
import { Order } from './order.model';
import { ShoppingCart } from './shopping-cart.model';
import { User } from './user.model';

/**
 * Application Store for state management
 */
export interface AppStore {
    user: User;
    order: Order;
    shoppingCart: ShoppingCart;
    plans: Plan[]; // Online plans
    features: FeatureMap[]; // Online plan features
    counter: number;
};
