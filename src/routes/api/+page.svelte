<script>
	let products = $state('');

	async function load() {
		const response = await fetch('/api/products');
		if (response.ok) products = await response.text();
	}

	$effect(() => {
		load();
	});
</script>

<h1>API page</h1>
