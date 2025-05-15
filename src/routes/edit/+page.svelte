<script lang="ts">
	import { page, data } from '$lib/state.svelte';

	page.title = 'Edit';

	const data_copy = $derived((() => [...data.list].reverse())());
	const dataStr = $derived(
		JSON.stringify({
			title: data.title,
			subtitle: data.subtitle,
			list: data.list
		})
	);

	function onclick() {
		data.list.push({
			description: '',
			unit: '',
			quantity: 0,
			unitPrice: 0
		});
	}

	function importDevi() {
		const data2 = JSON.parse(localStorage.getItem('list') ?? dataStr);

		data.title = data2.title;
		data.subtitle = data2.subtitle;
		data.list = data2.list;
	}
</script>

<form>
	<div class="right">
		<button onclick={importDevi}>Import</button>
		<button onclick={() => localStorage.setItem('list', dataStr)}>Save</button>
	</div>

	<div>
		<label for="title">Title</label>
		<input type="text" id="title" bind:value={data.title} placeholder="Enter title" />
	</div>

	<div>
		<label for="subtitle">Subtitle</label>
		<input type="text" id="subtitle" bind:value={data.subtitle} placeholder="Enter subtitle" />
	</div>

	<hr />

	<button {onclick}>&plus;</button>

	{#each data_copy as item, i}
		<div>
			<input type="text" bind:value={item.description} placeholder="Description" />
			<input type="text" bind:value={item.unit} placeholder="Unit" />
			<input type="number" inputmode="numeric" bind:value={item.quantity} placeholder="quantity" />
			<input
				type="number"
				inputmode="numeric"
				bind:value={item.unitPrice}
				placeholder="Unit price"
			/>
		</div>
		<button onclick={() => data.list.splice(data.list.length - (i + 1), 1)}>Delete</button>
	{/each}
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 41rem;
		margin: auto;
	}

	button {
		width: fit-content;
	}

	div {
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
