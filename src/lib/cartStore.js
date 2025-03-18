import { writable } from 'svelte/store';

// Initialize the cart store
export const cart = writable([]);

// Function to remove an item from the cart
export function removeFromCart(id) {
	cart.update((items) => items.filter((item) => item.id !== id));
}

// Function to update item quantity
export function updateQuantity(id, quantity) {
	cart.update((items) => {
		return items.map((item) => (item.id === id ? { ...item, quantity } : item));
	});
}

export function clearCart() {
	cart.set([]);
}
export function handleCheckout() {
	// Save cart snapshot for confirmation page
	localStorage.setItem('recentOrder', JSON.stringify($cart));
	// Now clear the cart
	clearCart();
	// Navigate to confirmation (the <a> handles it)
}
