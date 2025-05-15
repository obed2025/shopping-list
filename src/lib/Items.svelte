<script lang="ts">
	import { data } from './state.svelte';

	const reversedList = $derived((() => [...data.list].reverse())());
</script>

<div class="container">
	{#each reversedList as item, i}
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
			<button onclick={() => data.list.splice(data.list.length - (i + 1), 1)}>Delete</button>
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>
