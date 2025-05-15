<script lang="ts">
	import { page, data } from '$lib/state.svelte';
	import Items from '$lib/Items.svelte';

	page.title = 'Edit';

	function addItem() {
		data.list.push({
			description: '',
			unit: '',
			quantity: 0,
			unitPrice: 0
		});
	}

	function importData() {
		const data2 = JSON.parse(localStorage.getItem('list') ?? data.str);

		data.title = data2.title;
		data.subtitle = data2.subtitle;
		data.list = data2.list;
	}

	function saveData() {
		localStorage.setItem('list', data.str);
		data.reset();
	}
</script>

<form>
	<div class="right">
		<button onclick={importData}>Import</button>
		<button onclick={saveData}>Save</button>
	</div>
	{@render Input('Title', 'title', 'Enter Title', 'title')}
	{@render Input('Subtitle', 'subtitle', 'Enter Sub Title', 'subtitle')}

	<hr />
	<button onclick={addItem}>Add new item</button>
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

		&.right {
			flex-direction: row;
			justify-content: flex-end;
		}
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
