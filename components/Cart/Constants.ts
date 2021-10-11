export const CART_HEIGHT = 96;

export const formatPrice = (price: number | string = 0): string => `$${Math.floor(Number(price))},00`;
