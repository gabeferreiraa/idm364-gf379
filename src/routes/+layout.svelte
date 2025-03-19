<script lang="js">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="mt-16 flex-grow">
		{@render children?.()}
	</main>
	<Footer />
</div>
