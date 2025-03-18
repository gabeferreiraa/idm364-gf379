<script>
	import { onMount } from 'svelte';
	let recentOrder = [];

	onMount(() => {
		const storedOrder = localStorage.getItem('recentOrder');
		if (storedOrder) {
			recentOrder = JSON.parse(storedOrder);
		}
	});
</script>

<section class="mx-auto max-w-4xl p-8">
	<h1 class="text-4xl font-bold text-green-600">Thank you for your order!</h1>

	{#if recentOrder.length > 0}
		<div class="mt-8 space-y-6">
			{#each recentOrder as item}
				<div class="flex items-center gap-6 border-b pb-6">
					<img src={item.img} alt={item.name} class="h-32 w-32 rounded object-cover shadow" />
					<div>
						<h2 class="text-2xl font-semibold">{item.name}</h2>
						<p class="mt-2 text-xl font-bold">${item.price}</p>
						<p class="mt-1 text-gray-700">Quantity: {item.quantity}</p>
					</div>
				</div>
				<a href="/products" class="mt-6 block text-blue-600 hover:underline">← Continue shopping</a>
			{/each}
		</div>
	{:else}
		<p class="mt-8 text-gray-600">No recent order found.</p>
	{/if}
</section>
