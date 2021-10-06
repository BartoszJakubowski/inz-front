import user, { initialState as userInitialState, State as UserState } from 'store/modules/user/reducer';
import users, { initialState as usersInitialState, State as UsersState } from 'store/modules/users/reducer';
import contact, { initialState as contactInitialState, State as ContactState } from 'store/modules/contact/reducer';
import offers, { initialState as offersInitialState, State as OffersState } from 'store/modules/offers/reducer';
import locations, { initialState as locationsInitialState, State as LocationsState } from 'store/modules/locations/reducer';
import products, { initialState as productsInitialState, State as ProductsState } from 'store/modules/products/reducer';
import shopPages, { initialState as shopPagesInitialState, State as ShopPagesState } from 'store/modules/shopPages/reducer';
import freeSlots, { initialState as freeSlotsInitialState, State as FreeSlotsState } from 'store/modules/events/reducer';
import userEffects, { initialState as userEffectsInitialState, State as UserEffectsState } from 'store/modules/userEffects/reducer';
import articles, { initialState as articlesInitialState, State as ArticlesState } from 'store/modules/articles/reducer';

export interface State {
    user: UserState;
    users: UsersState;
    contact: ContactState;
    offers: OffersState;
    locations: LocationsState;
    products: ProductsState;
    shopPages: ShopPagesState;
    freeSlots: FreeSlotsState;
    userEffects: UserEffectsState;
    articles: ArticlesState;
}

export const initialState = {
    user: userInitialState,
    users: usersInitialState,
    contact: contactInitialState,
    offers: offersInitialState,
    locations: locationsInitialState,
    products: productsInitialState,
    shopPages: shopPagesInitialState,
    freeSlots: freeSlotsInitialState,
    userEffects: userEffectsInitialState,
    articles: articlesInitialState,
};

export default {
    user,
    users,
    contact,
    offers,
    locations,
    products,
    shopPages,
    freeSlots,
    userEffects,
    articles,
};
