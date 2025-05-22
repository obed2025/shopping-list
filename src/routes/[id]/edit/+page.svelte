<script lang="ts">
	import { page } from '$lib/state.svelte';
	import Items from '$lib/Items.svelte';
	import Button from '$lib/Button.svelte';
	import AdditionalExpenses from '$lib/AdditionalExpenses.svelte';
	import { goto } from '$app/navigation';
	import { page as myPage } from '$app/state';
	import { set } from 'idb-keyval';
	import type { List } from '$lib/types';
	import type { PageProps } from '../$types';

	page.print = false;
	let selectedOption: 'items' | 'additional-expenses' = $state('items');

	let data: List = $state({
		items: [],
		additionalExpenses: [],
		title: '',
		subtitle: ''
	});

	page.title = 'Edit';

	function addItem() {
		data.items.push({
			description: '',
			unit: '',
			quantity: null,
			unitPrice: null
		});
	}

	function addExpenses() {
		data.additionalExpenses.push({
			name: '',
			amount: null
		});
	}

	const { data: dataFromDb }: PageProps = $props();
	const { list } = dataFromDb;

	data.additionalExpenses = list?.additionalExpenses ?? [];
	data.items = list?.items ?? [];
	data.subtitle = list?.subtitle ?? '';
	data.title = list?.title ?? '';
</script>

<Button
	icon="save"
	onclick={() => {
		set(+myPage.params.id, {
			title: data.title,
			subtitle: data.subtitle,
			items: JSON.parse(JSON.stringify(data.items)),
			additionalExpenses: JSON.parse(JSON.stringify(data.additionalExpenses))
		});
		goto(`/${+myPage.params.id}`);
	}}
	text="Save"
></Button>

<form onsubmit={(e) => e.preventDefault()}>
	{@render Input('Title', 'title', 'Enter Title', 'title')}
	{@render Input('Subtitle', 'subtitle', 'Enter Sub Title', 'subtitle')}

	<fieldset>
		<label for="items">
			<input type="radio" name="category" id="items" value="items" bind:group={selectedOption} />
			Items
		</label>
		<label for="additional-expenses">
			<input
				type="radio"
				name="category"
				id="additional-expenses"
				value="additional-expenses"
				bind:group={selectedOption}
			/>
			Additional Expenses
		</label>
	</fieldset>

	<hr />

	{#if selectedOption === 'items'}
		<Button onclick={addItem} icon="plus" text="Add new item"></Button>
		<Items {data}></Items>
	{/if}

	{#if selectedOption === 'additional-expenses'}
		<Button onclick={addExpenses} icon="plus" text="Add new expenses"></Button>
		<AdditionalExpenses {data}></AdditionalExpenses>
	{/if}
</form>

{#snippet Input(label: string, id: string, placeholder: string, value: 'title' | 'subtitle')}
	<div>
		<label for={id}>{label}</label>
		<input type="text" {id} bind:value={data[value]} {placeholder} />
	</div>
{/snippet}

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 41rem;
		margin: auto;
		accent-color: black;
	}

	:global(button) {
		width: fit-content;
	}

	:global(div) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	hr {
		height: 1px;
		margin: 0;
		border: 0;
		background: black;
	}

	form {
		margin-bottom: 1rem;
	}

	label {
		font-weight: 500;

		&:has(input),
		input {
			cursor: pointer;
		}
	}

	:global(input:not([type='radio'])) {
		padding: 0.25rem 0.5rem;
		border: none;
		outline: 2px solid hsl(0, 0%, 50%);

		&:focus {
			outline-color: hsl(0, 0%, 20%);
		}
	}

	fieldset {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	div:nth-child(1) {
		margin-top: 1.5rem;
	}
</style>
