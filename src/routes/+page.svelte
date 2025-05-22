<script lang="ts">
	import { page } from '$lib/state.svelte';
	import { keys, get } from 'idb-keyval';
	import type { List } from '$lib/types';

	page.title = 'Home';
	page.print = false;
</script>

{#await keys<number>()}
	<p>Loading.....</p>
{:then shoppingListsKeys}
	{#if shoppingListsKeys.length}
		<ul>
			{#each shoppingListsKeys as listKey}
				<li>
					{#await get<List>(listKey)}
						<p>Loading....</p>
					{:then item}
						<h3>
							<a href="/{listKey}">{item?.title ? item.title : 'Untitled'}</a>
						</h3>
						{item?.subtitle}
					{/await}
				</li>
			{/each}
		</ul>
	{:else}
		<p>Nothing found on your device! <a href="/new">Create a new list</a></p>
	{/if}
{/await}

<style>
	a {
		color: black;
		font-weight: 500;
	}

	h3 {
		margin-bottom: 0;
	}

	li {
		margin-bottom: 0.5rem;
	}
</style>
