<script lang="ts">
	import { page } from '$lib/state.svelte';
	import type { PageProps } from './$types';

	page.title = 'Home';
	page.print = false;

	const { data }: PageProps = $props();
	const { lists } = data;
</script>

{#if lists?.length}
	<ul>
		{#each lists as list}
			{@const id = list[0]}
			{@const item = list[1]}

			<li>
				<h3>
					<a href="/{id}">{item.title ? item.title : 'Untitled'} </a>
				</h3>
				{item.subtitle}
			</li>
		{/each}
	</ul>
{:else if typeof lists == 'undefined'}
	<p>Loading.....</p>
{:else}
	<p>Nothing found on your device! <a href="/new">Create a new list</a></p>
{/if}

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
