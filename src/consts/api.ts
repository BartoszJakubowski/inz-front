/**
 * Public module
 */

// User
export const ENDPOINT_PUBLIC_USER = '/users';
export const ENDPOINT_PUBLIC_PASSWORD = '/users/password';
export const ENDPOINT_PUBLIC_TOKEN = '/users/token';

// Users
export const ENDPOINT_PUBLIC_USERS_TRAINERS = '/v2/users/trainers';
export const ENDPOINT_PUBLIC_USERS_TRAINER = '/v2/users/:slug/by-slug';

// Contact
export const ENDPOINT_PUBLIC_CONTACT = '/contact';

// Offers
export const ENDPOINT_PUBLIC_OFFER_BY_SLUG = '/v2/offers/slug/:slug';

// Locations
export const ENDPOINT_LOCATIONS_SLUG = '/v2/locations/slug/:slug';

// Products
export const ENDPOINT_PUBLIC_PRODUCTS = '/v2/products';
export const ENDPOINT_PUBLIC_PRODUCT = '/v2/products/:id';

// ShopPages
export const ENDPOINT_PUBLIC_SHOP_PAGE_SLUG = '/v2/shop-page/slug/:slug';

// Events
export const ENDPOINT_PUBLIC_EVENTS_FREE_SLOTS_BY_SCORE = '/v2/events/free-slots-by-score';

// UserOffers
export const ENDPOINT_PUBLIC_USER_OFFERS = '/v2/user-offers';

// UserEffects
export const ENDPOINT_PUBLIC_USER_EFFECTS = '/v2/user-effects';
export const ENDPOINT_PUBLIC_USER_EFFECT = '/v2/user-effects/:id';

// Articles
export const ENDPOINT_PUBLIC_ARTICLES = '/v2/articles';
export const ENDPOINT_PUBLIC_ARTICLE = '/v2/articles/:id';

/**
 * Auth user module
 */

// Profile
export const ENDPOINT_AUTH_PROFILE = '/me';
