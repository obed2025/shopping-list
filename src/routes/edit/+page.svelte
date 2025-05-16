<script lang="ts">
	import { page, data } from '$lib/state.svelte';
	import Items from '$lib/Items.svelte';
	import Button from '$lib/Button.svelte';

	page.title = 'Edit';

	function addItem() {
		data.list.push({
			description: '',
			unit: '',
			quantity: 0,
			unitPrice: 0
		});
	}
</script>

<form>
	{@render Input('Title', 'title', 'Enter Title', 'title')}
	{@render Input('Subtitle', 'subtitle', 'Enter Sub Title', 'subtitle')}

	<hr />
	<Button onclick={addItem} icon="plus" text="Add new item"></Button>
	<Items></Items>
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
</style>
