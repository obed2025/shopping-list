<script lang="ts">
	import { goto } from '$app/navigation';
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

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<li onclick={() => goto(`/${id}`)}>
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
		margin-bottom: 0.5rem;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}

	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	ul {
		padding-bottom: 4rem;
	}

	li {
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: rgba(0, 0, 0, 0.062);
		cursor: pointer;
	}
</style>
