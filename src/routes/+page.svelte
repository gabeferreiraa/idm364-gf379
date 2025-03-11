<script>
	import Card from '$lib/Card.svelte';
	const { data } = $props();
</script>

<div class="min-h-screen bg-gradient-to-b from-blue-100 to-white">
	<!-- Hero Section -->
	<div class="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
		<h1 class="text-5xl font-extrabold text-gray-900">Welcome to Our Store</h1>
		<p class="mt-4 max-w-2xl text-xl text-gray-700">
			Discover the best deals and exclusive collections, crafted just for you.
		</p>
		<button
			class="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700"
		>
			Shop Now
		</button>
		<img
			src="https://source.unsplash.com/featured/800x400"
			alt="Placeholder Image"
			class="mt-10 w-full max-w-3xl rounded-lg shadow-lg"
		/>
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
