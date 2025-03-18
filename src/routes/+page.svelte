<script>
	import Card from '$lib/Card.svelte';

	const { data } = $props();
</script>

<div class="min-h-screen bg-gradient-to-b from-blue-100 to-white">
	<!-- Hero Section -->
	<div class="relative h-[80vh] w-full overflow-hidden">
		<img
			src="images/hero-image.jpg"
			alt="Hero Image"
			class="absolute inset-0 h-full w-full object-cover"
		/>

		<!-- Overlay for darker text contrast (optional) -->
		<div class="absolute inset-0 bg-black bg-opacity-30"></div>

		<!-- Text Content on top of the image -->
		<div
			class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
		>
			<h1 class="text-6xl font-extrabold">Welcome to Our Store</h1>
			<p class="mt-4 max-w-2xl text-2xl">
				Discover the best deals and exclusive collections, crafted just for you.
			</p>
			<a href="/products">
				<button
					class="mt-8 rounded-lg bg-blue-600 px-8 py-4 text-xl font-semibold text-white shadow-lg hover:bg-blue-700"
				>
					Shop Now
				</button>
			</a>
		</div>
	</div>

	<div class="mx-auto max-w-6xl px-6 py-12">
		<h2 class="text-center text-3xl font-bold text-gray-900">Featured Products</h2>
		<p class="mt-4 text-center text-lg text-gray-600">
			Check out some of our top picks just for you.
		</p>

		{#if data.products.length > 0}
			<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each data.products.slice(4, 7) as product}
					<Card
						name={product.name}
						price={product.price}
						description={product.description}
						img={product.img}
						id={product.id}
					/>
				{/each}
			</div>
		{:else}
			<p class="mt-4 text-center text-gray-600">No products found.</p>
		{/if}
	</div>
</div>
