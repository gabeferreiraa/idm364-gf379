<script>
	export let data;
	import { cart } from '$lib/cartStore';

	$: product = data?.product || {};
	$: {
		if (!data?.product) {
			console.error('No product data available');
		}
	}
	function addToCart() {
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
</script>

<div class="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
	<div class="aspect-[4/3] w-full overflow-hidden rounded-lg">
		<img class="h-full w-full object-contain" src={product.img} alt={product.name} />
	</div>

	<h1 class="mt-6 text-4xl font-bold text-gray-900">{product.name}</h1>
	<p class="mt-2 text-xl text-gray-600">${product.price}</p>
	<p class="mt-4 text-gray-700">{product.description}</p>

	<button
		class="mt-6 rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-green-700"
		on:click={addToCart}
	>
		Add to Cart
	</button>

	<a href="/products" class="mt-6 block text-blue-600 hover:underline">← Back to Products</a>
</div>
