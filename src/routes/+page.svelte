<script lang="ts">
	import { page, data } from '$lib/state.svelte';
	import Table from '$lib/Table.svelte';

	page.title = 'Home';
</script>

<h1>{data.title}</h1>
<h2>{data.subtitle}</h2>

<Table></Table>

<style>
	@media only print {
		h1,
		h2 {
			margin-top: 1.5rem;
		}
	}
</style>
