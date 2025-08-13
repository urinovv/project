import { create } from 'zustand';

const useShopStore = create((set, get) => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],

    // CART
    addToCart: (product) => {
        set((state) => {
            const exists = state.cart.find(item => item.id === product.id);
            let updatedCart;

            if (!exists) {
                updatedCart = [...state.cart, { ...product, quantity: product.quantity || 1 }];
            } else {
                updatedCart = state.cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item
                );
            }

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        });
    },

    removeFromCart: (productId) => {
        set((state) => {
            const updatedCart = state.cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        });
    },

    updateCartItem: (productId, updates) => {
        set((state) => {
            const updatedCart = state.cart.map(item =>
                item.id === productId ? { ...item, ...updates } : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        });
    },

    // FAVOURITES
    addToFavourites: (product) => {
        set((state) => {
            const exists = state.favourites.find(item => item.id === product.id);
            if (!exists) {
                const updatedFav = [...state.favourites, product];
                localStorage.setItem('favourites', JSON.stringify(updatedFav));
                return { favourites: updatedFav };
            }
            return state;
        });
    },

    removeFromFavourites: (productId) => {
        set((state) => {
            const updatedFav = state.favourites.filter(item => item.id !== productId);
            localStorage.setItem('favourites', JSON.stringify(updatedFav));
            return { favourites: updatedFav };
        });
    },

    // CLEAR ALL FAVOURITES (qo'shildi)
    clearAllFavourites: () => {
        localStorage.removeItem('favourites');
        set({ favourites: [] });
    }
}));

export default useShopStore;
