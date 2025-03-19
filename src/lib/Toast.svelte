<script>
	export let message = '';
	export let visible = false;
</script>

{#if visible}
	<div
		class="fixed bottom-6 right-6 z-50 rounded-lg bg-green-600 px-6 py-4 text-white shadow-lg transition duration-300"
	>
		{message}
	</div>
{/if}
