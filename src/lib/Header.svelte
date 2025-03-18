<script>
	import { cart } from '$lib/cartStore';

	// Compute total cart items dynamically
	$: totalItems = $cart.reduce((total, item) => total + item.quantity, 0);
</script>

<header class="bg-white p-4 shadow-md">
	<div class="mx-auto flex max-w-6xl items-center justify-between">
		<!-- Logo -->
		<div class="text-2xl font-bold text-gray-900">
			<a href="/">Swift Cart</a>
		</div>

		<!-- Navigation -->
		<nav class="flex space-x-6">
			<a href="/" class="text-gray-600 transition hover:text-gray-900"> Home </a>
			<a href="/products" class="text-gray-600 transition hover:text-gray-900"> Products </a>
			<a href="/about" class="text-gray-600 transition hover:text-gray-900"> About Us </a>
		</nav>

		<!-- Cart Button -->
		<div>
			<a
				href="/cart"
				class="relative flex items-center text-gray-600 transition hover:text-gray-900"
			>
				<!-- Cart Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-4-8m14 8a2 2 0 100 4 2 2 0 000-4zm-10 0a2 2 0 100 4 2 2 0 000-4z"
					/>
				</svg>

				{#if totalItems > 0}
					<span
						class="absolute right-0 top-0 rounded-full bg-red-500 px-1 text-xs font-bold text-white"
					>
						{totalItems}
					</span>
				{/if}
			</a>
		</div>
	</div>
</header>
