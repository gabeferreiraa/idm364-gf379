<script lang="js">
	import Card from '$lib/Card.svelte';
	const { data } = $props();
	$inspect(data);
</script>

<div class="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
	<div class="main-cta text-left">
		<h2 class="text-3xl font-bold text-gray-900">Don't Miss Out!</h2>
		<p class="mt-4 text-lg text-gray-600">
			Shop our exclusive collection today and enjoy amazing discounts.
		</p>
		<p>
			<a href="teams">teams</a>
		</p>
	</div>
	<Card />

	{#if data.products.length > 0}
		<ul>
			{#each data.products as product}
				<li>{product.name}</li>
			{/each}
		</ul>
	{:else}
		<p>No products found.</p>
	{/if}
</div>
