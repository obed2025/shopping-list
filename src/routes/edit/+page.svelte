<script lang="ts">
	import { page, data } from '$lib/state.svelte';
	import Items from '$lib/Items.svelte';
	import Button from '$lib/Button.svelte';
	import AdditionalExpenses from '$lib/AdditionalExpenses.svelte';

	page.title = 'Edit';

	function addItem() {
		data.list.push({
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
</script>

<form onsubmit={(e) => e.preventDefault()}>
	{@render Input('Title', 'title', 'Enter Title', 'title')}
	{@render Input('Subtitle', 'subtitle', 'Enter Sub Title', 'subtitle')}

	<fieldset>
		<label for="items">
			<input
				type="radio"
				name="category"
				id="items"
				value="items"
				bind:group={page.selectedOption}
			/>
			Items
		</label>
		<label for="additional-expenses">
			<input
				type="radio"
				name="category"
				id="additional-expenses"
				value="additional-expenses"
				bind:group={page.selectedOption}
			/>
			Additional Expenses
		</label>
	</fieldset>

	<hr />

	{#if page.selectedOption === 'items'}
		<Button onclick={addItem} icon="plus" text="Add new item"></Button>
		<Items></Items>
	{/if}

	{#if page.selectedOption === 'additional-expenses'}
		<Button onclick={addExpenses} icon="plus" text="Add new expenses"></Button>
		<AdditionalExpenses></AdditionalExpenses>
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
</style>
