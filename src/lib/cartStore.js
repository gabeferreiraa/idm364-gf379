import { writable, get } from 'svelte/store';

// Initialize the cart store
export const cart = writable([]);

// Remove an item from the cart
export function removeFromCart(id) {
	cart.update((items) => items.filter((item) => item.id !== id));
}

// Update item quantity
export function updateQuantity(id, quantity) {
	cart.update((items) => {
		return items.map((item) => (item.id === id ? { ...item, quantity } : item));
	});
}

// Clear the cart
export function clearCart() {
	cart.set([]);
}

// Handle checkout
export function handleCheckout() {
	const currentCart = get(cart); // ✅ Correct store access
	localStorage.setItem('recentOrder', JSON.stringify(currentCart));
	clearCart();
}
