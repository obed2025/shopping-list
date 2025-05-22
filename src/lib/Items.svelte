<script lang="ts">
	import type { List } from './types';
	import Button from './Button.svelte';

	const { data }: { data: List } = $props();
	const reversedList = $derived((() => [...data.items].reverse())());
</script>

<div class="container">
	{#each reversedList as item, i}
		<div>
			<input type="text" bind:value={item.description} placeholder="Description" />
			<input type="text" bind:value={item.unit} placeholder="Unit" />
			<input type="number" inputmode="numeric" bind:value={item.quantity} placeholder="Quantity" />
			<input
				type="number"
				inputmode="numeric"
				bind:value={item.unitPrice}
				placeholder="Unit price"
			/>
			<Button
				onclick={() => data.items.splice(data.items.length - (i + 1), 1)}
				icon="trash"
				text="Delete"
			></Button>
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
