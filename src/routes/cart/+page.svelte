<script>
	import { cart, removeFromCart, updateQuantity, clearCart, handleCheckout } from '$lib/cartStore';

	// Function to calculate the total price
	$: totalPrice = $cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
</script>

<div class="mx-auto max-w-4xl p-8">
	<h1 class="text-3xl font-bold text-gray-900">Your Cart</h1>

	{#if $cart.length === 0}
		<p class="mt-4 text-gray-600">Your cart is empty.</p>
	{:else}
		<ul class="mt-6 space-y-6">
			{#each $cart as item}
				<li class="flex items-center justify-between border-b pb-4">
					<div class="flex items-center space-x-4">
						<img src={item.img} alt={item.name} class="h-20 w-20 rounded-md object-cover" />
						<div>
							<h2 class="text-lg font-semibold text-gray-900">{item.name}</h2>
							<p class="text-gray-600">${item.price} x {item.quantity}</p>
							<input
								type="number"
								min="1"
								bind:value={item.quantity}
								on:change={() => updateQuantity(item.id, +item.quantity)}
								class="w-16 rounded-md border p-1"
							/>
						</div>
					</div>
					<button class="text-red-500 hover:text-red-700" on:click={() => removeFromCart(item.id)}>
						Remove
					</button>
				</li>
			{/each}
		</ul>

		<p class="mt-6 text-xl font-bold text-gray-900">Total: ${totalPrice}</p>
		<a href="/order-confirmation">
			<button
				on:click={handleCheckout}
				class="mt-6 w-full rounded-md bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700"
			>
				Proceed to Checkout
			</button>
		</a>
	{/if}
</div>
