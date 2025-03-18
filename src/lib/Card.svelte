<script>
	export let name;
	export let price;
	export let description;
	export let img;
	export let id;
</script>

<a href={`/products/${id}`} class="block">
	<div
		class="max-w-sm cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
	>
		<div class="aspect-[4/3] w-full overflow-hidden">
			<img class="h-full w-full object-contain" src={img} alt={name} />
		</div>
		<div class="p-6">
			<h2 class="mb-2 text-xl font-semibold text-gray-800">{name}</h2>
			<p class="mb-2 text-gray-600">${price}</p>
			<p class="mb-4 text-gray-600">{description}</p>
		</div>
	</div>
</a>
