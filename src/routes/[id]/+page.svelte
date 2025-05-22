<script lang="ts">
	import { page } from '$app/state';
	import { del, get } from 'idb-keyval';
	import type { List } from '$lib/types';
	import Table from '$lib/Table.svelte';
	import Button from '$lib/Button.svelte';
	import { goto } from '$app/navigation';
	import { page as myPage } from '$lib/state.svelte';

	const { id } = page.params;
	myPage.print = true;
</script>

{#await get<List>(+id)}
	<p>Loading...</p>
{:then data}
	{#if data}
		<h1>{data.title}</h1>
		<h2>{data.subtitle}</h2>
		<Button icon="pen" isPrimary onclick={() => goto(`${id}/edit`)} text="Edit"></Button>
		<Button
			icon="trash"
			onclick={() => {
				del(+id);
				goto('/');
			}}
			text="Delete"
		></Button>
		{#if data.items.length}
			<Table {data}></Table>
		{:else}
			<p>Your list is empty, <a href="/{id}/edit">add a new item</a></p>
		{/if}
	{:else}
		<p>List not found! <a href="/">Go Back Home!</a></p>
	{/if}
{/await}

<style>
	a {
		color: black;
		font-weight: 500;
	}

	:global(h2 + button) {
		margin-right: 0.75rem;
	}

	@media print {
		:global(button) {
			display: none;
		}
	}
</style>
