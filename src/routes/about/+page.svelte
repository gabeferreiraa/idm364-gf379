<script>
	import { onMount } from 'svelte';

	let title = 'About Us';
	let description =
		'We are passionate about creating amazing experiences using SvelteKit and Tailwind CSS.';

	onMount(() => {
		document.title = title;
	});
</script>

<div class="mx-auto max-w-3xl p-6 text-gray-800">
	<h1 class="mb-4 text-4xl font-bold">{title}</h1>
	<p class="mb-6 text-lg">{description}</p>

	<section class="mt-8">
		<h2 class="mb-3 text-2xl font-semibold">Our Mission</h2>
		<p class="text-lg">
			We strive to deliver high-quality, efficient, and user-friendly applications that enhance the
			user experience.
		</p>
	</section>

	<section class="mt-8">
		<h2 class="mb-3 text-2xl font-semibold">Our Team</h2>
		<p class="text-lg">
			We are a team of designers, developers, and strategists who love building impactful digital
			products.
		</p>
	</section>
</div>
