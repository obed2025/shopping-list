<script lang="ts">
	import { page, data } from '$lib/state.svelte';
	import Table from '$lib/Table.svelte';

	page.title = 'Home';
</script>

<h1>{data.title}</h1>
<h2>{data.subtitle}</h2>

{#if data.list.length}
	<Table></Table>
{:else}
	<p>Your list is empty, try to add a new item!</p>
{/if}

<style>
	@media only print {
		h1,
		h2 {
			margin-top: 1.5rem;
		}
	}
</style>
