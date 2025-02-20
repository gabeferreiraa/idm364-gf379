<script lang="js">
	export let title = 'Team Name';
	export let description = 'Click for more details';
	export let image = 'https://via.placeholder.com/200?text=Team+Image';
	export let slug = '';
</script>

<div
	class="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
>
	<img class="h-48 w-full object-cover" src={image} alt={title} />
	<div class="p-6">
		<h2 class="mb-2 text-xl font-semibold text-gray-800">{title}</h2>
		<p class="mb-4 text-gray-600">{description}</p>
		<a
			href={`/team/${slug}`}
			class="inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
		>
			View Team
		</a>
	</div>
</div>
