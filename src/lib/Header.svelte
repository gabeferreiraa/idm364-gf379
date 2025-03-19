<script>
	import { cart } from '$lib/cartStore';
	import { page } from '$app/stores';

	let menuOpen = false;
	$: totalItems = $cart.reduce((total, item) => total + item.quantity, 0);
</script>

<header class="bg-white p-4 shadow-md">
	<div class="mx-auto flex max-w-6xl items-center justify-between">
		<!-- LEFT: Hamburger & Title -->
		<div class="flex items-center space-x-4">
			<!-- Hamburger icon (mobile only) -->
			<button
				class="text-gray-600 hover:text-gray-900 md:hidden"
				on:click={() => (menuOpen = !menuOpen)}
				aria-label="Toggle menu"
			>
				{#if menuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>

			<!-- Title -->
			<div class="text-2xl font-bold text-gray-900">
				<a href="/">Swift Cart</a>
			</div>
		</div>

		<!-- Desktop Nav -->
		<nav class="hidden space-x-6 md:flex">
			<a
				href="/"
				class={`transition hover:text-gray-900 ${$page.url.pathname === '/' ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
				>Home</a
			>
			<a
				href="/products"
				class={`transition hover:text-gray-900 ${$page.url.pathname === '/products' ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
				>Products</a
			>
			<a
				href="/about"
				class={`transition hover:text-gray-900 ${$page.url.pathname === '/about' ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
				>About Us</a
			>
		</nav>

		<!-- Cart Icon -->
		<div>
			<a
				href="/cart"
				class="relative flex items-center text-gray-600 transition hover:text-gray-900"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
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

	<!-- Mobile Nav -->
	{#if menuOpen}
		<nav class="mt-4 flex flex-col space-y-4 md:hidden">
			<a
				href="/"
				class={`transition hover:text-gray-900 ${$page.url.pathname === '/' ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
				>Home</a
			>
			<a
				href="/products"
				class={`transition hover:text-gray-900 ${$page.url.pathname === '/products' ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
				>Products</a
			>
			<a
				href="/about"
				class={`transition hover:text-gray-900 ${$page.url.pathname === '/about' ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
				>About Us</a
			>
		</nav>
	{/if}
</header>
