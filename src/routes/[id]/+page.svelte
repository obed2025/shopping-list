<script lang="ts">
	import { page } from '$app/state';
	import { del } from 'idb-keyval';
	import Table from '$lib/Table.svelte';
	import Button from '$lib/Button.svelte';
	import { goto } from '$app/navigation';
	import { page as myPage } from '$lib/state.svelte';
	import type { PageProps } from '../$types';
	import type { List } from '$lib/types';

	interface PageData {
		list: List;
	}

	const { id } = page.params;
	const { data }: PageProps = $props();
	const { list } = data as PageData;
	myPage.print = true;
</script>

{#if list}
	<h1>{list.title}</h1>
	<h2>{list.subtitle}</h2>
	<Button icon="pen" isPrimary onclick={() => goto(`${id}/edit`)} text="Edit"></Button>
	<Button
		icon="trash"
		onclick={() => {
			if (confirm('Do you really want to delete this list. This action is irreversible!')) {
				del(+id);
				goto('/');
			}
		}}
		text="Delete"
	></Button>
	{#if list.items.length}
		<Table data={list}></Table>
	{:else}
		<p>Your list is empty, <a href="/{id}/edit">add a new item</a></p>
	{/if}
{:else if typeof list == 'undefined'}
	<p>Loading.....</p>
{:else}
	<p>List not found! <a href="/">Go Back Home!</a></p>
{/if}

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
