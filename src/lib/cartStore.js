import { writable } from 'svelte/store';

// Initialize the cart store
export const cart = writable([]);

// Function to add an item to the cart
export function addToCart(product) {
	cart.update((items) => {
		const index = items.findIndex((item) => item.id === product.id);
		if (index !== -1) {
			items[index].quantity += 1;
		} else {
			items.push({ ...product, quantity: 1 });
		}
		return [...items];
	});
}

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
