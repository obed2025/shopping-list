<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import { page } from '$lib/state.svelte';
	import type { List } from '$lib/types';
	import { set } from 'idb-keyval';

	page.print = false;

	const id = Date.now();
	let data: List = $state({
		title: '',
		subtitle: '',
		items: [],
		additionalExpenses: []
	});

	async function onsubmit(e: SubmitEvent) {
		e.preventDefault();
		await set(id, JSON.parse(JSON.stringify(data)));
		goto(`${id}`);
	}
</script>

<form {onsubmit}>
	{@render Input('Title', 'title', 'Enter Title', 'title', true)}
	{@render Input('Subtitle', 'subtitle', 'Enter Sub Title', 'subtitle')}

	<Button text="Create" icon="plus" onclick={() => undefined}></Button>
</form>

{#snippet Input(
	label: string,
	id: string,
	placeholder: string,
	value: 'title' | 'subtitle',
	required?: boolean
)}
	<div>
		<label for={id}>{label}</label>
		<input type="text" {id} bind:value={data[value]} {placeholder} {required} />
	</div>
{/snippet}

<style>
	form,
	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 41rem;
	}

	input {
		padding: 0.25rem 0.5rem;
		border: none;
		outline: 2px solid hsl(0, 0%, 50%);

		&:focus {
			outline-color: hsl(0, 0%, 20%);
		}
	}

	label {
		font-weight: 500;
	}

	:global(button) {
		width: fit-content;
	}

	input {
		width: 100%;
	}
</style>
