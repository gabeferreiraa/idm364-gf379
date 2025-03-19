<script>
	import { cart } from '$lib/cartStore';
	import Toast from '$lib/Toast.svelte';
	export let data;

	let product;
	let visible = false;
	let message = '';

	// Reactively set product from data
	$: product = data?.product || {};

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

		// Toast
		message = `${product.name} added to bag!`;
		visible = true;
		setTimeout(() => (visible = false), 3000);
	}
</script>

<div class="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
	<div class="aspect-[4/3] w-full overflow-hidden bg-gray-100">
		<img class="block h-full w-full object-cover" src={product.img} alt={product.name} />
	</div>

	<div class="px-8 pb-8 pt-4">
		<h1 class="text-4xl font-bold text-gray-900">{product.name}</h1>
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
</div>

<Toast {message} {visible} />
